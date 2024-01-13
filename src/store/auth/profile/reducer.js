import { USER_GET_PROFILE, USER_GET_PROFILE_SUCCESS, USER_GET_PROFILE_FAIL } from "./actionTypes"

const initialState = {
  user: false,
  loading: false,
  error: "",
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case USER_GET_PROFILE:
      state = { ...state, loading: true, user: false }
      break
    case USER_GET_PROFILE_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload,
      }
      break
    case USER_GET_PROFILE_FAIL:
      state = { ...state, loading: false, user: false }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default profile
