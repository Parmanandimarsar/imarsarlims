import {
  Button,
  IconButton,
  Switch,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SellIcon from '@mui/icons-material/Sell';
import DeleteIcon from "@mui/icons-material/Delete";
import ImageView from "./ImageView";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import dayjs from "dayjs";
import { format } from "date-fns";
import DraggableRow from "../ConstantComponents/DragableComponents/DraggableRow";
import { FaRegShareFromSquare } from "react-icons/fa6";
export const MasterRateTypeColumns = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "rateType",
    headerName: "Rate Type",
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: "center",
    headerName: "Center",
    width: 600,
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="w-full text-center">{params.value.join(", ")}</div>
    ),
  },
  // {Array.isArray(params.value) ? params.value.join(", ") : ""}
  {
    field: "active",
    headerName: "Active",
    width: 220,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterDiscountReasonColumns = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 150, disableColumnMenu: true },
  {
    field: "discountreason",
    headerName: "Discount Reason Master",
    width: 600,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const MasterDoctorDegree = (handleToggleActive, handleEdit, Switch) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "doctordegree",
    headerName: "Doctor Degree Master",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: "degreetype",
    headerName: "Degree Type",
    width: 500,
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "active",
    headerName: "Active",
    width: 220,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterdesignationmasterColumns = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 150, disableColumnMenu: true },
  {
    field: "designationmaster",
    headerName: "Designation Master",
    width: 600,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 200,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterPatientDocumentColumns = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "patientdocumentmaster",
    headerName: "Patient Document Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const MasterTitleColumns = (handleToggleActive, handleEdit, Switch) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "titlemaster",
    headerName: "Title Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterBankColumns = (handleToggleActive, handleEdit, Switch) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "bankmaster",
    headerName: "Bank Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterDiscountApproval = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "discountapproval",
    headerName: "Discount Approval",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterDiscountTypeColumns = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "discounttype",
    headerName: "Discount Type Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterSampleRemarksColumns = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "sampleremarks",
    headerName: "Sample Remarks Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterSampleRejectionMaster = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "samplerejection",
    headerName: "Sample Rejection Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const MasterSampleReRerunRemarks = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "samplerererunremarks",
    headerName: "Sample Re Rerun Remarks",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterSampleTypeMaster = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "SampleTypeMaster",
    headerName: "Sample Re Rerun Remarks",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const MasterReportFooterRemarks = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "ReportFooterRemarks",
    headerName: "Report Footer Remarks",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const MasterLabDepartmentMaster = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "LabDepartmentMaster",
    headerName: "Lab Department Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const MasterOutSourceLabMaster = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "OutSourceLabMaster",
    headerName: "Out SourceLab Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const MasterTestMethodMaster = (
  handleToggleActive,
  handleEdit,
  Switch
) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "TestMethodMaster",
    headerName: "Test Method Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterRoleMaster = (handleToggleActive, handleEdit, Switch) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "RoleMaster",
    headerName: "Role Master",
    width: 700,
    disableColumnMenu: true,
  },

  {
    field: "active",
    headerName: "Active",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Edit",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const MasterAddLetterHead = (handleEdit, handleDelete) => [
  { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
  {
    field: "center",
    headerName: "Center",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "reportHeaderHeightY",
    headerName: "Report Header Height Y",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "patientYHeader", // Unique field
    headerName: "Patient Y Header",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "barcodeXPosition", // Unique field
    headerName: "Barcode X Position",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "qrCodeYPosition", // Unique field
    headerName: "QR Code Y Position",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "qrHeader",
    headerName: "QR Header",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "barcodeHeader", // Unique field
    headerName: "Barcode Header",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "footerHeight", // Unique field
    headerName: "Footer Height",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "receiptHeader", // Unique field
    headerName: "Receipt Header",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "receiptFooter", // Unique field
    headerName: "Receipt Footer",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "rWaterMark", // Unique field
    headerName: "R.WaterMark",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "letterHead", // Unique field
    headerName: "Letter Head",
    width: 150,
    disableColumnMenu: true,
    renderCell: (params) => {
      // console.log("param",params);

      return <ImageView imageUrl={params.row.letterHead} />;
    },
  },
  {
    field: "actions",
    headerName: "Action",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center gap-2 items-center sticky-action">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>

        <IconButton
          aria-label="delete"
          color="secondary"
          onClick={() => handleDelete(params.row)}
        >
          <DeleteIcon sx={{ fontSize: "15px", color: "red" }} />
        </IconButton>
      </div>
    ),
  },
  ,
];

export const MasterLabTestMaster = (handleToggleActive, handleEdit) => [
  { field: "id", headerName: "S.No", width: 50, disableColumnMenu: true },

  {
    field: "testType", // Unique field
    headerName: "Test Type",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "testName", // Unique field
    headerName: "Test Name",
    width: 100,
    disableColumnMenu: true,
  },

  {
    field: "testCode",
    headerName: "Test Code",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "testMethod", // Unique field
    headerName: "Test Method",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "sampleVolume", // Unique field
    headerName: "Sample Volume",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "containerColor", // Unique field
    headerName: "Container Color",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "department", // Unique field
    headerName: "Department",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "gender", // Unique field
    headerName: "Gender",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "reportType", // Unique field
    headerName: "Report Type",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "sampleType", // Unique field
    headerName: "Sample Type",
    width: 100,
    disableColumnMenu: true,
  },
  {
    field: "active",
    headerName: "Active",
    width: 100,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value === "true" || params.value === true} // Ensure proper boolean value
          onChange={() => handleToggleActive(params.row)} // Pass params.row to toggle active
        />
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Action",
    width: 175,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex ml-5 gap-2 ">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterMenu = (handleEdit, handleDelete) => [
  {
    field: "menuName",
    headerName: "Menu Name",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "displaySequence",
    headerName: "Display Sequence",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "isParentMenu",
    headerName: "Parent Menu",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) =>
      params.value ? (
        <p className="text-green-600">{"Yes"}</p>
      ) : (
        <p className="text-red-600">{"No"}</p>
      ), // Conditional rendering for boolean
  },
  {
    field: "menuUrl",
    headerName: "Menu URL",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "active",
    headerName: "Active",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (params.value ? "Yes" : "No"), // Conditional rendering for boolean
  },
  {
    field: "doNotDisplay",
    headerName: "Hide Page",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (params.value ? "Yes" : "No"), // Conditional rendering for boolean
  },
  {
    field: "activate",
    headerName: "Activate",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleDelete(params.row)}
        />
      </div>
    ),
  },
  {
    field: "edit",
    headerName: "Edit",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex ml-5 gap-2 ">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const MasterObservationMapping = [
  { field: "id", headerName: "S.No", width: 150, disableColumnMenu: true },

  {
    field: "Observation Name", // Unique field
    headerName: "Observation Name",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "testName", // Unique field
    headerName: "Total Count",
    flex: 1,
    disableColumnMenu: true,
  },
];
export const DrTestApprovalMasterColumns = (handleToggleActive, handleEdit) => [
  {
    field: "doctorName",
    headerName: "Doctor Name",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "centre",
    headerName: "Centre",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "employee",
    headerName: "Employee",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "signUpload",
    headerName: "Sign	",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => {
      // console.log("param",params);

      return <ImageView imageUrl={params.row.signUpload} />;
    },
  },

  {
    field: "deActivate",
    headerName: "DeActivate",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex justify-center items-center">
        <Switch
          size="small"
          checked={params.value}
          onChange={() => handleToggleActive(params.row)}
        />
      </div>
    ),
  },
  {
    field: "edit",
    headerName: "Edit",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex ml-5 gap-2 ">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];
export const OuthouseSetteliteProcessingMasterColumns = (
  handleDelete,
  handleEdit
) => [
  {
    field: "bookingCentre",
    headerName: "Booking Centre",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "processingCentre",
    headerName: "Processing Centre",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "department",
    headerName: "Department",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "labTest",
    headerName: "LabTest",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex ml-5 gap-2 ">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleDelete(params.row)}
        >
          <DeleteIcon
            sx={{
              fontSize: "15px",
              // color:"#ff1744"
            }}
          />
        </IconButton>
      </div>
    ),
  },

  {
    field: "edit",
    headerName: "Edit",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex ml-5 gap-2 ">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const TestOutSourceLabMasterColumns = (handleDelete, handleEdit) => [
  {
    field: "bookingCentre",
    headerName: "Booking Centre",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "department",
    headerName: "Department",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "investigation",
    headerName: "Investigation",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "lab",
    headerName: "Lab",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "rate",
    headerName: "Rate",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex ml-5 gap-2 ">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleDelete(params.row)}
        >
          <DeleteIcon
            sx={{
              fontSize: "15px",
              // color:"#ff1744"
            }}
          />
        </IconButton>
      </div>
    ),
  },

  // {
  //   field: "deActivate",
  //   headerName: "DeActivate",
  //   flex: 1,
  //   disableColumnMenu: true,
  //   renderCell: (params) => (
  //     <div className="flex justify-center items-center">
  //       <Switch
  //         size="small"
  //         checked={params.value}
  //         onChange={() => handleToggleActive(params.row)}
  //       />
  //     </div>
  //   ),
  // },
  {
    field: "edit",
    headerName: "Edit",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex ml-5 gap-2 ">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    ),
  },
];

export const NABLMasterColumns = (handleDelete) => [
  {
    field: "bookingCenter",
    headerName: "Booking Centre",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "department",
    headerName: "Department",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "investigation",
    headerName: "Investigation",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "logo",
    headerName: "Logo",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => {
      // console.log("param",params);

      return <ImageView imageUrl={params.row.logo} />;
    },
  },

  {
    field: "action",
    headerName: "Action",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex ml-5 gap-2 ">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => handleDelete(params.row)}
        >
          <DeleteIcon
            sx={{
              fontSize: "15px",
              // color:"#ff1744"
            }}
          />
        </IconButton>
      </div>
    ),
  },
];

export const ReportingHelpMastercolumns = (handleDelete) => [
  { field: "id", headerName: "SNo", flex: 1, disableColumnMenu: true },
  {
    field: "masterName",
    headerName: "Master Name",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "remove",
    headerName: "Remove",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <IconButton
        aria-label="delete"
        color="secondary"
        onClick={() => handleDelete(params.row)}
      >
        <DeleteIcon sx={{ fontSize: "15px", color: "red" }} />
      </IconButton>
    ),
  },
];

// export const TATMastercolumns = (handleProcessRowUpdate) => [
//   { field: "id", headerName: "SNo", flex: 1 },
//   {
//     field: "startTime",
//     headerName: "Start Time",
//     width: 150,

//     renderCell: (params) => (
//       <TimePicker
//         value={params.row.startTime}
//         onChange={(newTime) => {
//           const updatedRow = { ...params.row, startTime: newTime };
//           handleProcessRowUpdate(updatedRow);
//         }}
//         slotProps={{ textField: { fullWidth: true } }}
//       />
//     ),
//     editable: true,
//   },
//   {
//     field: "endTime",
//     headerName: "End Time",
//     width: 150,

//     renderCell: (params) => (
//       <TimePicker
//         value={params.row.endTime}
//         onChange={(newTime) => {
//           const updatedRow = { ...params.row, endTime: newTime };
//           handleProcessRowUpdate(updatedRow);
//         }}
//         slotProps={{ textField: { fullWidth: true } }}
//       />
//     ),
//     editable: true,
//   },
//   { field: "testName", headerName: "Test Name", flex: 1, editable: true },
//   { field: "regColl", headerName: "Reg Coll.", flex: 1, editable: true },
//   {
//     field: "collRecv",
//     headerName: "Coll-Recv.",
//     editable: true,
//     flex: 1,
//     disableColumnMenu: true,
//   },
//   {
//     field: "tatType",
//     headerName: "Tat Type",
//     editable: true,
//     flex: 1,
//     disableColumnMenu: true,
//   },
//   {
//     field: "mins",
//     headerName: "Mins",
//     editable: true,
//     flex: 1,
//     disableColumnMenu: true,
//   },
//   {
//     field: "days",
//     headerName: "Days",
//     editable: true,
//     flex: 1,
//     disableColumnMenu: true,
//   },
// ];

export const TATMasterColumns = (updateRow, toggleDaySelection) => [
  { field: "id", headerName: "SNo.", width: 50 },
  {
    field: "startTime",
    headerName: "Start Time",
    width: 150,
    renderCell: (params) => (
      <LocalizationProvider>
        <TimePicker
          ampm
          value={dayjs(params.value, "hh:mm A")}
          onChange={(newValue) => {
            const formattedTime = dayjs(newValue).format("hh:mm A");
            updateRow(params.id, "startTime", formattedTime);
          }}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    ),
  },
  {
    field: "endTime",
    headerName: "End Time",
    width: 150,
    renderCell: (params) => (
      <LocalizationProvider>
        <TimePicker
          ampm
          value={dayjs(params.value, "hh:mm A")}
          onChange={(newValue) => {
            const formattedTime = dayjs(newValue).format("hh:mm A");
            updateRow(params.id, "endTime", formattedTime);
          }}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    ),
  },
  { field: "testName", headerName: "Test Name", width: 200 },
  {
    field: "regColl",
    headerName: "Reg Coll.",
    width: 100,
    renderCell: (params) => (
      <TextField
        value={params.value}
        onChange={(e) => updateRow(params.id, "regColl", e.target.value)}
      />
    ),
  },
  {
    field: "collRecv",
    headerName: "Coll Recv.",
    width: 100,
    renderCell: (params) => (
      <TextField
        value={params.value}
        onChange={(e) => updateRow(params.id, "collRecv", e.target.value)}
      />
    ),
  },
  {
    field: "tatType",
    headerName: "TAT Type",
    width: 100,
    renderCell: (params) => (
      <Select
        value={params.value}
        onChange={(e) => {
          const newTatType = e.target.value;
          updateRow(params.id, "tatType", newTatType);

          // Automatically reset mins/days based on tatType
          if (newTatType === "Mins") {
            updateRow(params.id, "days", ""); // Reset days if tatType is Mins
          } else if (newTatType === "Days") {
            updateRow(params.id, "mins", ""); // Reset mins if tatType is Days
          }
        }}
      >
        <MenuItem value="Mins">Mins</MenuItem>
        <MenuItem value="Days">Days</MenuItem>
      </Select>
    ),
  },
  {
    field: "mins",
    headerName: "Mins",
    width: 100,
    renderCell: (params) => (
      <TextField
        value={params.value}
        onChange={(e) => updateRow(params.id, "mins", e.target.value)}
        disabled={params.row.tatType === "Days"} // Disable if tatType is Days
      />
    ),
  },
  {
    field: "days",
    headerName: "Days",
    width: 100,
    renderCell: (params) => (
      <TextField
        value={params.value}
        onChange={(e) => updateRow(params.id, "days", e.target.value)}
        disabled={params.row.tatType === "Mins"} // Disable if tatType is Mins
      />
    ),
  },
  {
    field: "daysOfWeek",
    headerName: "Days of Week",
    width: 200,
    renderCell: (params) => (
      <div>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <span
            key={day}
            onClick={() => toggleDaySelection(params.id, day)}
            style={{
              cursor: "pointer",
              marginRight: 8,
              color: params.row.selectedDays.includes(day) ? "navy" : "black",
              fontWeight: params.row.selectedDays.includes(day)
                ? "bold"
                : "normal",
            }}
          >
            {day}
          </span>
        ))}
      </div>
    ),
  },
];

export const LabTestMappingMasterColumns = (
  handleCheckboxChange,
  handleRemoveRow
) => [
  { field: "sn", headerName: "S/N", width: 50 },
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Test Name",
    width: 200,
    renderCell: (params) => <DraggableRow row={params.row} />,
  },
  {
    field: "header",
    headerName: "Header",
    width: 100,
    renderCell: (params) => (
      <Checkbox
        size="small"
        checked={params.row.header}
        onChange={() => handleCheckboxChange(params.row.id, "header")}
      />
    ),
  },
  {
    field: "bold",
    headerName: "Bold",
    width: 100,
    renderCell: (params) => (
      <Checkbox
        size="small"
        checked={params.row.bold}
        onChange={() => handleCheckboxChange(params.row.id, "bold")}
      />
    ),
  },
  {
    field: "critical",
    headerName: "Critical",
    width: 100,
    renderCell: (params) => (
      <Checkbox
        size="small"
        checked={params.row.critical}
        onChange={() => handleCheckboxChange(params.row.id, "critical")}
      />
    ),
  },
  {
    field: "dlcCheck",
    headerName: "DLC Check",
    width: 100,
    renderCell: (params) => (
      <Checkbox
        size="small"
        checked={params.row.dlcCheck}
        onChange={() => handleCheckboxChange(params.row.id, "dlcCheck")}
      />
    ),
  },
  {
    field: "printSeparate",
    headerName: "Print Separate",
    width: 100,
    renderCell: (params) => (
      <Checkbox
        size="small"
        checked={params.row.printSeparate}
        onChange={() => handleCheckboxChange(params.row.id, "printSeparate")}
      />
    ),
  },
  {
    field: "showinReport",
    headerName: "Show in Report",
    width: 100,
    renderCell: (params) => (
      <Checkbox
        size="small"
        checked={params.row.showinReport}
        onChange={() => handleCheckboxChange(params.row.id, "showinReport")}
      />
    ),
  },
  {
    field: "interPertation",
    headerName: "InterPertation",
    width: 100,
    // renderCell: (params) => (
    //   <Checkbox
    //     size="small"
    //     checked={params.row.showinReport}
    //     onChange={() => handleCheckboxChange(params.row.id, "showinReport")}
    //   />
    // ),
  },
  {
    field: "refRange",
    headerName: "Ref.Range",
    width: 100,
    renderCell: (params) => (
      <a
        href={`/lab-observation-with-range/${params.row.id}`} // Dynamic URL
        // href={`/interpretation-master`} // Dynamic URL
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <FaRegShareFromSquare
          style={{ fontSize: "20px", color: "blue", cursor: "pointer" }}
        />
      </a>
    ),
  },
  
  {
    field: "remove",
    headerName: "Remove",
    width: 100,
    renderCell: (params) => (
      <IconButton
        aria-label="delete"
        color="secondary"
        onClick={() => handleRemoveRow(params.row.id)}
      >
        <DeleteIcon sx={{ fontSize: "15px", color: "red" }} />
      </IconButton>
    ),
  },
];


export const ReferenceRangeLabOprationColumns = (handleAddRow,handleEditClick,handleDeleteClick) => [
  { field: "gender", headerName: "Gender", width: 100, },
  { field: "fromAge", headerName: "From Age", width: 100, editable: true, cellClassName: "editable-cell", },
  { field: "toAge", headerName: "To Age", width: 100, editable: true , cellClassName: "editable-cell",},
  { field: "minValue", headerName: "Min Value", width: 100, editable: true, cellClassName: "editable-cell", },
  { field: "maxValue", headerName: "Max Value", width: 100, editable: true, cellClassName: "editable-cell", },
  { field: "minCritical", headerName: "Min Critical", width: 100, editable: true , cellClassName: "editable-cell",},
  { field: "mixCritical", headerName: "Mix Critical", width: 100, editable: true , cellClassName: "editable-cell",},
  { field: "minAutoapp", headerName: "Min Autoapp.", width: 100, editable: true , cellClassName: "editable-cell",},
  { field: "maxAutoApp", headerName: "Max AutoApp.", width: 100, editable: true , cellClassName: "editable-cell",},
  { field: "unit", headerName: "Unit", width: 100, editable: true , cellClassName: "editable-cell",},
  { field: "refRange", headerName: "Ref. Range", width: 100, editable: true, cellClassName: "editable-cell", },
  { field: "defaultValue", headerName: "Default Value", width: 100, editable: true, cellClassName: "editable-cell", },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      if (params.row.action === "add") {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleAddRow}
          >
            Add
          </Button>
        );
      }else{
        return (
          <Box>
            <IconButton
              color="primary"
              size="small"
              onClick={() => handleEditClick(params.row.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() => handleDeleteClick(params.row.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      }
     
    },
  },
];

export const MicroOrganismAntibioticMastercolumns =(handleEdit)=> [
  { field: "id", headerName: "ID", width: 100,flex: 1,  disableColumnMenu: true},
  { field: "microType", headerName: "Micro Type", width: 200,flex: 1, disableColumnMenu: true},
  {
    field: "organismAntibiotic",
    headerName: "Organism Antibiotic",
    width: 200,
    flex: 1,
    disableColumnMenu: true,
  },
  { field: "machineCode", headerName: "Machine Code", width: 200,flex: 1,disableColumnMenu: true, },
  { field: "active", headerName: "Status", width: 100 ,flex: 1,disableColumnMenu: true,},
  { field: "edit", headerName: "Edit", width: 100 ,disableColumnMenu: true, renderCell: (params) => (
    <div className="flex ml-5 gap-2 ">
      <IconButton
        aria-label="edit"
        color="primary"
        onClick={() => handleEdit(params.row)}
      >
        <EditIcon sx={{ fontSize: "15px" }} />
      </IconButton>
    </div>
  ), },
  { field: "tag", headerName: "Tag", width: 100 ,disableColumnMenu: true, renderCell: (params) => (
    <div className="flex ml-5 gap-2 ">
      <IconButton
        aria-label="edit"
        color="primary"
        // onClick={() => handleEdit(params.row)}
      >
        <SellIcon sx={{ fontSize: "15px" }} />
      </IconButton>
    </div>
  ), },
];

export const CommentMastercolumns =(handleEdit)=>[
  { field: "id", headerName: "ID", width: 100 ,disableColumnMenu: true,},
  { field: "type", headerName: "Type", width: 200 ,disableColumnMenu: true,},
  { field: "selectedOption", headerName: "Item/Observation", width: 200,disableColumnMenu: true, },
  { field: "commentName", headerName: "Comment Name", width: 200,disableColumnMenu: true, },
  { field: "joditText", headerName: "Comment Data", width: 200 ,disableColumnMenu: true, },
  { field: "actions", headerName: "Actions",disableColumnMenu: true, renderCell: (params) => (
    <button onClick={() => handleEdit(params.row)}>Edit</button>
  )}
];