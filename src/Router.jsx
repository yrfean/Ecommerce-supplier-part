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

export const router = createBrowserRouter([
  { path: "/*", element: <ErrorPage /> },
  { path: "/login", element: <Skelton Comp={Login} /> },
  { path: "/otpvalidation/*", element: <Skelton Comp={GetOtpPage} /> },
  { path: "/setpassword", element: <Skelton Comp={SetPasswordPage} /> },
  { path: "/supplierdetails", element: <Skelton Comp={SupplierDetails} /> },
  { path: "/taxdetails", element: <Skelton Comp={TaxDetails} /> },
  { path: "/pickupaddress", element: <Skelton Comp={PickupAddress} /> },
  { path: "/bankdetails", element: <Skelton Comp={BankDetails} /> },
]);
