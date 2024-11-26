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
import MenuMaster from "../Components/Form/Master/MenuMaster/MenuMaster";
import ObservationMapping from "../Components/Form/Master/ObservationMapping";
import DrTestApprovalMaster from "../Components/Form/LabOpration/DrTestApprovalMaster";
import TestOutSourceLabMaster from "../Components/Form/LabOpration/OuthouseSetteliteProcessingMaster";
import OuthouseSetteliteProcessingMaster from "../Components/Form/LabOpration/TestOutSourceLabMaster";
import NABLMaster from "../Components/Form/LabOpration/NABLMaster";
import ManageTestReportOrdering from "../Components/Form/LabOpration/ManageTestReportOrdering";
import ReportingHelpMaster from "../Components/Form/LabOpration/ReportingHelpMaster/ReportingHelpMaster";
import InterpretationMaster from "../Components/Form/LabOpration/InterpretationMaster";
import TATMaster from "../Components/Form/LabOpration/TATMaster";
import ReportingFormulaMaster from "../Components/Form/LabOpration/ReportingFormulaMaster";
import LabTestMappingMaster from "../Components/Form/LabOpration/LabTestMappingMaster/LabTestMappingMaster";
import Test from "../Components/Form/LabOpration/Test";
import LabObservationWithRange from "../Components/Form/LabOpration/LabTestMappingMaster/LabObservationWithRange";
import InvestigationTemplateMaster from "../Components/Form/LabOpration/InvestigationTemplateMaster";
import CommentMaster from "../Components/Form/LabOpration/CommentMaster";
import MicroOrganismAntibioticMaster from "../Components/Form/LabOpration/MicroOrganismAntibioticMaster/MicroOrganismAntibioticMaster";

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
        element: <EmployeeMaster />,
      },
      {
        path: "/rate-type-master",
        element: <RateTypeMaster />,
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
        element: <ObservationMapping />,
      },
      {
        path: "/dr-test-approval-master",
        element: <DrTestApprovalMaster />,
      },
      {
        path: "/test-out-source-labMaster",
        element: <OuthouseSetteliteProcessingMaster />,
      },
      {
        path: "/outhouse-settelite-processing-master",
        element: <TestOutSourceLabMaster />,
      },
      {
        path: "/nabl-master",
        element: <NABLMaster />,
      },
      {
        path: "/manage-test-report-ordering",
        element: <ManageTestReportOrdering />,
      },
      {
        path: "/reporting-help-master",
        element: <ReportingHelpMaster />,
      },
      {
        path: "/interpretation-master",
        element: <InterpretationMaster />,
      },

      {
        path: "/tat-master",
        element: <TATMaster />,
      },
      {
        path: "/Reporting-Formula-Master",
        element: <ReportingFormulaMaster/>,
      },
      {
        path: "/Lab-Test-Mapping-Master",
        element: <LabTestMappingMaster/>,
      },
      {
        path: "/lab-observation-with-range/:id",
        element: <LabObservationWithRange />,
      },
      {
        path: "/investigation-template-master",
        element: <InvestigationTemplateMaster />,
      },
      {
        path: "/comment-master",
        element: <CommentMaster />,
      },
      {
        path: "/micro-organism-antibiotic-master",
        element: <MicroOrganismAntibioticMaster />,
      },
      
      {
        path: "/test",
        element: <Test />,
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
