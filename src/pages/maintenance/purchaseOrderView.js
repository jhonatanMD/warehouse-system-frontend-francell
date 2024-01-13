import React, { useState, useEffect } from "react"
import { Card, Col, Container, Row, CardBody, CardTitle, Modal } from "reactstrap"
import FormHelper from "helpers/formHelper"
import { pucharseOrderFields, pucharseOrderProductFields } from "common/fieldsForm"
import TablePucharseOrder from "./pucharseOrder/tablePucharseOrder"
import ModalFormWithButton from "../../helpers/formHelper/modalFormWithButton"
import { getMainProvide, postMainProvide, routesApi } from "services/request"
import { MSG_ERROR_SAVE } from "helpers/messages"
import toastr from "toastr"
import { useHistory } from "react-router-dom"
import moment from "moment"
import config from "../../config"

const PurchaseOrderCreate = props => {
  const history = useHistory()
  const [modal_standard, setmodal_standard] = useState(false)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [selectedRecord, setSelectedRecord] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const response = await getMainProvide(routesApi.BUY_ORDER_GET_BY_ID(props.match.params.id))
        console.log(response)
        response.fecha = moment(response.fecha, "DD-MM-YYYY").format("YYYY-MM-DD")
        setSelectedRecord(response)
        setProducts(response.productos)
      } catch (error) {
        console.log(error)
        toastr.error(MSG_ERROR_GET_RECORDS)
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
                <CardTitle className="mb-4">Vista orden de compra</CardTitle>
                {selectedRecord && (
                  <>
                    <div className="my-3">
                      <a
                        className="btn btn-success btn-block btn-sm"
                        href={
                          config.mainApi + routesApi.BUY_ORDER_REPORT() + "?id=" + selectedRecord.id
                        }
                        target="_blank"
                      >
                        reporte
                      </a>
                    </div>
                    <FormHelper
                      data={{
                        fields: pucharseOrderFields.update(selectedRecord),
                      }}
                      readonly={true}
                      loading={loading}
                      setLoading={setLoading}
                      component={() => (
                        <>
                          <TablePucharseOrder products={products} />
                        </>
                      )}
                      onSubmit={async data => {
                        try {
                          setLoading(true)
                          console.log(data)
                          if (products.length == 0) {
                            toastr.warning("Seleccione almenos un producto")
                          } else {
                            const orderCompra = {
                              atencionProveedor: data.atencionProveedor,
                              cotizacionProveedor: data.cotizacionProveedor,
                              direccionEmpresa: data.direccionEmpresa,
                              direccionProveedor: data.direccionProveedor,
                              emailProveedor: data.emailProveedor,
                              fecha: data.fecha,
                              formatoPago: data.formatoPago,
                              idSede: localStorage.getItem("sede"),
                              motivoProveedor: data.motivoProveedor,
                              numeroCuenta: data.numeroCuenta,
                              numeroSerie: data.numeroSerie,
                              observacion: data.observacion,
                              plazoEntrega: data.plazoEntrega,
                              productos: products,
                              razonSocial: data.razonSocial,
                              requerimientosProveedor: data.requerimientosProveedor,
                              rucEmpresa: data.rucEmpresa,
                              rucProveedor: data.rucProveedor,
                              sresEmpresa: data.sresEmpresa,
                              telefono1Proveedor: data.telefono1Proveedor,
                              telefono2Proveedor: data.telefono2Proveedor,
                              tipoCuenta: data.tipoCuenta,
                              unidadProveedor: data.unidadProveedor,
                            }
                            console.log(orderCompra)
                            const response = await postMainProvide(
                              routesApi.BUY_ORDER_SAVE(),
                              orderCompra
                            )
                            console.log(response)
                            history.push("/purchase-order")
                          }
                        } catch (error) {
                          console.log(error)
                          toastr.error(MSG_ERROR_SAVE)
                        }
                      }}
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

export default PurchaseOrderCreate
