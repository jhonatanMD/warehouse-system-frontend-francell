import * as Yup from "yup"
const getInitialValues = form => {
  let data = {}
  form.fields.forEach(value => {
    value.forEach(field => {
      data[field.key] = field.default_value || ""
    })
  })

  return data
}

const validationSchema = form => {
  const schema = {}
  form.fields.forEach(value => {
    value.forEach(field => {
      schema[field.key] = field.validation
    })
  })
  return Yup.object().shape(schema)
}

const makeFormik = (data, submit) => {
  return {
    initialValues: getInitialValues(data),
    validationSchema: validationSchema(data),
    onSubmit: value => {
      submit(value)
    },
  }
}

export default makeFormik
