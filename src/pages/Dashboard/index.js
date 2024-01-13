import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import { getMainProvide, routesApi } from "services/request"
import toastr from "toastr"
import ReactApexChart from "react-apexcharts"
import { Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap"
import moment from "moment"
const months = []
for (let index = 0; index < 6; index++) { }

const Dashboard = props => {
  const [loading, setLoading] = useState(false)
  const [minProducts, setMinProducts] = useState([])
  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
    },
    dataLabels: {
      enabled: !1,
    },
    colors: ["#556ee6"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
    },
  })
  const [series, setSeries] = useState([
    {
      name: "Unidades",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ])

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const response = await getMainProvide(routesApi.SALES_MONTH_GRAPHIC());
        const response2 = await getMainProvide(routesApi.PRODUCT_STOCK());

        setMinProducts(response2)
        let data = response.map(e => e.sales);
        setSeries([
          {
            name: "Unidades",
            data,
          },
        ])
      } catch (error) {
        console.log(error)
        toastr.error(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h3>Dashboard</h3>
          <Row>
            <Col xl="8">
              <Card>
                <CardBody>
                  <CardTitle>Orden de salida</CardTitle>
                  <ReactApexChart
                    series={series}
                    options={options}
                    type="bar"
                    height={320}
                    className="apex-charts"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card>
                <CardBody>
                  <CardTitle>Productos bajos en stock</CardTitle>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>PRODUCTO</th>
                        <th>STOCK</th>
                      </tr>
                    </thead>
                    <tbody>
                      {minProducts.map((value, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{value.name}</td>
                            <td>{value.stock}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
