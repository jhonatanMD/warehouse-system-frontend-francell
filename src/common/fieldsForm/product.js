import { routesApi } from "../../services/request"

export default Yup => ({
  save: () => {
    return [
      [
        {
          label: "Marca",
          key: "brand",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.BRAND_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Modelo",
          key: "category",
          type: "selection_async",
          isMulti: false,
          uri: routesApi.CATEGORY_GET_ALL(),
          keyFormat: ["id", "name"],
          domain: (item) => {
            return item.status == true;
          },
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
      /*  {
          label: "Costo Dolares",
          key: "costDollars",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Costo Soles",
          key: "costSoles",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },*/
        {
          label: "Costo final",
          key: "finalCost",
          type: "text",
          validation: Yup.string().required("Es requerido"),
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
          label: "Calidad",
          key: "material",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.MATERIAL_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Code",
          key: "miniCode",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Producto",
          key: "name",
          type: "text",
          validation: Yup.string().required("Es requerido"),
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
        {
          label: "Stock",
          key: "stock",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Almacen",
          key: "store",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.STORE_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Tipo",
          key: "type",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.TYPE_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
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
          key: "brand",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.BRAND_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.brand ? selectedRecord.brand.id : false,
        },
        {
          label: "Modelo",
          key: "category",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.CATEGORY_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.category ? selectedRecord.category.id : false,
        },
       /* {
          label: "Costo Dolares",
          key: "costDollars",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.costDollars,
        },
        {
          label: "Costo Soles",
          key: "costSoles",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.costSoles,
        },*/
        {
          label: "Costo final",
          key: "finalCost",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.costSoles,
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
          label: "Calidad",
          key: "material",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.MATERIAL_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.material ? selectedRecord.material.id : false,
        },
        {
          label: "Code",
          key: "miniCode",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.miniCode,
        },
        {
          label: "Producto",
          key: "name",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.name,
        },
        // {
        //   label: "ProfitableNessCCC",
        //   key: "profitableNessCCC",
        //   type: "text",
        //   validation: Yup.string().required("Es requerido"),
        //   col: 12,
        //   default_value: selectedRecord.profitableNessCCC,
        // },
        // {
        //   label: "ProfitableNessCCT",
        //   key: "profitableNessCCT",
        //   type: "text",
        //   validation: Yup.string().required("Es requerido"),
        //   col: 12,
        //   default_value: selectedRecord.profitableNessCCT,
        // },
        {
          label: "Stock",
          key: "stock",
          type: "text",
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.stock,
        },
        {
          label: "Almacen",
          key: "store",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.STORE_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.store ? selectedRecord.store.id : false,
        },
        // {
        //   label: "Precio tecnico",
        //   key: "technicalPrice",
        //   type: "text",
        //   validation: Yup.string().required("Es requerido"),
        //   col: 12,
        //   default_value: selectedRecord.technicalPrice,
        // },
        {
          label: "Tipo",
          key: "type",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.TYPE_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.type ? selectedRecord.type.id : false,
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
