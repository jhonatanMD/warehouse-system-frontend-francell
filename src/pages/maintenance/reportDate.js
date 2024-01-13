import React, { useState } from "react"
import { Card, Col, Container, Row, CardBody, CardTitle, Modal } from "reactstrap"
import FormHelper from "helpers/formHelper"
import { reportDateFields } from "common/fieldsForm"
import TableExitOrder from "./exitOrder/tableExitOrder"
import ModalFormWithButton from "../../helpers/formHelper/modalFormWithButton"
import { getMainProvide, postMainProvide, routesApi } from "services/request"
import { MSG_ERROR_SAVE } from "helpers/messages"
import toastr, { options } from "toastr"
import { useHistory } from "react-router-dom"

const ReportDate = props => {
  const [modal_standard, setmodal_standard] = useState(false)
  const [loading, setLoading] = useState(false)

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
                <CardTitle className="mb-4">Reporte por fechas</CardTitle>
                <FormHelper
                  data={{
                    fields: reportDateFields.save(),
                  }}
                  loading={loading}
                  setLoading={setLoading}
                  textConfirmButton="Generar"
                  onSubmit={async data => {
                    try {
                      const response = await getMainProvide(
                        routesApi.SALES_REPORT_DATE(data.date_a, data.date_b),
                        {
                          responseType: 'blob',
                        }
                      )

                      const href = URL.createObjectURL(new Blob([response],
                        { type: 'application/pdf' }));

                      const link = document.createElement('a');
                      link.href = href;
                      link.setAttribute('download', `reporte_${data.date_a}_${data.date_b}`);
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      URL.revokeObjectURL(href);
                    } catch (error) {
                      console.log(error)
                      toastr.error(MSG_ERROR_SAVE)
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
    </div>
  )
}

export default ReportDate
