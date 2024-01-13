import React, { useState, useEffect } from "react"
// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
//modules
import { Card, Col, Container, Row, CardBody, CardTitle, Button } from "reactstrap"
//Actions redux
import { } from "../../store/actions"
//Components
import ModalFormWithButton from "../../helpers/formHelper/modalFormWithButton"
import ModalFormWithoutButton from "../../helpers/formHelper/modalFormWithoutButton"
import { rolesFields } from "../../common/fieldsForm"
import TableEasy from "../../helpers/tableEasy"
import toastr from "toastr"
//Helpers
import { getMainProvide, putMainProvider, routesApi } from "../../services/request"
import {
  MSG_SUCCESSFUL_REGISTRATION,
  MSG_SUCCESSFUL_UPDATE,
  MSG_ERROR_GET_RECORDS,
  MSG_ERROR_SAVE,
  MSG_ERROR_UPDATE,
} from "../../helpers/messages"
import { clearConfigCache } from "prettier"

const permissions = {
  consult: 'Consultar',
  insert: 'Crear',
  update: 'Actualizar',
  delete: 'Eliminar',
}

const Sede = props => {
  const [loadingAll, setLoadingAll] = useState(false)
  const [rol, setRol] = useState({})
  const [modules, setModules] = useState([])

  const getAll = async () => {
    try {
      setLoadingAll(true)
      const response = await Promise.all([
        getMainProvide(routesApi.PERMISSIONS_GET_BY_ROLE(props.match.params.id)),
        getMainProvide(routesApi.MODULOS_GET_ALL()),
        getMainProvide(routesApi.ROLES_BY_ID(props.match.params.id)),
      ])
      console.log(response)
      const permissionsResponse = response[0];
      const modulesResponse = response[1];
      const data = modulesResponse.map(module => {
        const permissionsByModule = permissionsResponse.find(e => e.modules.id == module.id);
        return {
          ...module,
          permission_id: permissionsByModule ? permissionsByModule.id : false,
          insert: permissionsByModule ? permissionsByModule.insert : false,
          consult: permissionsByModule ? permissionsByModule.consult : false,
          update: permissionsByModule ? permissionsByModule.update : false,
          delete: permissionsByModule ? permissionsByModule.delete : false,
        }
      })
      setModules([...data]);
      setRol(response[2])
    } catch (error) {
      console.log(error)
      toastr.error(MSG_ERROR_GET_RECORDS)
    } finally {
      setLoadingAll(false)
    }
  }

  useEffect(() => {
    getAll()
  }, [])



  const save = async () => {
    try {
      const modulesSend = modules.map(e => {
        delete e.name;
        e.module = e.id;
        e.id = e.permission_id
        delete e.permission_id
        if (e.id == false) {
          delete e.id
        }
        return e;
      })
      const permissionsResponse = await putMainProvider(routesApi.PERMISSIONS_UPDATE(props.match.params.id), modulesSend);
      if (permissionsResponse) {
        getAll();
      }
      toastr.success(MSG_SUCCESSFUL_UPDATE)
    } catch (error) {
      toastr.error(MSG_ERROR_SAVE)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-2"><strong>Rol: </strong>{rol.name || '-'}</CardTitle>
                  <hr />
                  {loadingAll ? (
                    <div className="my-3 text-center">
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border text-info" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {modules.map(element => (
                        <div className="row" key={element.id}>
                          <span className="mb-2"><strong>{element.name}</strong></span>
                          {Object.keys(permissions).map((value, idx) => (
                            <Col md={3} key={idx}>
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id={`all-${element.id}-${value}`}
                                  onChange={event => {
                                    const moduleIndex = modules.findIndex(e => e.id == element.id);
                                    const modulesTemp = [...modules];
                                    console.log(event.target.checked)
                                    modulesTemp[moduleIndex][value] = event.target.checked;
                                    setModules([...modulesTemp])
                                  }}
                                  checked={element[value]}
                                />
                                <label
                                  className="custom-control-label mx-2"
                                  htmlFor={`all-${element.id}-${value}`}
                                >
                                  {permissions[value]}
                                </label>
                              </div>
                            </Col>
                          ))}
                        </div>
                      ))}

                      <div className="d-grid gap-2">
                        <button className="btn btn-success" type="button" onClick={save}>
                          Guardar
                        </button>
                      </div>
                    </>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* end row  */}
        </Container>
        {/* container-fluid */}
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({})

export default withRouter(connect(mapStateToProps, {})(Sede))
