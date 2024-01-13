import { routesApi } from "../../services/request"

export default Yup => ({
  save: () => {
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
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
        },
        {
          label: "Cantidad",
          key: "cantidad",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor igual a 9 digitos",
              (val = "") => val.toString() && val.toString().length <= 9
            ),
          col: 12,
        },
      ],
    ]
  },
  update: selectedRecord => {
    return []
  },
})
