import jwtDecode from "jwt-decode"
const valid_token = token => {
  let valid = true
  const { exp } = jwtDecode(token)
  // console.log("exp ", exp)
  const expirationTime = exp * 1000 - 60000
  // console.log("expirationTime: ", expirationTime)

  // console.log("Date.now(): ", Date.now())

  if (Date.now() >= expirationTime) {
    valid = false
  }
  return valid
}

export default valid_token
