import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
//modules
import * as Yup from "yup"
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Table,
  Button,
  Spinner,
  Alert,
} from "reactstrap"
//Actions redux
import { } from "../../store/actions"
//Components
import ModalFormWithButton from "../../helpers/formHelper/modalFormWithButton"
import ModalFormWithoutButton from "../../helpers/formHelper/modalFormWithoutButton"
import { companyFields } from "../../common/fieldsForm"
import TableEasy from "../../helpers/tableEasy"
import toastr from "toastr"
//Helpers
import { postMainProvide, getMainProvide, routesApi } from "../../services/request"
import {
  MSG_SUCCESSFUL_REGISTRATION,
  MSG_SUCCESSFUL_UPDATE,
  MSG_ERROR_GET_RECORDS,
  MSG_ERROR_SAVE,
  MSG_ERROR_UPDATE,
} from "../../helpers/messages"

const Sede = props => {
  const [modal_standard, setmodal_standard] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(false)

  const [loadingAll, setLoadingAll] = useState(false)
  const [allRecords, setAllRecords] = useState([])

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const getAll = async () => {
      try {
        setLoadingAll(true)
        const response = await getMainProvide(routesApi.COMPANY_GET_ALL())
        console.log(response)
        setAllRecords(response)
      } catch (error) {
        console.log(error)
        toastr.error(MSG_ERROR_GET_RECORDS)
      } finally {
        setLoadingAll(false)
      }
    }
    getAll()
  }, [])

  const selectItem = data => {
    setSelectedRecord(data)
    setmodal_standard(true)
  }

  const hiddenModal = () => {
    setSelectedRecord(false)
    setmodal_standard(false)
  }

  let data_view = allRecords
  const keyFilter = "nombre_empresa"
  if (searchText && allRecords.length > 0) {
    data_view = allRecords.filter(e => e[keyFilter] != null).filter(e =>
      e[keyFilter].toUpperCase().includes(searchText.toUpperCase())
    )
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Sedes</CardTitle>
                  <div className="my-3 row">
                    <div className="col-sm-2">
                      <ModalFormWithButton
                        handle={async data => {
                          try {
                            const response = await postMainProvide(routesApi.COMPANY_SAVE(), data)
                            toastr.success(MSG_SUCCESSFUL_REGISTRATION)
                            setAllRecords([response, ...allRecords])
                          } catch (error) {
                            console.log(error)
                            toastr.error(MSG_ERROR_SAVE)
                          }
                        }}
                        reset={true}
                        data={{
                          fields: companyFields.save,
                        }}
                      />
                    </div>
                    <div className="col-sm-10 d-flex">
                      <input
                        className="form-control form-control-sm"
                        placeholder="Buscar..."
                        value={searchText}
                        onChange={event => setSearchText(event.target.value)}
                      />
                      <div className="px-2">
                        <button className="btn btn-info btn-sm" onClick={() => setSearchText("")}>
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {loadingAll ? (
                    <div className="my-3 text-center">
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border text-info" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <TableEasy
                        data={data_view}
                        idx={true}
                        records={[{ label: "Empresa", key: "nombre_empresa" }]}
                        action={data => (
                          <Button
                            color="success"
                            className="btn-rounded waves-effect waves-light btn btn-primary btn-sm"
                            type="bottom"
                            onClick={() => selectItem(data)}
                          >
                            Editar
                          </Button>
                        )}
                      />
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* end row  */}
        </Container>
        {/* container-fluid */}
      </div>
      <ModalFormWithoutButton
        showModal={modal_standard}
        hiddenModal={hiddenModal}
        handle={async data => {
          try {
            const response = await postMainProvide(
              routesApi.COMPANY_UPDATE(selectedRecord.id),
              data
            )
            console.log(response)
            const idx = allRecords.findIndex(e => e.id == selectedRecord.id)
            const newAllRecords = JSON.parse(JSON.stringify(allRecords))
            newAllRecords[idx] = response
            setAllRecords([...newAllRecords])
            toastr.success(MSG_SUCCESSFUL_UPDATE)
          } catch (error) {
            console.log(error)
            toastr.error(MSG_ERROR_UPDATE)
          }
        }}
        data={{
          fields: companyFields.update(selectedRecord),
        }}
      />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({})

export default withRouter(connect(mapStateToProps, {})(Sede))
