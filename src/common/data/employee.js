import { routesApi } from "../../services/request"
export default Yup => ({
  save: id_empresa => {
    return [
      [
        {
          label: "Nombres",
          key: "nombre",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Apellido paterno",
          key: "ape_paterno",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Apellido materno",
          key: "ape_materno",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Correo",
          key: "correo_electronico",
          type: "text",
          validation: Yup.string()
            .email("Debe ser un correo valido")
            .min(2, "Es muy corto")
            .max(250, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "DNI",
          key: "dni",
          type: "text",
          validation: Yup.string()
            .min(8, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Celular",
          key: "numero_celular",
          type: "text",
          validation: Yup.string()
            .min(8, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Sedes",
          key: "id_sede",
          type: "selection_async",
          isMulti: true,
          uri: routesApi.SEDE_GET_ALL_BY_EMPRESA(id_empresa),
          keyFormat: ["id", "sede"],
          debug: true,
          validation: Yup.array().required("Es requerido"),
          col: 12,
        },
      ],
    ]
  },
  update: (selectedRecord, id_empresa) => {
    return [
      [
        {
          label: "Nombres",
          key: "nombre",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.nombre,
        },
        {
          label: "Apellido paterno",
          key: "ape_paterno",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.ape_paterno,
        },
        {
          label: "Apellido materno",
          key: "ape_materno",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.ape_materno,
        },
        {
          label: "Correo",
          key: "correo_electronico",
          type: "text",
          validation: Yup.string()
            .email("Debe ser un correo valido")
            .min(2, "Es muy corto")
            .max(250, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.correo_electronico,
        },
        {
          label: "DNI",
          key: "dni",
          type: "text",
          validation: Yup.string()
            .min(8, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.dni,
        },
        {
          label: "Celular",
          key: "numero_celular",
          type: "text",
          validation: Yup.string()
            .min(8, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.numero_celular,
        },
        {
          label: "Sedes",
          key: "id_sede",
          type: "selection_async",
          isMulti: true,
          uri: routesApi.SEDE_GET_ALL_BY_EMPRESA(id_empresa),
          keyFormat: ["id", "sede"],
          debug: true,
          validation: Yup.array().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.id_sede,
        },
      ],
    ]
  },
})
