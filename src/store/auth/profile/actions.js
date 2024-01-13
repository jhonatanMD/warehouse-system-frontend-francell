import { USER_GET_PROFILE, USER_GET_PROFILE_FAIL, USER_GET_PROFILE_SUCCESS } from "./actionTypes"

export const userGetProfile = () => {
  return {
    type: USER_GET_PROFILE,
  }
}

export const userGetProfileSuccess = data => {
  return {
    type: USER_GET_PROFILE_SUCCESS,
    payload: data,
  }
}

export const userGetProfileFail = error => {
  return {
    type: USER_GET_PROFILE_FAIL,
    payload: error,
  }
}
