import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Profile from "./auth/profile/reducer"

import Request from "./request/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Request,
  Profile,
})

export default rootReducer
