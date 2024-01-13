import { routesApi, getMainProvide } from "../../services/request"

export default Yup => ({
  save: () => {
    return [
      [
        {
          label: "Producto",
          key: "articulo",
          type: "selection_async",
          isMulti: false,
          uri: routesApi.PRODUCT_GET_ALL(localStorage.getItem("sede")),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          domain: (item) => {
            return item.status == true;
          },
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
            ).test(
              'quantity',
              'El monto supero el stock disponible',
              async function validateValue(value, ctx) {
                try {

                  if (value) {
                    const product = await getMainProvide(routesApi.PRODUCT_GET_BY_ID(ctx.parent.articulo))
                    console.log('product: ', product.stock);

                    if (value <= product.stock) {
                      return true
                    }
                  }
                  return false; // or true as you see fit

                } catch (error) {

                }
              }),
          col: 12,
        },
      ],
    ]
  },
  update: selectedRecord => {
    return []
  },
})
