import { Button, IconButton, Switch, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageView from "./ImageView";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from "dayjs";

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

  // {
  //   field: "active",
  //   headerName: "Active",
  //   flex: 1,
  //   disableColumnMenu: true,
  //   renderCell: (params) =>
  //     params.value ? (
  //       <p className="text-green-600">{"Yes"}</p>
  //     ) : (
  //       <p className="text-red-600">{"No"}</p>
  //     ), // Conditional rendering for boolean
  // },

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

export const TATMastercolumns = () => [
  { field: "id", headerName: "SNo", flex: 1, disableColumnMenu: true },
  {
    field: "startTime",
    headerName: "Start Time",
    width: 150,
    editable: true,
    type: 'date',
    
  },

  {
    field: "endTime",
    headerName: "End Time",
    width: 150,
    editable: true,
    
  },
  {
    field: "testName",
    headerName: "Test Name",
    editable: true,
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "regColl",
    headerName: "Reg Coll.",
    editable: true,
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "collRecv",
    headerName: "Coll-Recv.",
    editable: true,
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "tatType",
    headerName: "Tat Type",
    editable: true,
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "mins",
    headerName: "Mins",
    editable: true,
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "days",
    headerName: "Days",
    editable: true,
    flex: 1,
    disableColumnMenu: true,
  },

  
];
