export default Yup => ({
  save: () => {
    return [
      [
        // {
        //   label: "Razon social",
        //   key: "razonSocial",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 8,
        //   readonly: true,
        //   default_value: company,
        // },
        // {
        //   label: "Ruc",
        //   key: "rucEmpresa",
        //   maxlength: 11,
        //   type: "text",
        //   validation: Yup.number()
        //     .typeError("Debe ingresar valor numerico")
        //     .required("Es requerido")
        //     .test(
        //       "len",
        //       "El valor debe ser de 11 digitos",
        //       (val = "") => val.toString() && val.toString().length == 11
        //     ),
        //   col: 4,
        //   readonly: true,
        //   default_value: ruc,
        // },
        // {
        //   label: "Atencion proovedor",
        //   key: "atencionProveedor",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 6,
        // },
        // {
        //   label: "Cotizacion proovedor",
        //   key: "cotizacionProveedor",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 6,
        // },
        // {
        //   label: "Direccion de empresa",
        //   key: "direccionEmpresa",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 4,
        //   readonly: true,
        //   default_value: direccion,
        // },
        // {
        //   label: "Direccion de proovedor",
        //   key: "direccionProveedor",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 4,
        // },
        // {
        //   label: "Correo de proovedor",
        //   key: "emailProveedor",
        //   type: "text",
        //   validation: Yup.string().email("Debe ser un correo").required("Es requerido"),
        //   col: 4,
        // },
        // {
        //   label: "Fecha",
        //   key: "fecha",
        //   type: "date",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 12,
        // },
        // {
        //   label: "Forma de pago",
        //   key: "formatoPago",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 3,
        // },
        // {
        //   label: "Motivo proovedor",
        //   key: "motivoProveedor",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 3,
        // },
        // {
        //   label: "Numero de cuenta",
        //   key: "numeroCuenta",
        //   type: "text",
        //   validation: Yup.string()
        //     .required("Es requerido")
        //     .test(
        //       "len",
        //       "El valor debe ser menor de 100 digitos",
        //       (val = "") => val.toString() && val.toString().length <= 100
        //     ),
        //   col: 3,
        // },
        // {
        //   label: "Numero de serie",
        //   key: "numeroSerie",
        //   type: "text",
        //   validation: Yup.string()
        //     .required("Es requerido")
        //     .test(
        //       "len",
        //       "El valor debe ser menor de 50 digitos",
        //       (val = "") => val.toString() && val.toString().length <= 50
        //     ),
        //   col: 3,
        // },
        // {
        //   label: "Observacion",
        //   key: "observacion",
        //   type: "textarea",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(250, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 12,
        // },
        // {
        //   label: "Plazo entrega",
        //   key: "plazoEntrega",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 4,
        // },
        // {
        //   label: "Requerimientos del proovedor",
        //   key: "requerimientosProveedor",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 4,
        // },
        // {
        //   label: "Ruc proovedor",
        //   key: "rucProveedor",
        //   type: "text",
        //   validation: Yup.number()
        //     .typeError("Debe ingresar valor numerico")
        //     .required("Es requerido")
        //     .test(
        //       "len",
        //       "El valor debe ser de 11 digitos",
        //       (val = "") => val.toString() && val.toString().length == 11
        //     ),
        //   col: 4,
        // },
        // {
        //   label: "Sres empresa",
        //   key: "sresEmpresa",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 12,
        // },
        // {
        //   label: "Telefono 1",
        //   key: "telefono1Proveedor",
        //   type: "text",
        //   validation: Yup.string()
        //     .required("Es requerido")
        //     .test(
        //       "len",
        //       "El valor debe ser menor de 50 digitos",
        //       (val = "") => val.toString() && val.toString().length <= 50
        //     ),
        //   col: 3,
        // },
        // {
        //   label: "Telefono 2",
        //   key: "telefono2Proveedor",
        //   type: "text",
        //   validation: Yup.string(),
        //   col: 3,
        // },
        // {
        //   label: "Tipo de cuenta",
        //   key: "tipoCuenta",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 3,
        // },
        // {
        //   label: "Unidad del proovedor",
        //   key: "unidadProveedor",
        //   type: "text",
        //   validation: Yup.string()
        //     .min(2, "Es muy corto")
        //     .max(50, "Es muy largo!")
        //     .required("Es requerido"),
        //   col: 3,
        // },
      ],
    ]
  },
  update: selectedRecord => {
    return [
      [
        {
          label: "Razon social",
          key: "razonSocial",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 8,
          readonly: true,
          default_value: selectedRecord.razonSocial,
        },
        {
          label: "Ruc",
          key: "rucEmpresa",
          maxlength: 11,
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser de 11 digitos",
              (val = "") => val.toString() && val.toString().length == 11
            ),
          col: 4,
          readonly: true,
          default_value: selectedRecord.rucEmpresa,
        },
        {
          label: "Atencion proovedor",
          key: "atencionProveedor",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.atencionProveedor,
        },
        {
          label: "Cotizacion proovedor",
          key: "cotizacionProveedor",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 6,
          default_value: selectedRecord.cotizacionProveedor,
        },
        {
          label: "Direccion de empresa",
          key: "direccionEmpresa",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 4,
          readonly: true,
          default_value: selectedRecord.direccionEmpresa,
        },
        {
          label: "Direccion de proovedor",
          key: "direccionProveedor",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 4,
          default_value: selectedRecord.direccionProveedor,
        },
        {
          label: "Correo de proovedor",
          key: "emailProveedor",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 4,
          default_value: selectedRecord.emailProveedor,
        },
        {
          label: "Fecha",
          key: "fecha",
          type: "date",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.fecha,
        },
        {
          label: "Forma de pago",
          key: "formatoPago",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 3,
          default_value: selectedRecord.formatoPago,
        },
        {
          label: "Motivo proovedor",
          key: "motivoProveedor",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 3,
          default_value: selectedRecord.motivoProveedor,
        },
        {
          label: "Numero de cuenta",
          key: "numeroCuenta",
          type: "text",
          validation: Yup.string()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser de menor 50 digitos",
              (val = "") => val.toString() && val.toString().length <= 50
            ),
          col: 3,
          default_value: selectedRecord.numeroCuenta,
        },
        {
          label: "Numero de serie",
          key: "numeroSerie",
          type: "text",
          validation: Yup.string()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser de menor 50 digitos",
              (val = "") => val.toString() && val.toString().length <= 50
            ),
          col: 3,
          default_value: selectedRecord.numeroSerie,
        },
        {
          label: "Observacion",
          key: "observacion",
          type: "textarea",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.observacion,
        },
        {
          label: "Plazo entrega",
          key: "plazoEntrega",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 4,
          default_value: selectedRecord.plazoEntrega,
        },
        {
          label: "Requerimientos del proovedor",
          key: "requerimientosProveedor",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 4,
          default_value: selectedRecord.requerimientosProveedor,
        },
        {
          label: "Ruc proovedor",
          key: "rucProveedor",
          type: "text",
          validation: Yup.number()
            .typeError("Debe ingresar valor numerico")
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser de 11 digitos",
              (val = "") => val.toString() && val.toString().length == 11
            ),
          col: 4,
          default_value: selectedRecord.rucProveedor,
        },
        {
          label: "Sres empresa",
          key: "sresEmpresa",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.sresEmpresa,
        },
        {
          label: "Telefono 1",
          key: "telefono1Proveedor",
          type: "text",
          validation: Yup.string()
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor de 50 digitos",
              (val = "") => val.toString() && val.toString().length <= 50
            ),
          col: 3,
          default_value: selectedRecord.telefono1Proveedor,
        },
        {
          label: "Telefono 2",
          key: "telefono2Proveedor",
          type: "text",
          validation: Yup.string()
            .required("Es requerido")
            .test(
              "len",
              "El valor debe ser menor de 50 digitos",
              (val = "") => val.toString() && val.toString().length <= 50
            ),
          col: 3,
          default_value: selectedRecord.telefono2Proveedor,
        },
        {
          label: "Tipo de cuenta",
          key: "tipoCuenta",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 3,
          default_value: selectedRecord.tipoCuenta,
        },
        {
          label: "Unidad del proovedor",
          key: "unidadProveedor",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 3,
          default_value: selectedRecord.unidadProveedor,
        },
        {
          label: "Sede",
          key: "id_sede",
          type: "hidden",
          validation: Yup.string(),
          col: 12,
          default_value: selectedRecord.id_sede,
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
