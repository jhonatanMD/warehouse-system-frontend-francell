export default Yup => ({
  save: idEmpresa => {
    return [
      [
        {
          label: "Sede",
          key: "sede",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Empresa",
          key: "id_empresa",
          type: "hidden",
          validation: Yup.string(),
          col: 12,
          default_value: idEmpresa,
        },
      ],
    ]
  },
  update: selectedRecord => {
    return [
      [
        {
          label: "Sede",
          key: "sede",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.sede,
        },
        {
          label: "Empresa",
          key: "id_empresa",
          type: "hidden",
          validation: Yup.string(),
          col: 12,
          default_value: selectedRecord.id_empresa,
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
