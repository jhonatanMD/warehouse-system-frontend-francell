import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import Guard from "helpers/guard"
import menu from "./menu"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const HandleGuard = new Guard(props.Profile.user ? props.Profile.user.roles.permissionRole : false)

  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {menu.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  {HandleGuard.renderView(
                    <li className={`${Object.keys(value).length == 3 ? "menu-title" : ""}`}>
                      {Object.keys(value).length == 3 ? (
                        value.title
                      ) : (
                        <>
                          {HandleGuard.renderView(
                            <Link
                              to={value.url || "/#"}
                              className={value.hasArrow > 0 ? "has-arrow waves-effect" : ""}
                            >
                              <i className={`bx ${value.icon}`}></i>
                              {value.badge && (
                                <span className={`badge rounded-pill bg-${value.badge} float-end`}>
                                  {value.badgeText}
                                </span>
                              )}
                              <span>{props.t(value.title)}</span>
                            </Link>,
                            value.permissions,
                            value.permissionsStrict
                          )}

                          {value.children && value.children.length > 0 && (
                            <>
                              {HandleGuard.renderView(
                                <ul className="sub-menu" aria-expanded="false">
                                  {value.children && (
                                    <>
                                      {value.children.map((child, idx) => {
                                        return (
                                          <React.Fragment key={idx}>
                                            {HandleGuard.renderView(
                                              <li>
                                                <Link
                                                  to={child.url || "/#"}
                                                  className="waves-effect"
                                                >
                                                  {props.t(child.title)}
                                                </Link>
                                              </li>,
                                              child.permissions,
                                              child.permissionsStrict
                                            )}
                                          </React.Fragment>
                                        )
                                      })}
                                    </>
                                  )}
                                </ul>,
                                value.permissions,
                                value.permissionsStrict
                              )}
                            </>
                          )}
                        </>
                      )}
                    </li>,
                    value.permissions,
                    value.permissionsStrict
                  )}
                </React.Fragment>
              )
            })}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

const mapStateToProps = state => ({ Profile: state.Profile })

export default withRouter(connect(mapStateToProps, {})(withTranslation()(SidebarContent)))
