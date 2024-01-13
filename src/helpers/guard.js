import React from "react"
const permission_types = ['insert', 'consult', 'update', 'delete'];
class Guard {
  constructor(props) {
    this._data = props
    this._permissions = []
    this._getData();
  }

  _getData() {
    if (this._data) {
      //console.log("GUARD-USER: ", this._user)
      this._data.forEach(element => {
        permission_types.forEach((per) => {
          const key = `${element.modules.id}_${per}`;
          if (element[per] && this._permissions.findIndex(e => e == key) == -1) {
            this._permissions.push(key)
          }
        })
      });
    }
  }

  test() {
    return this._permissions
  }

  renderView(view, permissions = [], strict = true) {
    /**
     * PERMISSION KEY=<MODULE_ID:ACTION>
     */
    let hasPermitions = false
    if (strict) {
      hasPermitions = permissions.every(e => this._permissions.findIndex(f => e == f) != -1)
    } else {
      hasPermitions = permissions.some(e => this._permissions.findIndex(f => e == f) != -1)
    }
    if (hasPermitions) {
      return view
    }
    return null
  }

  hasAccess(permissions = [], strict = true) {
    /**
     * PERMISSION KEY=<MODULE_ID:ACTION>
     */
    let hasPermitions = false
    if (strict) {
      hasPermitions = permissions.every(e => this._permissions.findIndex(f => e == f) != -1)
    } else {
      hasPermitions = permissions.some(e => this._permissions.findIndex(f => e == f) != -1)
    }

    if (hasPermitions) {
      return true
    }
    return false
  }

  RenderViewElement(props) {
    return (
      <React.Fragment>
        {props.renderView(props.children, props.permissions, props.strict)}
      </React.Fragment>
    )
  }
}

export default Guard
