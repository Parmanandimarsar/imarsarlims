import { IconButton, Switch } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageView from "./ImageView";

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
export const MasterMenu = (handleEdit) => [
  { field: "menu", headerName: "Menu", flex: 1, disableColumnMenu: true },
  { field: "submenu", headerName: "Submenu", flex: 1, disableColumnMenu: true },
  {
    field: "menuurl",
    headerName: "Menu URL",
    flex: 1,
    disableColumnMenu: true,
  },
  { field: "icon", headerName: "Icon", flex: 1, disableColumnMenu: true },
  {
    field: "actions",
    headerName: "Actions",
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

export const MasterHSNCodeTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "HSN CODE",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "IGST",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "CGST",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "SGST",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
export const MasterLedgerGroupTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "Ledger_Group_Name",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "Main_Ledger_name",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];

export const MasterDistrictStateTable = (handleEdit) => [
  { field: "id", headerName: "ID", width: 70 },
  { field: "zone", headerName: "Zone", width: 150 },
  { field: "state", headerName: "State", width: 150 },
  { field: "district", headerName: "District", width: 150 },
  { field: "city", headerName: "City", width: 150 },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => (
      <IconButton onClick={() => handleEdit(params.row)}>
        <EditIcon sx={{ fontSize: 16 }} />
      </IconButton>
    ),
  },
];
export const OpeningStockscolumns = [
  {
    field: "id",
    headerName: "HSNCODE",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "IGST",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "CGST",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "SGST",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "CESS%",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "REGD.",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "INSUR",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "HPA",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "agree",
    headerName: "AGREE",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "other",
    headerName: "OTHER",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "discount",
    headerName: "DISCOUNT %",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];

export const OpeningStocks_OS_columns = [
  {
    field: "id",
    headerName: "Chassis No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "Engine. No ",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "Key No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "Po. No",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "Colour",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "Battery. No",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "WRC.No ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
export const PaymentVouchercolumns = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "Payment Date",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "Prefix",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "Voucher No",
    headerName: "SGST",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "Ledger Name",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "PaidAmount",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "BalAmount",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Mode",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "agree",
    headerName: "Remarks",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "other",
    headerName: "TotalAmount",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
export const ReceiptBookingTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "ReciptDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "PreFix",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "Voucher No",
    headerName: "VoucherNo",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "LedgerName",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "TotAmt ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "PaidAmt",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Bal.",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "agree",
    headerName: "Mode",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "other",
    headerName: "Remarks",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "other",
    headerName: "TranDate",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "other",
    headerName: "TotAmt",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];

export const AccountPaymentVoucherTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "PaymentDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "Prefix",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "VoucherNo",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "Ledgername",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "TotAmt ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "Mode",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotalBal.",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];

export const AccountContraVoucherTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "TraDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "Prefix",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "VoucherNo",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "TransferFrom",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "TransferTo ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "Particulars",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotalBal.",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Amount",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Remarks",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
export const AccountCashBooksTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "TraDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "VoucherNo",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "VoucherType",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "LedgerName",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "Debit ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "Credbit",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotalBal.",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Amount",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Remarks",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];

export const AccountExpenseBookTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "TraDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "Prefix",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "VoucherNo",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "ExpenseTypes",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "Vouchertype ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "Details",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Prepose",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotAmount",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Remarks",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
export const AccountLedgerViewTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "TraDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "VoucherPrefix",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "VoucherNo",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "Particulars",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "Debit ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "Credbit",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotalDebit",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotCrebit",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotalBal",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
export const AccountIncomeTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "IncomeDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "IDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "InComeType",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "Particular",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "Amount ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "LedgerName",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotalIncome",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Amount",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Remarks",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
export const AccountReceiptTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "ReceiptDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "Prefix",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "VouchNo",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "LedgerName",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "TotAmount ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "PaidAmt",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Bal",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TranDate",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotAmt",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "Remarks",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
export const AccountBankBookTable = [
  {
    field: "id",
    headerName: "Sr. No",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "igst",
    headerName: "TraDate",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cgst",
    headerName: "VoucherPrefix",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "sgst",
    headerName: "VoucherNo",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "cess",
    headerName: "Particulars",

    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "regd",
    headerName: "Debit ",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "insur",
    headerName: "Credbit",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotalDebit",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotCrebit",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "hpa",
    headerName: "TotalBal",
    type: "number",
    width: 130,
    sortable: true,
    disableColumnMenu: true,
  },
];
