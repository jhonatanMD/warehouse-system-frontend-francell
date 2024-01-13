import { routesApi } from "../../services/request";

export default Yup => ({
  save: _ => {
    return [
      [
        {
          label: "Nombre contacto",
          key: "name",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Correo",
          key: "email",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Celular",
          key: "phone",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Anexo",
          key: "exhibit",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Sitio web",
          key: "web",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Observacion",
          key: "obs",
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
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        }
      ],
    ]
  },
  update: selectedRecord => {
    return [
      [
        {
          label: "Nombre contacto",
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
          label: "Correo",
          key: "email",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.email,
        },
        {
          label: "Celular",
          key: "phone",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.phone,
        },
        {
          label: "Anexo",
          key: "exhibit",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.exhibit,
        },
        {
          label: "Sitio web",
          key: "web",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.web,
        },
        {
          label: "Observacion",
          key: "obs",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.obs,
        },
        {
          label: "Descripcion",
          key: "description",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
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
