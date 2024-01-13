import React from "react"
import { Container, Row, Col } from "reactstrap"
// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const Footer = props => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Warehouse system.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block"></div>
            </Col>
          </Row>
        </Container>
      </footer>
      {props.loading > 0 ? (
        <div className="request-loading">
          <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> Cargando...
        </div>
      ) : null}
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  loading: state.Request.loading,
})

export default withRouter(connect(mapStateToProps, {})(Footer))
