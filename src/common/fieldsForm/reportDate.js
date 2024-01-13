export default Yup => ({
  save: idEmpresa => {
    return [
      [
        {
          label: "Fecha inicio",
          key: "date_a",
          type: "date",
          validation: Yup.date().required("Es requerido"),
          col: 6,
        },
        {
          label: "Fecha fin",
          key: "date_b",
          type: "date",
          validation: Yup.date().required("Es requerido"),
          col: 6,
        },
      ],
    ]
  },
  update: selectedRecord => {
    return [

    ]
  },
})
