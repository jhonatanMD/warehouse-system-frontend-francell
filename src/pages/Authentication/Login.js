import PropTypes from "prop-types"
import React, { useState } from "react"

//i18n
import { withTranslation } from "react-i18next"

import { Row, Col, CardBody, Card, Container, Form, FormGroup, Label, Input } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link, useHistory } from "react-router-dom"

// import images
import main_logo from "assets/images/main_logo.png"

import { useFormik } from "formik"
import { postMainProvide, routesApi } from "../../services/request"
import toastr from "toastr"
import ModalSedes from "./login/modalSedes";
import { userGetProfileSuccess } from '../../store/actions'

const Login = props => {
  const [loading, setLoading] = useState(false)
  const [showSedes, setShowSedes] = useState(false)
  const [loginData, setLoginData] = useState(false)
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      username: "rbt",
      password: "123456",
    },
    onSubmit: async value => {
      console.log(value)
      try {
        setLoading(true)
          const response = await postMainProvide(routesApi.AUTH_LOGIN(), value)
          console.log('response: ', response);
          localStorage.setItem("token", response.jwt)
          // localStorage.setItem("company", JSON.stringify(response.company))
          // localStorage.setItem("headquarters", JSON.stringify(response.headquarters))
          // localStorage.setItem("roles", JSON.stringify(response.roles))
          history.push("/")
          const dataToSave = {...response};
          delete dataToSave.jwt
          props.userGetProfileSuccess({...dataToSave})
          // setLoginData(response)
          // setShowSedes(true)

      } catch (error) {
        toastr.error(error.message)
      } finally {
        setLoading(false)
      }
    },
  })

  const selectedSede = id => {
    localStorage.setItem("sede", id)
    localStorage.setItem("token", loginData.token)
    localStorage.setItem("user", JSON.stringify(loginData.datos_usuario))
    history.push("/")
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-soft-primary">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">{props.t("Bienvenid@")}</h5>
                        <p>{props.t("Inicie sesión para continuar...")}</p>
                      </div>
                    </Col>
                    <Col
                      className="col-5 align-self-end"
                      style={{
                        paddingTop: "10px",
                        paddingLeft: "10px",
                      }}
                    >
                      <img src={main_logo} alt="" className="img-fluid" style={{ height: '120px' }} />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div className="p-2">
                    <Form onSubmit={formik.handleSubmit}>
                      <FormGroup>
                        <Label for="username">Usuario</Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="username"
                          onChange={formik.handleChange}
                          value={formik.values.username}
                        />
                      </FormGroup>
                      <FormGroup className="mt-3">
                        <Label for="password">Contraseña</Label>
                        <Input
                          type="password"
                          className="form-control"
                          id="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                        />
                      </FormGroup>
                      <div className="custom-control custom-checkbox mt-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlInline"
                        />
                        <label className="custom-control-label" htmlFor="customControlInline">
                          {"  "}Recordar
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light w-100"
                          type="submit"
                          disabled={loading}
                        >
                          Ingresar{" "}
                          {loading && <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>}
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock mr-1" />
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} {props.t("name_company")}{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ModalSedes
        modal_standard={showSedes}
        setmodal_standard={setShowSedes}
        sedes={loginData ? loginData.datos_usuario.sede : []}
        selectedSede={selectedSede}
      />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({})

export default withRouter(connect(mapStateToProps, {
  userGetProfileSuccess
})(withTranslation()(Login)))

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func,
}
