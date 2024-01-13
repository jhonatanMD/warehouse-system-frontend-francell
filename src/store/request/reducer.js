import { ADD_LOADING_REQUEST, REMOVE_LOADING_REQUEST } from "./actionTypes"

const INIT_STATE = {
  loading: 0,
}

const request = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_LOADING_REQUEST:
      return {
        ...state,
        loading: state.loading + 1,
      }
    case REMOVE_LOADING_REQUEST:
      return {
        ...state,
        loading: state.loading - 1,
      }
    default:
      return state
  }
}

export default request
