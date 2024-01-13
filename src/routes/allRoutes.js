import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

import Store from "../pages/maintenance/store"

import Company from "../pages/maintenance/company"
import Sede from "../pages/maintenance/sede"
import Roles from "../pages/maintenance/roles"
import Permissions from "../pages/maintenance/permissionsRol"
import Employee from "../pages/maintenance/employee"
import User from "../pages/maintenance/user"
import Product from "../pages/maintenance/product"
import Type from "../pages/maintenance/type"
import Brand from "../pages/maintenance/brand"
import Material from "../pages/maintenance/material"
import Warehouse from "../pages/maintenance/warehouse"
import VozQuery from "../pages/maintenance/vozQuery"
import PurchaseOrderCreate from "../pages/maintenance/purchaseOrderCreate"
import PurchaseOrderView from "../pages/maintenance/purchaseOrderView"
import PucharseOrder from "../pages/maintenance/pucharseOrder"
import ExitOrderCreate from "../pages/maintenance/exitOrderCreate"
import ExitOrderView from "../pages/maintenance/exitOrderView"
import ExitOrder from "../pages/maintenance/exitOrder"
import Category from "pages/maintenance/category"
import HeadQuarter from "pages/maintenance/headQuarter"
import Providers from "pages/maintenance/providers"
import SupplierContact from "pages/maintenance/supplierContact"
import Quotation from "pages/maintenance/quotation"

import ReportDate from "pages/maintenance/reportDate"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/brand", component: Brand },
  { path: "/product", component: Product },
  { path: "/store", component: Store },
  { path: "/type", component: Type },
  { path: "/category", component: Category },
  // Reportes
  { path: "/head-quarter", component: HeadQuarter },
  // Ventas y Proformas
  { path: "/employee", component: Employee },
  { path: "/user", component: User },
  { path: "/roles", component: Roles },
  { path: "/roles/:id/permissions", component: Permissions },
  //Proovedor
  { path: "/material", component: Material },
  { path: "/company", component: Company },
  { path: "/providers", component: Providers },
  { path: "/supplier-contact", component: SupplierContact },

  { path: "/sales/report-date", component: ReportDate },

  { path: "/sales", component: ExitOrder },
  { path: "/sales/create", component: ExitOrderCreate },
  { path: "/sales/:id", component: ExitOrderView },

  //{ path: "/purchase-order-create", component: PurchaseOrderCreate },

  // { path: "/company/:id/sede", component: Sede },
  // { path: "/warehouse", component: Warehouse },
  // { path: "/voz", component: VozQuery },
  // { path: "/purchase-order-view/:id", component: PurchaseOrderView },
  // { path: "/purchase-order", component: PucharseOrder },
  // { path: "/exit-order-view/:id", component: ExitOrderView },
  // { path: "/exit-order", component: ExitOrder },

  // this route should be at the end of all other routes
  { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
]

export { userRoutes, authRoutes }
