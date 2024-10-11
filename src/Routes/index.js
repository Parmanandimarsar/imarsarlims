import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "../Pages/Login";

import SignUp from "../Components/Form/Master/StaffMaster";

import Home from "../Pages/Header";
import CompanyMaster from "../Components/Form/Master/CompanyMaster";

import LetterDetails from "../Components/Form/Master/LetterDetails";

import OpeningStocks from "../Components/Form/Master/OpeningStocks";
import LedgerMaster from "../Components/Form/Master/LedgerMaster";
import LedgerTempAddresh from "../Components/Form/Master/LedgerTempAddresh";
import LabourMaster from "../Components/Form/Master/LabourMaster";
import MiscMaster from "../Components/Form/Master/MiscMaster";
import VehicleOrder from "../Components/Form/PurchaseMaster/VehicleOrder";
import PurchaseChallanVehicle from "../Components/Form/PurchaseMaster/PurchaseChallan";
import PaymentVoucher from "../Components/Form/PurchaseMaster/PaymentVoucher";
import SalesModel from "../Components/Form/PurchaseMaster/SalesModel";
import ReceiptBooking from "../Components/Form/PurchaseMaster/ReceiptBooking";
import SalesChallan from "../Components/Form/Subdealer/SalesChallan";
import SalesInvoice from "../Components/Form/Subdealer/SalesInvoice";
import DeliveryChallan from "../Components/Form/Subdealer/DeliveryChallan";
import DeliveryInvoice from "../Components/Form/Subdealer/DeliveryInvoice";
import AccountsPaymentVoucher from "../Components/Form/Accounts/AccountsPaymentVoucher";
import ContraVoucher from "../Components/Form/Accounts/ContraVoucher";
import CashBooks from "../Components/Form/Accounts/CashBooks";
import ExpenseBook from "../Components/Form/Accounts/ExpenseBook";
import LedgerView from "../Components/Form/Accounts/LedgerView";
import Income from "../Components/Form/Accounts/Income";
import Receipt from "../Components/Form/Accounts/Receipt";
import BankBook from "../Components/Form/Accounts/BankBook";
import HSNCODEMaster from "../Components/Form/Master/HSNCODEMaster";
import PartsMaster from "../Components/Form/Master/PartsMaster";
import LocationMaster from "../Components/Form/Master/LocationMaster";
import LedgerGroup from "../Components/Form/Master/LedgerGroup";
import DistrictStateMaster from "../Components/Form/Master/DistrictStateMaster";
import SideNave from "../Pages/MainLayout/SideNav";
import Layout from "../Pages/MainLayout";
// const Layout = () => (
//   <>
//     <div>
//       <Navbar />
//       <SideNave />
//     </div>

//     <Outlet />
//     <Footer />
//   </>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CompanyMaster />,
      },
      {
        path: "/letter-details",
        element: <LetterDetails />,
      },
      {
        path: "/vehical-master",
        element: <SignUp />,
      },
      {
        path: "/opening-stocks",
        element: <OpeningStocks />,
      },
      {
        path: "/ledger-master",
        element: <LedgerMaster />,
      },
      {
        path: "/labour-master",
        element: <LabourMaster />,
      },
      {
        path: "/ledger-temp-addresh",
        element: <LedgerTempAddresh />,
      },
      {
        path: "/miscmaster",
        element: <MiscMaster />,
      },
      {
        path: "/vehicle-order",
        element: <VehicleOrder />,
      },
      {
        path: "/Purchase-Challan-Vehicle",
        element: <PurchaseChallanVehicle />,
      },
      {
        path: "/vehicle-order",
        element: <VehicleOrder />,
      },
      {
        path: "/payment-voucher",
        element: <PaymentVoucher />,
      },
      {
        path: "/sales-model",
        element: <SalesModel />,
      },
      {
        path: "/receipt-booking",
        element: <ReceiptBooking />,
      },
      {
        path: "/sales-challan",
        element: <SalesChallan />,
      },
      {
        path: "/sales-invoice",
        element: <SalesInvoice />,
      },
      {
        path: "/delivery-challan",
        element: <DeliveryChallan />,
      },
      {
        path: "/delivery-invoice",
        element: <DeliveryInvoice />,
      },
      {
        path: "/account-payment-voucher",
        element: <AccountsPaymentVoucher />,
      },
      {
        path: "/contra-voucher",
        element: <ContraVoucher />,
      },
      {
        path: "/cash-books",
        element: <CashBooks />,
      },
      {
        path: "/expense-book",
        element: <ExpenseBook />,
      },
      {
        path: "/ledger-view",
        element: <LedgerView />,
      },
      {
        path: "/income",
        element: <Income />,
      },
      {
        path: "/receipt",
        element: <Receipt />,
      },
      {
        path: "/bank-book",
        element: <BankBook />,
      },
      {
        path: "/hsncode-master",
        element: <HSNCODEMaster />,
      },
      {
        path: "/parts-master",
        element: <PartsMaster />,
      },
      {
        path: "/location-master",
        element: <LocationMaster />,
      },
      {
        path: "/ledger-group",
        element: <LedgerGroup />,
      },
      {
        path: "/distric-state-master",
        element: <DistrictStateMaster />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/home",
    element: <Home />,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
