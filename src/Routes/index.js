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
import AddLetterHead from "../Components/Form/Master/AddLetterHead";
import LabTestMaster from "../Components/Form/Master/LabTestMaster/LabTestMaster";
import MenuMaster from "../Components/Form/Master/MenuMaster";
import ObservationMapping from "../Components/Form/Master/ObservationMapping";
import DrTestApprovalMaster from "../Components/Form/LabOpration/DrTestApprovalMaster";
import TestOutSourceLabMaster from "../Components/Form/LabOpration/TestOutSourceLabMaster";
import OuthouseSetteliteProcessingMaster from "../Components/Form/LabOpration/OuthouseSetteliteProcessingMaster";

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
      {
        path: "/menu-master",
        element: <MenuMaster />,
      },
      {
        path: "/observation-mapping",
        element: <ObservationMapping/>,
      },
      {
        path: "/dr-test-approval-master",
        element: <DrTestApprovalMaster/>,
      },
      {
        path: "/test-out-source-labMaster",
        element: <TestOutSourceLabMaster/>,
      },
      {
        path: "/outhouse-settelite-processing-master",
        element: <OuthouseSetteliteProcessingMaster />,
      },
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
