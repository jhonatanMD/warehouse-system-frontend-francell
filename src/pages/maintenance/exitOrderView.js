import React, { useState, useEffect } from "react"
import { Card, Col, Container, Row, CardBody, CardTitle, Modal } from "reactstrap"
import FormHelper from "helpers/formHelper"
import { exitOrderFields, exitOrderProductFields } from "common/fieldsForm"
import TableExitOrder from "./exitOrder/tableExitOrder"
import ModalFormWithButton from "../../helpers/formHelper/modalFormWithButton"
import { getMainProvide, postMainProvide, routesApi } from "services/request"
import { MSG_ERROR_SAVE } from "helpers/messages"
import toastr from "toastr"
import { useHistory } from "react-router-dom"
import moment from "moment"
import config from "../../config"

const ExitOrderCreate = props => {
  const history = useHistory()

  const [modal_standard, setmodal_standard] = useState(false)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [selectedRecord, setSelectedRecord] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const response = await getMainProvide(routesApi.SALES_GET_BY_ID(props.match.params.id))
        console.log(response)
        // response.fecha = moment(response.fecha, "DD-MM-YYYY").format("YYYY-MM-DD")
        setSelectedRecord(response)
        setProducts(response.saleDetails)
      } catch (error) {
        console.log(error)
        toastr.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  const tog_standard = () => {
    setmodal_standard(!modal_standard)
    document.body.classList.add("no_padding")
  }

  return (
    <div className="page-content">
      <Container fluid={true}>
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">Venta</CardTitle>

                {selectedRecord && (
                  <>
                    <div className="my-3">
                      <a
                        className="btn btn-success btn-block btn-sm"
                        href={
                          config.mainApi + routesApi.SALES_REPORT(selectedRecord.id)
                        }
                        target="_blank"
                      >
                        reporte
                      </a>
                    </div>
                    <FormHelper
                      data={{
                        fields: exitOrderFields.update(selectedRecord),
                      }}
                      readonly={true}
                      loading={loading}
                      setLoading={setLoading}
                      component={() => (
                        <TableExitOrder products={products} />
                      )}
                      onSubmit={async data => { }}
                    />
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* end row  */}
      </Container>
      {/* container-fluid */}
      <Modal
        isOpen={modal_standard}
        toggle={() => {
          tog_standard()
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myModalLabel">
            Nuevo item
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
          <form className="row">
            <div className="mb-3 col-12">
              <label>Producto</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 col-12">
              <label>Cantidad</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 d-grid gap-2">
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={() => setmodal_standard(false)}
              >
                Agregar item
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default ExitOrderCreate
