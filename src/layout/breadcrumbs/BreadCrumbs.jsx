import { Waypoints } from "lucide-react";
import { useEffect, useState } from "react";

const navitems = [
  { name: "Dashbaord", location: "/", icon: "si:dashboard-line" },
  {
    name: "Product",
    location: "/product",
    icon: "fluent-mdl2:product",
    children: [
      { name: "Advertising windows", location: "/product/advertisingwindows" },
      { name: "Advance storage", location: "/product/advancestorage" },
      { name: "Expiry list", location: "/product/expirylist" },
    ],
  },
  {
    name: "Order",
    location: "/order",
    icon: "material-symbols:orders-outline",
    children: [
      { name: "Return", location: "/order/return" },
      { name: "Shipping", location: "/order/shipping" },
      { name: "Shipping Schedule", location: "/order/shippingschedule" },
    ],
  },
  { name: "Offers", location: "/offers", icon: "ic:outline-local-offer" },
  {
    name: "payment",
    location: "/payments",
    icon: "fluent-mdl2:payment-card",
    children: [
      { name: "Refund", location: "/payments/refund" },
      { name: "Wallet", location: "/payments/wallet" },
      { name: "Accounts ledger", location: "/payments/accountsledger" },
    ],
  },
  {
    name: "Partical accept",
    location: "/partialaccept",
    icon: "carbon:delivery-parcel",
  },
  {
    name: "Sales summery",
    location: "/salessummery",
    icon: "icon-park-outline:sales-report",
  },
  {
    name: "User role",
    location: "/userrole",
    icon: "grommet-icons:user-new",
    children: [
      { name: "Role managemenet", location: "/userrole/rolemanagement" },
    ],
  },
  {
    name: "Configuration",
    location: "/configuration",
    icon: "lucide:user-cog",
    children: [
      { name: "ID configuration", location: "/configuration/idconfiguration" },
      { name: "Email", location: "/configuration/email" },
    ],
  },
];
const BreadCrumbs = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    setPath(window.location.pathname);
  });

  return (
    <div className="flex gap-4">
      <Waypoints />
      {navitems.map((item) =>
        item.location === path ? (
          <div className="relative">
            <p className="text-2xl">{item.name} </p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default BreadCrumbs;
