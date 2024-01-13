import currencyFormatter from "currency-formatter"

const TablePucharseOrder = props => {
  const getTotal = () => {
    return props.products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.ptotal,
      0
    )
  }

  const getIgv = () => {
    return Number(
      (
        props.products.reduce(
          (accumulator, currentValue) => accumulator + currentValue.ptotal,
          0
        ) * 0.18
      ).toFixed(2)
    )
  }

  const getSubTotal = () => {
    return Number(
      (
        props.products.reduce(
          (accumulator, currentValue) => accumulator + currentValue.ptotal,
          0
        ) -
        props.products.reduce(
          (accumulator, currentValue) => accumulator + currentValue.ptotal,
          0
        ) *
        0.18
      ).toFixed(2)
    )
  }

  return (
    <div className="my-3">
      <table className="table table-sm">
        <thead className="table-dark">
          <tr>
            <th>ITEM</th>
            <th>CANT</th>
            <th>DESCRIPCION</th>
            <th>CODIGO</th>
            <th>V/U</th>
            <th>V. TOTAL</th>
            {props.deleteProduct && <th>ACCION</th>}
          </tr>
        </thead>
        <tbody>
          {props.products.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.amount}</td>
              <td>{value.productDetail}</td>
              <td>{value.id}</td>
              <td>{currencyFormatter.format(value.priceUnit, { code: "PEN" })}</td>
              <td>{currencyFormatter.format(value.ptotal, { code: "PEN" })}</td>

              {props.deleteProduct && (
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    type="button"
                    onClick={() => props.deleteProduct(value.productId)}
                  >
                    Borrar
                  </button>
                </td>
              )}
            </tr>
          ))}
          <tr>
            <td colSpan="3"></td>
            <td colSpan="2">
              <strong>SUBTOTAL</strong>
            </td>
            <td>{currencyFormatter.format(getSubTotal(), { code: "PEN" })}</td>
          </tr>
          <tr>
            <td colSpan="3"></td>
            <td colSpan="2">
              <strong>IGV(18%)</strong>
            </td>
            <td>{currencyFormatter.format(getIgv(), { code: "PEN" })}</td>
          </tr>
          <tr>
            <td colSpan="3"></td>
            <td colSpan="2">
              <strong>TOTAL A PAGAR</strong>
            </td>
            <td>{currencyFormatter.format(getTotal(), { code: "PEN" })}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TablePucharseOrder
