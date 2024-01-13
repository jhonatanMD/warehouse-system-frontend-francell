import { Modal } from "reactstrap"
const ModalSedes = props => {
  return (
    <Modal isOpen={props.modal_standard}>
      <div className="modal-header">
        <h5 className="modal-title mt-0" id="myModalLabel">
          Seleccione el sede
        </h5>
        <button
          type="button"
          onClick={() => {
            props.setmodal_standard(false)
          }}
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="d-grid gap-2 col-6 mx-auto">
          {props.sedes.map((value, index) => (
            <button
              className="btn btn-info"
              type="button"
              key={index}
              onClick={() => props.selectedSede(value.id)}
            >
              {value.sede}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default ModalSedes
