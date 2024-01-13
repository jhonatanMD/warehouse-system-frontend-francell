import axios from "axios"
import is_valid_token from "../helpers/is_valid_token"
import * as routesApi from "./routes_api"
import config from "../config"

let axiosInstance = axios.create({
  baseURL: config.mainApi,
  /* other custom settings */
})

const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
const debug = (params.hasOwnProperty("debug") && params.debug) || false

const interceptor = store => {
  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem("token") || "";
      if (token && !is_valid_token(token)) {
        localStorage.clear()
        window.location.href = "/login"
      }
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
      store.dispatch({
        type: "ADD_LOADING_REQUEST",
      })
      //console.log(config)
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      // Do something with response data
      store.dispatch({
        type: "REMOVE_LOADING_REQUEST",
      })
      return response
    },
    function (error) {
      store.dispatch({
        type: "REMOVE_LOADING_REQUEST",
      })
      // Do something with response error
      return Promise.reject(error)
    }
  )
}

const printResult = (method, uri, response) => {
  if (debug) {
    console.log(`Request: ${method}:${uri}`)
    console.log(response)
  }
}

const getMainProvide = async (url = "", options = {}) => {
  try {
    const response = await axiosInstance.get(url, options)
    printResult("GET", url, response.data)
    return response.data
  } catch (error) {
    if (error.response != undefined) {
      console.log(error.response)
      throw new Error(error.response.data.message)
    } else if (axios.isCancel(error)) {
      return error
    } else {
      console.log(error)
      throw new Error(error.message)
    }
  }
}

const postMainProvide = async (url = "", data = {}, options = {}) => {
  try {
    const response = await axiosInstance.post(url, data, options)
    printResult("POST", url, response.data)
    return response.data
  } catch (error) {
    if (error.response != undefined) {
      console.log(error.response)
      throw new Error(error.response.data.message)
    } else {
      console.log(error)
      throw new Error(error.message)
    }
  }
}

const postFileMainProvide = async (url = "", data = {}, options = {}) => {
  try {
    const response = await axiosInstance.post(url, data, options)
    printResult("POST", url, response.data)
  } catch (error) {
      console.log(error)
  }
}

const putMainProvider = async (url = "", data = {}) => {
  try {
    const response = await axiosInstance.put(url, data)
    printResult("PUT", url, response.data)
    return response.data
  } catch (error) {
    if (error.response != undefined) {
      console.log(error.response)
      throw new Error(error.response.data.message)
    } else {
      console.log(error)
      throw new Error(error.message)
    }
  }
}

const deleteMainProvider = async (url = "", data = {}) => {
  try {
    const response = await axiosInstance.delete(url, data)
    printResult("DELETE", url, response.data)
    return response.data
  } catch (error) {
    if (error.response != undefined) {
      console.log(error.response)
      throw new Error(error.response.data.message)
    } else {
      console.log(error)
      throw new Error(error.message)
    }
  }
}

export {
  interceptor,
  getMainProvide,
  postMainProvide,
  putMainProvider,
  deleteMainProvider,
  postFileMainProvide,
  axiosInstance,
  axios,
  routesApi,
}
