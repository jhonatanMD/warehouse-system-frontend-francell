export default Yup => ({
  save: () => {
    return [
      [
        {
          label: "Marca",
          key: "name",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Descripcion",
          key: "description",
          type: "textarea",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
      ],
    ]
  },
  update: selectedRecord => {
    return [
      [
        {
          label: "Marca",
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
          label: "Descripcion",
          key: "description",
          type: "textarea",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.description,
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
