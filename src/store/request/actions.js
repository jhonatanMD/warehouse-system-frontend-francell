import { ADD_LOADING_REQUEST, REMOVE_LOADING_REQUEST } from "./actionTypes"

export const addLoadingRequest = options => ({
  type: ADD_LOADING_REQUEST,
  payload: options,
})

export const removeLoadingRequest = data => ({
  type: REMOVE_LOADING_REQUEST,
  payload: data,
})
