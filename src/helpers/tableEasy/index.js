import React, { useState } from "react"
// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { Table } from "reactstrap"
import Guard from "../guard";

const TableEasy = props => {
  const HandleGuard = new Guard(props.Profile.user ? props.Profile.user.roles.permissionRole : false);

  const [rowPage, setRowPage] = useState(10)
  const [page, setPage] = useState(1)

  const data = props.data.map((v, i) => {
    v.item = i + 1
    return v
  })
  let data_view = data.slice((page - 1) * rowPage, rowPage * page)

  const renderCellContent = (value_record, value) => {
    switch (value_record.type) {
      case "ELEMENT":
        return <>{value_record.element(value)}</>
      default:
        return (
          <>
            {value_record.hasOwnProperty("keys")
              ? (() => {
                let text = ""
                value_record.keys.forEach((vt, idxt) => {
                  text += value[vt]
                  if (idxt + 1 < value_record.keys.length) text += " "
                })
                return text
              })()
              : value[value_record.key]}
          </>
        )
    }
  }
  return HandleGuard.renderView(

    <React.Fragment>
      <Table className="table table-hover mb-0">
        <thead>
          <tr>
            {props.idx ? <th>#</th> : null}
            {props.records.map((value, index) => (
              <th key={index}>{value.label}</th>
            ))}
            {props.action ? <th>Accion</th> : null}
          </tr>
        </thead>
        <tbody>
          {data_view.map((value, index) => (
            <tr key={index}>
              {props.idx ? <th scope="row">{value.item}</th> : null}
              {props.records.map((value_record, index) => (
                <td key={index}>{renderCellContent(value_record, value)}</td>
              ))}
              {props.action ? <td>{props.action(value)}</td> : null}
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="mt-3 d-flex justify-content-between">
        <div>
          <button
            className="btn btn-primary btn-sm"
            disabled={page == 1}
            onClick={() => {
              setPage(page - 1)
            }}
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
        </div>
        <div>
          <small>
            {page}/{Math.ceil(data.length / rowPage)}
          </small>
        </div>
        <div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setPage(page + 1)
            }}
            disabled={page == Math.ceil(data.length / rowPage)}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </React.Fragment>,
    props.permissions ? [...props.permissions] : [], true
  )

}

const mapStateToProps = state => ({
  Profile: state.Profile,
})

export default withRouter(connect(mapStateToProps, {})(TableEasy))
