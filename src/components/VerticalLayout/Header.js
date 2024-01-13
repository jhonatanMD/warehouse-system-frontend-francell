import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import ReactDrawer from "react-drawer"
import { Link } from "react-router-dom"
import "react-drawer/lib/react-drawer.css"

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import SedesMenu from "../CommonForBoth/TopbarDropdown/sedesMenu"

//i18n
import { withTranslation } from "react-i18next"

import { getMainProvide, postMainProvide, routesApi } from "../../services/request"
import toastr from "toastr"
import { userGetProfileSuccess } from "../../store/actions"

// Redux Store
import { showRightSidebarAction, toggleLeftmenu, changeSidebarType } from "../../store/actions"

const Header = props => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  useEffect(() => {
    if (!props.user) {
      const getData = async () => {
        try {
          const response = await postMainProvide(routesApi.AUTH_GET_DATA_LOGIN(), {})
          localStorage.setItem("token", response.jwt)
          delete response.jwt
          props.userGetProfileSuccess(response)
        } catch (error) {
          toastr.error(error)
          console.log(error)
        }
      }
      getData()
    }
  }, [props.user])

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {
    var body = document.body
    body.classList.toggle("vertical-collpsed")
    body.classList.toggle("sidebar-enable")
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <button
              type="button"
              onClick={() => {
                tToggle()
              }}
              className="btn btn-sm px-3 font-size-16 header-item "
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>
          <div className="d-flex">
            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen()
                }}
                className="btn header-item noti-icon"
                data-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div>
            <SedesMenu />
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } = state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
  userGetProfileSuccess,
})(withTranslation()(Header))
