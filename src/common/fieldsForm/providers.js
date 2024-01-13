import { routesApi } from "../../services/request";

export default Yup => ({
  save: _ => {
    return [
      [
        {
          label: "Proovedor",
          key: "name",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Ruc",
          key: "ruc",
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
        {
          label: "Producto",
          key: "product",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.PRODUCT_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Contacto del proovedor",
          key: "supplierContacts",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: true,
          uri: routesApi.SUPPLIER_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.array().required("Es requerido"),
          col: 12,
        },
        {
          label: "Status",
          key: "status",
          type: "hidden",
          validation: Yup.bool(),
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
          label: "Proovedor",
          key: "name",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.name
        },
        {
          label: "Ruc",
          key: "ruc",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.ruc
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
          default_value: selectedRecord.description
        },
        {
          label: "Producto",
          key: "product",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.PRODUCT_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.product ? selectedRecord.product.id : false
        },
        {
          label: "Contacto del proovedor",
          key: "supplierContacts",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: true,
          uri: routesApi.SUPPLIER_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.array().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.supplierContacts ? selectedRecord.supplierContacts.map(e => e.id) : []
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
