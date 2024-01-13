import * as Yup from "yup"
import company from "./company"
import sede from "./sede"
import roles from "./roles"
import employee from "./employee"
import user from "./user"
import product from "./product"
import type from "./type"
import material from "./material"
import warehouse from "./warehouse"
import pucharseOrder from "./pucharseOrder"
import pucharseOrderProduct from "./pucharseOrderProduct"
import exitOrder from "./exitOrder"
import exitOrderProduct from "./exitOrderProduct"

import store from './store';
import brand from "./brand";
import category from "./category";
import headQuarter from "./headQuarter";
import providers from "./providers";
import supplierContact from "./supplierContact";

import reportDate from "./reportDate";

const storeFields = store(Yup);
const brandFields = brand(Yup);
const categoryFields = category(Yup);
const headQuarterFields = headQuarter(Yup);
const companyFields = company(Yup);
const employeeFields = employee(Yup);
const materialFields = material(Yup);
const providersFields = providers(Yup);
const supplierContactFields = supplierContact(Yup);

const reportDateFields = reportDate(Yup);



const sedeFields = sede(Yup)
const userFields = user(Yup)
const productFields = product(Yup)
const typeFields = type(Yup)
const rolesFields = roles(Yup)
const warehouseFields = warehouse(Yup)
const pucharseOrderFields = pucharseOrder(Yup)
const pucharseOrderProductFields = pucharseOrderProduct(Yup)
const exitOrderFields = exitOrder(Yup)
const exitOrderProductFields = exitOrderProduct(Yup)

export {
  companyFields,
  sedeFields,
  rolesFields,
  employeeFields,
  userFields,
  productFields,
  typeFields,
  brandFields,
  materialFields,
  warehouseFields,
  pucharseOrderFields,
  pucharseOrderProductFields,
  exitOrderFields,
  exitOrderProductFields,
  storeFields,
  categoryFields,
  headQuarterFields,
  providersFields,
  supplierContactFields,
  reportDateFields
}
