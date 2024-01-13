export default Yup => ({
  save: [
    [
      {
        label: "Nombre",
        key: "name",
        type: "text",
        validation: Yup.string()
          .min(2, "Es muy corto")
          .max(50, "Es muy largo!")
          .required("Es requerido"),
        col: 12,
      },
      {
        label: "Direccion",
        key: "address",
        type: "text",
        validation: Yup.string()
          .min(2, "Es muy corto")
          .max(50, "Es muy largo!")
          .required("Es requerido"),
        col: 12,
      },
      {
        label: "Ruc",
        key: "rut",
        type: "text",
        validation: Yup.number()
          .typeError("Debe ingresar valor numerico")
          .required("Es requerido")
          .test(
            "len",
            "El valor debe ser de 11 digitos",
            (val = "") => val.toString() && val.toString().length == 11
          ),
        col: 12,
      },
    ],
  ],
  update: selectedRecord => {
    return [
      [
        {
          label: "Nombre",
          key: "name",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.name,
        },
        {
          label: "Direccion",
          key: "address",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.address,
        },
        {
          label: "Ruc",
          key: "rut",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser de 12 digitos",
              (val = "") => val.toString() && val.toString().length === 12
            ),
          col: 12,
          default_value: selectedRecord.rut,
        },
        {
          label: "Status",
          key: "status",
          type: "hidden",
          validation: Yup.bool(),
          col: 12,
          default_value: selectedRecord.status,
        },
      ],
    ]
  },
})
