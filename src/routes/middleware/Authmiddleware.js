import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import toastr from "toastr"
import is_valid_token from "../../helpers/is_valid_token"

const Authmiddleware = ({ component: Component, layout: Layout, isAuthProtected, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthProtected) {
        if (!localStorage.getItem("token")) {
          return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        }
        // here you can apply condition
        let token = localStorage.getItem("token")

        if (!is_valid_token(token)) {
          toastr.info("Sessión finalizada.")
          localStorage.clear()
          return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        }
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware
