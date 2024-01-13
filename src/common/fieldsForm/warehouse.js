import { routesApi } from "../../services/request"
export default Yup => ({
  save: id_sede => {
    return [
      [
        {
          label: "Producto",
          key: "id_producto",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.PRODUCT_GET_ALL(),
          keyFormat: ["id", "nombre"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Descripcion",
          key: "descripcion",
          type: "textarea",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Color",
          key: "color",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },

        {
          label: "Genero",
          key: "genero",
          type: "selection",
          selections: [
            ["masculino", "Masculino"],
            ["femenino", "Femenino"],
          ],
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Marca",
          key: "id_marca",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.BRAND_GET_ALL(),
          keyFormat: ["id", "marca"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 6,
        },
        {
          label: "Tipo",
          key: "id_tipo",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: true,
          uri: routesApi.TYPE_GET_ALL(),
          keyFormat: ["id", "tipo"],
          debug: true,
          validation: Yup.array().required("Es requerido"),
          col: 12,
        },
        {
          label: "Material",
          key: "id_material",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.MATERIAL_GET_ALL(),
          keyFormat: ["id", "material"],
          debug: true,
          validation: Yup.string()
            .min(1, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
        },
        {
          label: "Stock",
          key: "stock",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor igual a 9 digitos",
              (val = "") => val.toString() && val.toString().length <= 9
            )
            .test("len", "El valor debe ser diferente a 0", (val = "") => !(val.toString() == 0)),
          col: 6,
        },
        {
          label: "Stock minimo",
          key: "minimo_stock",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor igual a 9 digitos",
              (val = "") => val.toString() && val.toString().length <= 9
            )
            .test("len", "El valor debe ser diferente a 0", (val = "") => !(val.toString() == 0)),
          col: 6,
        },
        {
          label: "Precio",
          key: "precio",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor igual a 9 digitos",
              (val = "") => val.toString() && val.toString().length <= 9
            )
            .test("len", "El valor debe ser diferente a 0", (val = "") => !(val.toString() == 0)),
          col: 6,
        },
        {
          label: "Talla",
          key: "talla",
          type: "text",
          validation: Yup.string()
            .min(1, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
        },
        {
          label: "Sede",
          key: "id_sede",
          type: "hidden",
          validation: Yup.string(),
          col: 12,
          default_value: id_sede,
        },
      ],
    ]
  },
  update: (selectedRecord, id_sede) => {
    return [
      [
        {
          label: "Producto",
          key: "id_producto",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.PRODUCT_GET_ALL(),
          keyFormat: ["id", "nombre"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.producto?.id,
        },
        {
          label: "Descripcion",
          key: "descripcion",
          type: "textarea",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.descripcion,
        },
        {
          label: "Color",
          key: "color",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.color,
        },

        {
          label: "Genero",
          key: "genero",
          type: "selection",
          selections: [
            ["masculino", "Masculino"],
            ["femenino", "Femenino"],
          ],
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.genero,
        },
        {
          label: "Marca",
          key: "id_marca",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.BRAND_GET_ALL(),
          keyFormat: ["id", "marca"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 6,
          default_value: selectedRecord.marca?.id,
        },
        {
          label: "Tipo",
          key: "id_tipo",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: true,
          uri: routesApi.TYPE_GET_ALL(),
          keyFormat: ["id", "tipo"],
          debug: true,
          validation: Yup.array().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.tipos ? selectedRecord.tipos.map(v => v.id) : [],
        },
        {
          label: "Calidad",
          key: "id_material",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.MATERIAL_GET_ALL(),
          keyFormat: ["id", "material"],
          debug: true,
          validation: Yup.string()
            .min(1, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.material ? selectedRecord.material.id : null,
        },
        {
          label: "Stock",
          key: "stock",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor igual a 9 digitos",
              (val = "") => val.toString() && val.toString().length <= 9
            )
            .test("len", "El valor debe ser diferente a 0", (val = "") => !(val.toString() == 0)),
          col: 6,
          default_value: selectedRecord.stock,
        },
        {
          label: "Stock minimo",
          key: "minimo_stock",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor igual a 9 digitos",
              (val = "") => val.toString() && val.toString().length <= 9
            )
            .test("len", "El valor debe ser diferente a 0", (val = "") => !(val.toString() == 0)),
          col: 6,
          default_value: selectedRecord.minimo_stock,
        },
        {
          label: "Precio",
          key: "precio",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor igual a 9 digitos",
              (val = "") => val.toString() && val.toString().length <= 9
            )
            .test("len", "El valor debe ser diferente a 0", (val = "") => !(val.toString() == 0)),
          col: 6,
          default_value: selectedRecord.precio,
        },
        {
          label: "Talla",
          key: "talla",
          type: "text",
          validation: Yup.string()
            .min(1, "Es muy corto")
            .max(500, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.talla,
        },
        {
          label: "Sede",
          key: "id_sede",
          type: "hidden",
          validation: Yup.string(),
          col: 12,
          default_value: id_sede,
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
