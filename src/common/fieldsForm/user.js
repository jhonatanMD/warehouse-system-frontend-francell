import { routesApi } from "../../services/request"
export default Yup => ({
  save: [
    [
      {
        label: "Empleado",
        key: "employee",
        type: "selection_async",
        domain: (item) => {
          return item.status == true;
        },
        isMulti: false,
        uri: routesApi.EMPLOYEE_GET_ALL(),
        keyFormat: ["id", "name|lastName|secondSurName"],
        debug: true,
        validation: Yup.string().required("Es requerido"),
        col: 12,
      },
      {
        label: "Usuario",
        key: "user",
        type: "text",
        validation: Yup.string()
          .min(2, "Es muy corto")
          .max(50, "Es muy largo!")
          .required("Es requerido"),
        col: 12,
      },
      {
        label: "Contraseña",
        key: "password",
        type: "password",
        validation: Yup.string()
          .min(2, "Es muy corto")
          .max(50, "Es muy largo!")
          .required("Es requerido"),
        col: 12,
      },
      {
        label: "Rol",
        key: "role",
        type: "selection_async",
        domain: (item) => {
          return item.status == true;
        },
        isMulti: false,
        uri: routesApi.ROLES_GET_ALL(),
        keyFormat: ["id", "name"],
        debug: true,
        validation: Yup.string().required("Es requerido"),
        col: 12,
      },
    ],
  ],
  update: selectedRecord => {
    return [
      [
        {
          label: "Empleado",
          key: "employee",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.EMPLOYEE_GET_ALL(),
          keyFormat: ["id", "name|secondSurName"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.employee ? selectedRecord.employee.id : false
        },
        {
          label: "Usuario",
          key: "user",
          type: "text",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.user
        },
        {
          label: "Contraseña",
          key: "password",
          type: "password",
          validation: Yup.string()
            .min(2, "Es muy corto")
            .max(50, "Es muy largo!")
            .required("Es requerido"),
          col: 12,
          default_value: selectedRecord.password
        },
        {
          label: "Rol",
          key: "role",
          type: "selection_async",
          domain: (item) => {
            return item.status == true;
          },
          isMulti: false,
          uri: routesApi.ROLES_GET_ALL(),
          keyFormat: ["id", "name"],
          debug: true,
          validation: Yup.string().required("Es requerido"),
          col: 12,
          default_value: selectedRecord.role ? selectedRecord.role.id : false
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
