import React, { useState, useEffect } from "react"

// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { Modal } from "reactstrap"
import FormHelper from "./index"

import Guard from "../guard";

const ModalFormWithoutButton = (props) => {
  const { handle, showModal, data, hiddenModal, reset } = props;

  const HandleGuard = new Guard(props.Profile.user ? props.Profile.user.roles.permissionRole : false);

  const [loading, setLoading] = useState(false)
  const tog_standard = () => {
    hiddenModal()
    document.body.classList.add("no_padding")
  }

  return HandleGuard.renderView(
    <Modal
      isOpen={showModal}
      toggle={() => {
        console.log("execute toggle")
        tog_standard()
      }}
    >
      <div className="modal-header">
        <h5 className="modal-title mt-0" id="myModalLabel">
          Actualizar registro
        </h5>
        <button
          type="button"
          onClick={() => {
            hiddenModal()
          }}
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <FormHelper
          data={data}
          loading={loading}
          setLoading={setLoading}
          reset={reset}
          onSubmit={async data => {
            setLoading(true)
            await handle(data)
          }}
          readonly={props.hasOwnProperty('readonly') ? props.readonly : false}
        />
      </div>
    </Modal>,
    props.permissions ? [...props.permissions] : [], true
  )
}

const mapStateToProps = state => ({
  Profile: state.Profile,
})

export default withRouter(connect(mapStateToProps, {})(ModalFormWithoutButton))
