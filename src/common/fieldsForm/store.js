import { routesApi } from "../../services/request"

export default Yup => ({
  save: () => {
    return [
      [
        {
          label: "Almacen",
          key: "name",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Sedes",
          key: "headquarters",
          type: "selection_async",
          isMulti: true,
          uri: routesApi.SEDE_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.array().required("Es requerido"),
          col: 12,
        },
        {
          label: "Status",
          key: "status",
          type: "hidden",
          validation: Yup.string(),
          col: 12,
          default_value: true,
        },
      ],
    ]
  },
  update: selectedRecord => {
    return [
      [
        {
          label: "Almacen",
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
          label: "Sedes",
          key: "headquarters",
          type: "selection_async",
          isMulti: true,
          uri: routesApi.SEDE_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.array().required("Es requerido"),
          col: 12,
          default_value: selectedRecord ? selectedRecord.headquarters.map(e => e.id) : [],
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
