import { createBrowserRouter } from "react-router-dom";
import Login from "./login and signup pages/login";
import GetOtpPage from "./login and signup pages/GetOtpPage";
import SetPasswordPage from "./login and signup pages/SetPasswordPage";
import ErrorPage from "./error page/ErrorPage";
import Skelton from "./login and signup pages/Skelton";
import SupplierDetails from "./login and signup pages/SupplierDetails";
import TaxDetails from "./login and signup pages/TaxDetails";
import PickupAddress from "./login and signup pages/Pickup address/PickupAddress";
import BankDetails from "./login and signup pages/BankDetails";
import Dashboard from "./pages/dashbaord/Dashbaord";
import Layout from "./layout/layout";
import Product from "./pages/product/products list/Product";
import Order from "./pages/order/order management/Order";
import Payments from "./pages/payments/Payments";
import PartialAccept from "./pages/partial accept/PartialAccept";
import SalesSummery from "./pages/sales summery/SalesSummery";
import UserRole from "./pages/user role/userRole";
import Configuration from "./pages/configuration/Configuration";
import AdvanceStorage from "./pages/product/advance storage/AdvanceStorage";
import ExpiryList from "./pages/product/expiry list/ExpiryList";
import Return from "./pages/return management/Return";
import Shipping from "./pages/shipping management/Shipping";
import Refund from "./pages/payments/refund/Refund";
import RoleManagement from "./pages/user role/role management/RoleManagement";
import Wallet from "./pages/payments/wallet/Wallet";
import AccountsLedger from "./pages/payments/accounts ledger/AccountsLedger";
import Offers from "./pages/offers/Offers";
import AdvertisingWindows from "./pages/product/advertising windows/AdvertisingWindows";
import ProductDetails from "./pages/product/products list/pages/product details/ProductDetails";
import AddBatch from "./pages/product/products list/pages/add batch/AddBatch";
import AddProduct from "./pages/product/products list/pages/add product/pages/AddProduct";
import MyProfile from "./pages/my profile/MyProfile";
import Mock from "./Mock";
import ShippingSchedule from "./pages/shipping management/Components/ShippingSchedule";
import AddUser from "./pages/user role/Add user/AddUser";

export const router = createBrowserRouter([
  { path: "/*", element: <ErrorPage /> },
  { path: "/login", element: <Skelton Comp={Login} /> },
  { path: "/otpvalidation/*", element: <Skelton Comp={GetOtpPage} /> },
  { path: "/setpassword", element: <Skelton Comp={SetPasswordPage} /> },
  { path: "/supplierdetails", element: <Skelton Comp={SupplierDetails} /> },
  { path: "/taxdetails", element: <Skelton Comp={TaxDetails} /> },
  { path: "/pickupaddress", element: <Skelton Comp={PickupAddress} /> },
  { path: "/bankdetails", element: <Skelton Comp={BankDetails} /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/product", element: <Product /> },
      { path: "/product/add-product", element: <AddProduct /> },
      { path: "/product/product-details/*", element: <ProductDetails /> },
      { path: "/product/product-details/add-batch/*", element: <AddBatch /> },
      { path: "/product/advertising-windows", element: <AdvertisingWindows /> },
      { path: "/product/advance-storage", element: <AdvanceStorage /> },
      { path: "/product/expiry-list", element: <ExpiryList /> },
      { path: "/order", element: <Order /> },
      { path: "/return-management", element: <Return /> },
      { path: "/shipping-management", element: <Shipping /> },
      {
        path: "/shipping-management/shipping-schedule",
        element: <ShippingSchedule />,
      },
      { path: "/offers", element: <Offers /> },
      { path: "/payments", element: <Payments /> },
      { path: "/payments/refund", element: <Refund /> },
      { path: "/payments/wallet", element: <Wallet /> },
      { path: "/payments/accounts-ledger", element: <AccountsLedger /> },
      { path: "/partial-accept", element: <PartialAccept /> },
      { path: "/sales-summery", element: <SalesSummery /> },
      { path: "/user-role", element: <UserRole /> },
      { path: "/user-role/add-user", element: <AddUser /> },
      { path: "/user-role/role-management", element: <RoleManagement /> },
      // { path: "/configuration", element: <Configuration /> },
      // { path: "/configuration/iD-configuration", element: <IdConfiguration /> },
      // { path: "/configuration/email", element: <Email /> },
      { path: "/mock", element: <Mock /> },
    ],
  },
]);
