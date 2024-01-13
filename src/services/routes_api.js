// AUTH
export const AUTH_LOGIN = () => "/token/login";
export const AUTH_GET_DATA_LOGIN = () => "/token/refresh";
// SEDE
export const SEDE_SAVE = () => "/head-quarters";
export const SEDE_GET_ALL = () => "/head-quarters";
// STORE
export const STORE_GET_ALL = () => "/store";
export const STORE_SAVE = () => "/store";
export const STORE_UPDATE = (id) => `/store/${id}`;
// ROLES
export const ROLES_GET_ALL = () => `/role`;
export const ROLES_SAVE = () => `/role`;
export const ROLES_UPDATE = (id) => `/role/${id}`;
export const ROLES_BY_ID = (id) => `/role/${id}`;
// PERMISSIONS
export const PERMISSIONS_GET_BY_ROLE = id => `/permission-role/role/${id}`;
export const PERMISSIONS_UPDATE = id => `/permission-role/role/${id}`;
// MODULOS
export const MODULOS_GET_ALL = () => `/module`;
// BRAND
export const BRAND_GET_ALL = () => `/brand`;
export const BRAND_SAVE = () => `/brand`;
export const BRAND_UPDATE = (id) => `/brand/${id}`;
// CATEGORY
export const CATEGORY_GET_ALL = () => `/category`;
export const CATEGORY_SAVE = () => `/category`;
export const CATEGORY_UPDATE = (id) => `/category/${id}`;
// COMPANY
export const COMPANY_GET_ALL = () => '/company';
export const COMPANY_SAVE = () => "/company";
export const COMPANY_UPDATE = (id) => `/company/${id}`;
// EMPLOYEE
export const EMPLOYEE_GET_ALL = () => `/employee`
export const EMPLOYEE_SAVE = () => `/employee`
export const EMPLOYEE_UPDATE = (id) => `/employee/${id}`
// EMPLOYEE
export const HEAD_QUARTER_GET_ALL = () => `/head-quarters`
export const HEAD_QUARTER_SAVE = () => `/head-quarters`
export const HEAD_QUARTER_UPDATE = (id) => `/head-quarters/${id}`
// MATERIAL
export const MATERIAL_GET_ALL = () => `/material`
export const MATERIAL_SAVE = () => `/material`
export const MATERIAL_UPDATE = (id) => `/material/${id}`
// TYPE
export const TYPE_GET_ALL = () => `/type`
export const TYPE_SAVE = () => `/type`
export const TYPE_UPDATE = (id) => `/type/${id}`
// USUARIO
export const USER_GET_ALL = () => `/user`
export const USER_SAVE = () => `/user`
export const USER_UPDATE = (id) => `/user/${id}`
// PRODUCT
export const PRODUCT_GET_ALL = () => `/product`;
export const PRODUCT_GET_BY_ID = (id) => `/product/select/${id}`;
export const PRODUCT_SAVE = () => `/product`;
export const PRODUCT_UPDATE = (id) => `/product/${id}`;

export const UPLOAD_FILE = () => `/import`
// PROVIDERS
export const PROVIDER_GET_ALL = () => `/providers`;
export const PROVIDER_SAVE = () => `/providers`;
export const PROVIDER_UPDATE = (id) => `/providers/${id}`;
// SUPPLIER CONTACT
export const SUPPLIER_GET_ALL = () => `/supplier-contact`;
export const SUPPLIER_SAVE = () => `/supplier-contact`;
export const SUPPLIER_UPDATE = (id) => `/supplier-contact/${id}`;
// Sales
export const SALES_GET_ALL = () => `/sale`;
export const SALES_SAVE = () => `/sale`;
export const SALES_GET_BY_ID = (id) => `/sale/id/${id}`;
export const SALES_REPORT = (id) => `/reports/generarReporteOrdenCompra/${id}`
export const SALES_REPORT_PROFORMA = () => `/reports/generarProforma`

export const SALES_MONTH_GRAPHIC = () => `/sale/dashboard`
export const PRODUCT_STOCK = () => `/product/stock`;

export const SALES_REPORT_DATE = (d1, d2) => `/reports/generarReporteVentas/${d1}/${d2}`;



/**
 * WAREHOUSE
 */
export const WAREHOUSE_GET_ALL = () => `/api/almacen/buscarTodo`
export const WAREHOUSE_GET_BY_ID = id => `/api/almacen/buscarPorId/${id}`
export const WAREHOUSE_GET_ALL_BY_SEDE = idSede => `/api/almacen/buscar/${idSede}/0`
export const WAREHOUSE_SAVE = () => `/api/almacen/guardar`
export const WAREHOUSE_UPDATE = id => `/api/almacen/actualizar/${id}`
export const WAREHOUSE_CHANGE_STATE = id => `/api/almacen/deshabilitar/${id}`
export const WAREHOUSE_MIN_STOCK_BY_SEDE = idSede => `/api/almacen/stockProductos/${idSede}`
/**
 * VOZ
 */
export const VOZ_CONSULTAR = idSede => `/api/consulta/consultar_voz/${idSede}`
/**
 * BUY ORDER
 */
export const BUY_ORDER_GET_ALL_BY_SEDE = sede => `/api/ordenCompra/buscar/${sede}`
export const BUY_ORDER_GET_BY_ID = id => `/api/ordenCompra/buscarPorId/${id}`
export const BUY_ORDER_SAVE = () => `/api/ordenCompra/guardar`
export const BUY_ORDER_REPORT = () => `/api/generarReporteOrdenCompra`

/**
 * EXIT ORDER
 */
export const EXIT_ORDER_GET_ALL_BY_SEDE = sede => `/api/ordenSalida/buscar/${sede}`
export const EXIT_ORDER_GET_BY_ID = id => `/api/ordenSalida/buscarPorId/${id}`
export const EXIT_ORDER_SAVE = () => `/api/ordenSalida/guardar`
export const EXIT_ORDER_REPORT = () => `/api/generarReporteOrdenSalida`
export const EXIT_ORDER_GRAPHIC = idSede => `/api/ordenSalida/graficos/${idSede}`
