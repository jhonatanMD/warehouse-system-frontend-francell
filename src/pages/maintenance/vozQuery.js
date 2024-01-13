import React, { useState, useEffect } from "react"
import { Card, Col, Container, Row, CardBody, CardTitle } from "reactstrap"
import { postMainProvide, routesApi } from "services/request"

let SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
//let SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
//let recognitionList = new SpeechGrammarList()
// recognitionList.addFromString(grammar, 1)
// recognition.grammars = recognitionList

// recognition.lang = "es-AR"
// recognition.continuous = false
// recognition.interimResults = false
// recognition.maxAlternatives = 1

const VozQuery = props => {
  const [listening, setListening] = useState(false)
  const [textListened, setTextListened] = useState("")
  const [products, setProducts] = useState([])
  const [recognition, setRecognition] = useState(false)

  useEffect(() => {
    if (SpeechRecognition) {
      let recognition_temp = new SpeechRecognition()
      //let recognitionList = new SpeechGrammarList()
      // recognitionList.addFromString(grammar, 1)
      // recognition.grammars = recognitionList

      recognition_temp.lang = "es-AR"
      recognition_temp.continuous = false
      recognition_temp.interimResults = false
      recognition_temp.maxAlternatives = 1
      setRecognition(recognition_temp)
    }
  }, [])

  const renderSpeech = () => {
    recognition.start()
    setListening(true)
    setTextListened("")
    recognition.onresult = async event => {
      console.log(event.results[0][0].transcript)
      const consulta = event.results[0][0].transcript
      setTextListened(consulta)
      try {
        const response = await postMainProvide(
          routesApi.VOZ_CONSULTAR(localStorage.getItem("sede")),
          {
            consulta,
          }
        )
        if (!response.hasOwnProperty("consulta")) throw new Error("no se entendio")
        if (response.consulta.length > 0) {
          speechSynthesis.speak(new SpeechSynthesisUtterance(response.msj))
        } else {
          setProducts([])
          speechSynthesis.speak(
            new SpeechSynthesisUtterance("No se encontró información del producto.")
          )
        }
        setProducts(response.consulta)
      } catch (error) {
        speechSynthesis.speak(new SpeechSynthesisUtterance("Vuelve a repetir tu consulta."))
        console.log(error)
        setProducts([])
      }
    }
    recognition.onend = event => {
      setListening(false)
    }
    recognition.onerror = event => {
      setListening(false)
      speechSynthesis.speak(new SpeechSynthesisUtterance("Intentalo nuevamente."))
    }
  }

  return (
    <div className="page-content">
      <Container fluid={true}>
        <Row>
          {!recognition ? (
            <Col lg={12} className="text-center">
              Funcionalidad no soportada en el navegador
              <br />
              <strong>Navegador recomendado: Google Chrome</strong>
            </Col>
          ) : (
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Consulta por voz</CardTitle>
                  <small>
                    <strong>Prueba decir: </strong>Lista el producto "NOMBRE DEL PRODUCTO", Lista
                    producto "NOMBRE DEL PRODUCTO", Lista el producto "NOMBRE DE PRODUCTO", Lista el
                    producto "NOMBRE DEL PRODUCTOS"
                  </small>
                  <div className="row">
                    <div className="col-12">
                      <div className="container-voz">
                        <button
                          id="speech"
                          className={`btn-voz type2${!listening ? " btn-voz-sm" : ""}`}
                          disabled={listening}
                          onClick={renderSpeech}
                        >
                          {listening && <div className="pulse-ring"></div>}
                          <i className="fa fa-microphone" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="typewriter text-center">
                        <span>{textListened}</span>
                      </div>
                    </div>
                    {products.length > 0 && (
                      <div className="col-12 mt-3">
                        <table className="table">
                          <thead className="">
                            <tr>
                              <th>Producto</th>
                              <th>Marca</th>
                              <th>Tipos</th>
                              <th>Color</th>
                              <th>Talla</th>
                              <th>Genero</th>
                              <th>Precio</th>
                              <th>Stock</th>
                            </tr>
                          </thead>

                          <tbody id="tbody">
                            {products.map((value, index) => (
                              <tr key={index}>
                                <th>{value.producto}</th>
                                <th>{value.marca}</th>
                                <th>
                                  {value.tipos.map((value, idx) => (
                                    <span className="badge bg-info rounded-pill mx-1" key={idx}>
                                      {value}
                                    </span>
                                  ))}
                                </th>
                                <th>{value.color}</th>
                                <th>{value.talla}</th>
                                <th>{value.genero}</th>
                                <th>{value.precio}</th>
                                <th>{value.stock}</th>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
        {/* end row  */}
      </Container>
      {/* container-fluid */}
    </div>
  )
}

export default VozQuery
