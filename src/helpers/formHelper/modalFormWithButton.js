import React, { useState } from "react"
// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { Modal } from "reactstrap"
import FormHelper from "./index"

import Guard from "../guard";

const ModalFormWithButton = (props) => {
  const {
    onlyIcon,
    handle,
    data,
    defaultFormik,
    title,
    reset,
    titleButton,
    textConfirmButton,
  } = props;
  const HandleGuard = new Guard(props.Profile.user ? props.Profile.user.roles.permissionRole : false);

  const [modal_standard, setmodal_standard] = useState(false)
  const [loading, setLoading] = useState(false)

  const tog_standard = () => {
    setmodal_standard(!modal_standard)
    document.body.classList.add("no_padding")
  }

  return HandleGuard.renderView(
    <>
      <button
        type="button"
        onClick={() => {
          tog_standard()
        }}
        className="btn btn-primary waves-effect waves-light btn-sm"
        data-toggle="modal"
        data-target="#myModal"
      >
        <i className={`bx bx-plus font-size-16 align-middle${!onlyIcon ? " mr-2" : ""}`}></i>
        {titleButton ? titleButton : !onlyIcon && "Nuevo"}
      </button>
      <Modal
        isOpen={modal_standard}
        toggle={() => {
          tog_standard()
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myModalLabel">
            {title ? title : "Registro nuevo"}
          </h5>
          <button
            type="button"
            onClick={() => {
              setmodal_standard(false)
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
            defaultFormik={defaultFormik}
            tog_standard={tog_standard}
            loading={loading}
            setLoading={setLoading}
            reset={reset}
            textConfirmButton={textConfirmButton}
            onSubmit={async data => {
              setLoading(true)
              await handle(data)
              tog_standard()
            }}
          />
        </div>
      </Modal>
    </>,
    props.permissions ? [...props.permissions] : [], true
  )
}

const mapStateToProps = state => ({
  Profile: state.Profile,
})

export default withRouter(connect(mapStateToProps, {})(ModalFormWithButton))
