import React, { useState } from "react"
import { Col, Row, FormGroup, Label, Button, Form, Input } from "reactstrap"
import { useFormik } from "formik"
import formatFormik from "./formatFormik"
import SelectAsync from "../selectAsync"

const FormHelper = props => {
  const formik = props.defaultFormik
    ? props.defaultFormik
    : useFormik(
      formatFormik(props.data, async data => {
        await props.onSubmit(data)
        if (props.reset) {
          formik.resetForm()
        }
        props.setLoading(false)
      })
    )

  const errorField = key => (
    <>
      {formik.errors[key] && formik.touched[key] ? (
        <div id="emailHelp" className="form-text text-danger">
          {formik.errors[key]}
        </div>
      ) : null}
    </>
  )

  const typeField = (field, options) => {
    switch (field.type) {
      case "text":
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <Input
              type="text"
              className={`form-control${options.valid ? " is-invalid" : ""}`}
              id={field.key}
              readOnly={field.readonly || props.readonly}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              maxLength={field.maxlength}
              value={formik.values[field.key]}
            />
            {errorField(field.key)}
          </>
        )
      case "textarea":
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <textarea
              className={`form-control${options.valid ? " is-invalid" : ""}`}
              id={field.key}
              readOnly={field.readonly || props.readonly}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              value={formik.values[field.key]}
            />
            {errorField(field.key)}
          </>
        )
      case "password":
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <Input
              type="password"
              className={`form-control${options.valid ? " is-invalid" : ""}`}
              id={field.key}
              readOnly={field.readonly || props.readonly}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              value={formik.values[field.key]}
            />
            {errorField(field.key)}
          </>
        )
      case "checkbox":
        return (
          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className={`custom-control-input${options.valid ? " is-invalid" : ""}`}
              id={field.key}
              readOnly={field.readonly || props.readonly}
              onChange={e => {
                formik.setFieldValue(field.key, e.target.checked)
              }}
              onBlur={formik.onBlur}
              checked={formik.values[field.key]}
            />
            <label className="custom-control-label" htmlFor={field.key}>
              {field.label}
            </label>
            {errorField(field.key)}
          </div>
        )
      case "hidden":
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <Input
              type="hidden"
              className={`form-control${options.valid ? " is-invalid" : ""}`}
              id={field.key}
              readOnly={field.readonly || props.readonly}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              value={formik.values[field.key]}
            />
            {errorField(field.key)}
          </>
        )
      case "email":
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <Input
              type="email"
              className={`form-control${options.valid ? " is-invalid" : ""}`}
              id={field.key}
              readOnly={field.readonly || props.readonly}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              value={formik.values[field.key]}
            />
            {errorField(field.key)}
          </>
        )
      case "date":
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <Input
              type="date"
              className={`form-control${options.valid ? " is-invalid" : ""}`}
              id={field.key}
              readOnly={field.readonly || props.readonly}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              value={formik.values[field.key]}
            />
            {errorField(field.key)}
          </>
        )
      case "selection":
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <div className="d-flex">
              <select
                id={field.key}
                readOnly={field.readonly || props.readonly}
                className={`form-control${options.valid ? " is-invalid" : ""}`}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values[field.key]}
              >
                <option value="">Seleccionar</option>
                {field.selections.map((value, index) => (
                  <option key={index} value={value[0]}>
                    {value[1]}
                  </option>
                ))}
              </select>
              {field.new_item_action}
            </div>
            {errorField(field.key)}
          </>
        )
      case "selection_async":
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <SelectAsync
              onChange={value => {
                console.log(value)
                if (field.isMulti) {
                  formik.setFieldValue(
                    field.key,
                    value.map(e => e.value)
                  )
                } else {
                  formik.setFieldValue(field.key, value.value)
                }
              }}
              readOnly={field.readonly || props.readonly}
              uri={field.uri}
              keyFormat={field.keyFormat}
              debug={field.debug}
              isMulti={field.isMulti}
              onBlur={formik.onBlur}
              value={formik.values[field.key]}
              domain={field.domain}
            />
            {errorField(field.key)}
          </>
        )
      default:
        return (
          <>
            <Label for={field.key}>{field.label}</Label>
            <Input
              type="email"
              className={`form-control${options.valid ? " is-invalid" : ""}`}
              id="formrow-email-Input"
            />
          </>
        )
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      {props.data.fields.map((value, index) => {
        return (
          <Row key={index}>
            {value.map((field, idx) => (
              <Col md={field.col} key={idx} className={field.type == "hidden" ? "d-none" : ""}>
                <div className="mb-3">
                  {typeField(field, {
                    valid: !!formik.errors[field.key] && formik.touched[field.key],
                  })}
                </div>
              </Col>
            ))}
          </Row>
        )
      })}
      {props.component && props.component()}
      <div className='d-flex'>
        {props.secundaryButton && (
          <div>
            <button type="button" className="btn btn-dark" disabled={props.loading} onClick={async (e) => {
              const valid = await formik.validateForm();
              if (Object.keys(valid).length > 0) {
                alert('Complete todos los campos');
                return
              }
              props.secundaryButton(formik.values)
            }}>
              {props.textSecundaryButton}
              {props.loading && <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>}
            </button>
          </div>
        )}
        {!!!props.readonly && (
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-success" disabled={props.loading}>
              {props.textConfirmButton ? props.textConfirmButton : "Guardar"}{" "}
              {props.loading && <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>}
            </button>
          </div>
        )}
      </div>
    </form>
  )
}

export default FormHelper
