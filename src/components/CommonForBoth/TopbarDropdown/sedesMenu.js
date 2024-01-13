import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"

import { getMainProvide, postMainProvide, routesApi } from "../../../services/request"
import toastr from "toastr"

//i18n
import { withTranslation } from "react-i18next"
// Redux
import { connect } from "react-redux"
import { withRouter, Link, useHistory } from "react-router-dom"

const ProfileMenu = props => {
  const history = useHistory()
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)
  const [sedes, setSedes] = useState([])
  const [defaultSede, setDefaultSede] = useState(false)

  useEffect(() => {
    if (props.user.headquarters) {
      setDefaultSede(props.user.headquarters)
      const getData = async () => {
        try {
          const response = await getMainProvide(routesApi.SEDE_GET_ALL(), {})
          setSedes(response)
          //props.userGetProfileSuccess(response.datos_usuario)
        } catch (error) {
          toastr.error(error)
          console.log(error)
        }
      }
      getData()
    }
  }, [props.user])

  const getRolActive = id => {
    if (sedes.length > 0) {
      if (id) {
        return sedes.find(e => e.id == id)
      } else {
        return sedes[0]
      }
    }
    return false
  }

  const handleChangeRol = id => {
    try {
      localStorage.setItem("sede", id)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <span className="d-xl-inline-block ml-2 mr-1">
            <strong>SEDE: </strong>
            {defaultSede ? defaultSede.name : "-"}
          </span>
          {sedes.length > 1 ? <i className="mdi mdi-chevron-down d-xl-inline-block" /> : null}
        </DropdownToggle>
        {sedes.length > 1 ? (
          <DropdownMenu right>
            {sedes
              .filter(e => e.id != props.user.headquarters.id)
              .map((value, index) => (
                <Link
                  to="#"
                  className="dropdown-item"
                  key={index}
                  onClick={() => handleChangeRol(value.id)}
                >
                  <span>{value.name}</span>
                </Link>
              ))}
          </DropdownMenu>
        ) : null}
      </Dropdown>
    </React.Fragment>
  )
}

ProfileMenu.propTypes = {
  t: PropTypes.any,
}

const mapStatetoProps = state => ({
  user: state.Profile.user,
})

export default withRouter(connect(mapStatetoProps, {})(withTranslation()(ProfileMenu)))
