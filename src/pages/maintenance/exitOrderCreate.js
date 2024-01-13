import React, { useState } from "react"
import { Card, Col, Container, Row, CardBody, CardTitle, Modal } from "reactstrap"
import FormHelper from "helpers/formHelper"
import { exitOrderFields, exitOrderProductFields } from "common/fieldsForm"
import TableExitOrder from "./exitOrder/tableExitOrder"
import ModalFormWithButton from "../../helpers/formHelper/modalFormWithButton"
import { getMainProvide, postMainProvide, routesApi } from "services/request"
import { MSG_ERROR_SAVE } from "helpers/messages"
import toastr, { options } from "toastr"
import { useHistory } from "react-router-dom"

const ExitOrderCreate = props => {
  const history = useHistory()
  const [modal_standard, setmodal_standard] = useState(false)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

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
                <FormHelper
                  data={{
                    fields: exitOrderFields.save(localStorage.getItem("sede")),
                  }}
                  loading={loading}
                  setLoading={setLoading}
                  component={() => (
                    <>
                      <div>
                        <ModalFormWithButton
                          handle={async data => {
                            console.log(data)
                            try {
                              const response = await getMainProvide(
                                routesApi.PRODUCT_GET_BY_ID(data.articulo)
                              )
                              console.log(response)
                              setProducts([
                                ...products,
                                {
                                  productDetail: `${response.name} - ${response.brand} (${response.type})`,
                                  amount: data.cantidad,
                                  miniCode: response.miniCode,
                                  productId: response.id,
                                  priceUnit: response.finalCost,
                                  ptotal: Number((response.finalCost * data.cantidad).toFixed(2)),
                                },
                              ])
                            } catch (error) {
                              console.log(error)
                            }
                          }}
                          reset={true}
                          titleButton="Agregar producto"
                          textConfirmButton="Agregar"
                          data={{
                            fields: exitOrderProductFields.save(),
                          }}
                        />
                      </div>
                      <TableExitOrder
                        products={products}
                        deleteProduct={id => {
                          if (confirm("Eliminar producto?")) {
                            setProducts([...products.filter(e => e.productId != id)])
                          }
                        }}
                      />
                    </>
                  )}
                  onSubmit={async data => {
                    try {
                      setLoading(true);
                      if (products.length == 0) {
                        toastr.warning("Seleccione almenos un producto");
                        return
                      }
                      const orderCompra = {
                        ...data,
                        "saleDetails": [...products],
                      }
                      const response = await postMainProvide(
                        routesApi.SALES_SAVE(),
                        orderCompra
                      )
                      console.log(response)
                      history.push(`/sales/${response.id}`)
                    } catch (error) {
                      console.log(error)
                      toastr.error(MSG_ERROR_SAVE)
                    }
                  }}
                  textSecundaryButton={"Proforma"}
                  secundaryButton={async data => {
                    try {
                      setLoading(true)
                      if (products.length == 0) {
                        toastr.warning("Seleccione almenos un producto")
                        return
                      }
                      const orderCompra = {
                        ...data,
                        "saleDetails": [...products],
                      }
                      const response = await postMainProvide(
                        routesApi.SALES_REPORT_PROFORMA(),
                        orderCompra,
                        {
                          responseType: 'blob',
                        }
                      )

                      const href = URL.createObjectURL(new Blob([response],
                        { type: 'application/pdf' }));

                      const link = document.createElement('a');
                      link.href = href;
                      link.setAttribute('download', 'proforma.pdf');
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      URL.revokeObjectURL(href);

                    } catch (error) {
                      console.log(error)
                      toastr.error(MSG_ERROR_SAVE)
                    } finally {
                      setLoading(false)
                    }
                  }}

                />
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
