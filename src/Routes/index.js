import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";



import Home from "../Pages/Header";

import Layout from "../Pages/MainLayout";
import ClientMaster from "../Components/Form/Master/ClientMaster";
import EmployeeMaster from "../Components/Form/Master/EmployeeMaster";
import RateTypeMaster from "../Components/Form/Master/RateTypeMaster";
import MultiMaster from "../Components/Form/Master/MultiMaster/";
import LabMaster from "../Components/Form/Master/LabShortMaster";
import AddLetterHead from "../Components/Form/Master/MultiMaster/AddLetterHead";
import LabTestMaster from "../Components/Form/Master/LabTestMaster";

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
      {
        path: "/multimaster",
        element: <MultiMaster />,
      },
      {
        path: "/lab-short-master",
        element: <LabMaster />,
      },
      {
        path: "/add-letter-head",
        element: <AddLetterHead />,
      },
      {
        path: "/lab-test-master",
        element: <LabTestMaster />,
      },
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
