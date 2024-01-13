import PropTypes from "prop-types"
import React, { useEffect, useState, useCallback } from "react"
import Select from "react-select"

import { getMainProvide, axios } from "../../services/request"
const CancelToken = axios.CancelToken
const SelectAsync = ({
  readonly = false,
  onChange,
  uri,
  keyFormat,
  value,
  uriCreate,
  additionalData = [],
  optionsData = [],
  debug = false,
  isMulti = false,
  domain
}) => {
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    let didCancel = false
    let cancel
    const getData = async () => {
      try {
        if (!didCancel) {
          setLoading(true)
        }
        let response = await getMainProvide(uri, {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c
          }),
        })
        if (debug) {
          console.log(response)
        }
        if (!didCancel) {
          if (domain) {
            response = response.filter(domain);
          }
          setOptions(
            response.map(value => {

              let objData = {
                value: value[keyFormat[0]],
                label: keyFormat[1].split('|').map(e => value[e]).join(' '),
              }
              additionalData.forEach(v => {
                objData[v] = value[v]
              })
              return objData
            })
          )
        }
      } catch (error) {
        console.log(error)
        setOptions([])
      } finally {
        if (!didCancel) {
          setLoading(false)
        }
      }
    }

    if (uri) {
      getData()
    }

    return () => {
      cancel()
      didCancel = true
    }
  }, [uri])


  let value_select = options.find(e => e.value == value)
  if (isMulti && value) {
    value_select = options.filter(e => value.findIndex(f => f == e.value) != -1)
  }
  let noFoundValue = false
  if (value && options.length > 0 && value_select == undefined) {
    noFoundValue = true
  }

  if (options.length == 0 && optionsData.length > 0) {
    setOptions(optionsData)
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100%", paddingRight: uriCreate ? "10px" : "initial" }}>
        <Select
          isDisabled={readonly}
          placeholder={noFoundValue ? "No encontrado" : "Seleccionar"}
          value={value_select}
          onChange={onChange}
          options={options}
          classNamePrefix="select2-selection"
          isLoading={loading}
          isMulti={isMulti}
        />
      </div>
      {uriCreate && (
        <button className="btn-rounded waves-effect waves-light btn btn-success">
          <i className="bx bx-plus"></i>
        </button>
      )}
    </div>
  )
}

SelectAsync.propTypes = {
  onChange: PropTypes.func,
  keyFormat: PropTypes.array,
  uri: PropTypes.string,
  uriCreate: PropTypes.string,
  additionalData: PropTypes.array,
}

export default SelectAsync
