export default Yup => ({
  save: () => {
    return [
      [
        {
          label: "Rol",
          key: "name",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
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
          label: "Rol",
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
          label: "Estado",
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
