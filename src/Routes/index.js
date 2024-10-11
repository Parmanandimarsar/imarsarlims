import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";



import Home from "../Pages/Header";





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
import Layout from "../Pages/MainLayout";
import ClientMaster from "../Components/Form/Master/ClientMaster";
import EmployeeMaster from "../Components/Form/Master/EmployeeMaster";
import RateTypeMaster from "../Components/Form/Master/RateTypeMaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ClientMaster />,
      },
      {
        path: "/client-master",
        element: <ClientMaster />,
      },
      {
        path: "/employee-master",
        element: <EmployeeMaster/>,
      },
      {
        path: "/rate-type-master",
        element: <RateTypeMaster/>,
      },
      // {
      //   path: "/ledger-master",
      //   element: <LedgerMaster />,
      // },
      // {
      //   path: "/labour-master",
      //   element: <LabourMaster />,
      // },
      // {
      //   path: "/ledger-temp-addresh",
      //   element: <LedgerTempAddresh />,
      // },
      // {
      //   path: "/miscmaster",
      //   element: <MiscMaster />,
      // },
      // {
      //   path: "/vehicle-order",
      //   element: <VehicleOrder />,
      // },
      // {
      //   path: "/Purchase-Challan-Vehicle",
      //   element: <PurchaseChallanVehicle />,
      // },
      // {
      //   path: "/vehicle-order",
      //   element: <VehicleOrder />,
      // },
      // {
      //   path: "/payment-voucher",
      //   element: <PaymentVoucher />,
      // },
      // {
      //   path: "/sales-model",
      //   element: <SalesModel />,
      // },
      // {
      //   path: "/receipt-booking",
      //   element: <ReceiptBooking />,
      // },
      // {
      //   path: "/sales-challan",
      //   element: <SalesChallan />,
      // },
      // {
      //   path: "/sales-invoice",
      //   element: <SalesInvoice />,
      // },
      // {
      //   path: "/delivery-challan",
      //   element: <DeliveryChallan />,
      // },
      // {
      //   path: "/delivery-invoice",
      //   element: <DeliveryInvoice />,
      // },
      // {
      //   path: "/account-payment-voucher",
      //   element: <AccountsPaymentVoucher />,
      // },
      // {
      //   path: "/contra-voucher",
      //   element: <ContraVoucher />,
      // },
      // {
      //   path: "/cash-books",
      //   element: <CashBooks />,
      // },
      // {
      //   path: "/expense-book",
      //   element: <ExpenseBook />,
      // },
      // {
      //   path: "/ledger-view",
      //   element: <LedgerView />,
      // },
      // {
      //   path: "/income",
      //   element: <Income />,
      // },
      // {
      //   path: "/receipt",
      //   element: <Receipt />,
      // },
      // {
      //   path: "/bank-book",
      //   element: <BankBook />,
      // },
      // {
      //   path: "/hsncode-master",
      //   element: <HSNCODEMaster />,
      // },
      // {
      //   path: "/parts-master",
      //   element: <PartsMaster />,
      // },
      // {
      //   path: "/location-master",
      //   element: <LocationMaster />,
      // },
      // {
      //   path: "/ledger-group",
      //   element: <LedgerGroup />,
      // },
      // {
      //   path: "/location-master",
      //   element: <LocationMaster />,
      // },
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
