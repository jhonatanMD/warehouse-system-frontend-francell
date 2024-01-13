export default Yup => ({
  save: () => {
    return [
      [
        {
          label: "Señores",
          key: "srs",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 9,
        },
        {
          label: "Documento del cliente",
          key: "customerDoc",
          maxlength: 11,
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser de 11 digitos",
              (val = "") => val.toString() && val.toString().length == 11
            ),
          col: 3,
        },
        {
          label: "Direccion",
          key: "address",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Guia de referencia",
          key: "referralGuide",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 3,
        },
        {
          label: "Condicion de pago",
          key: "payCondition",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 3,
        },
        {
          label: "Estado",
          key: "status",
          type: "hidden",
          validation: Yup.bool().required("Es requerido"),
          col: 3,
          default_value: true,
        },
      ],
    ]
  },
  update: record => {
    return [
      [
        {
          label: "Señores",
          key: "srs",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 9,
          readonly: true,
          default_value: record.srs
        },
        {
          label: "Documento del cliente",
          key: "customerDoc",
          maxlength: 11,
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser de 11 digitos",
              (val = "") => val.toString() && val.toString().length == 11
            ),
          col: 3,
          readonly: true,
          default_value: record.customerDoc
        },
        {
          label: "Direccion",
          key: "address",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          readonly: true,
          default_value: record.address
        },
        {
          label: "Guia de referencia",
          key: "referralGuide",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 3,
          readonly: true,
          default_value: record.referralGuide
        },
        {
          label: "Condicion de pago",
          key: "payCondition",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 3,
          readonly: true,
          default_value: record.payCondition
        },
        {
          label: "Status",
          key: "status",
          type: "hidden",
          validation: Yup.bool(),
          col: 12,
          default_value: record.status,
        },
      ],
    ]
  },
})
