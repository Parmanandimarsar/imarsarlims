import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; 
export const MasterHSNCodeTable=[
  { field: "id", headerName: "Sr. No", width: 130 ,
    sortable: true, 
    disableColumnMenu: true,
  },
  { field: "igst", headerName: "HSN CODE", width: 130 ,
    sortable: true, 
    disableColumnMenu: true,
   

  },
  { field: "cgst", headerName: "IGST", width: 130 ,
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
export const MasterLedgerGroupTable=[
  { field: "id", headerName: "Sr. No", width: 130 ,
    sortable: true, 
    disableColumnMenu: true,
  },
  { field: "igst", headerName: "Ledger_Group_Name", width: 130 ,
    sortable: true, 
    disableColumnMenu: true,
  },
  { field: "cgst", headerName: "Main_Ledger_name", width: 130 ,
    sortable: true, 
     disableColumnMenu: true,
   },
 
  
];

export const MasterDistrictStateTable = (handleEdit) => [
  { field: "id", headerName: "ID", width: 70 },
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
    { field: "id", headerName: "HSNCODE", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "IGST", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "CGST", width: 130 ,
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
    { field: "id", headerName: "Chassis No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "Engine. No ", width: 130,
      sortable: true, 
      disableColumnMenu: true,
     },
    { field: "cgst", headerName: "Key No", width: 130 ,
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
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "Payment Date", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "Prefix", width: 130 ,
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
  export const ReceiptBookingTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "ReciptDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "PreFix", width: 130 ,
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

  export const  AccountPaymentVoucherTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "PaymentDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "Prefix", width: 130 ,
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

  export const AccountContraVoucherTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "TraDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "Prefix", width: 130 ,
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
  export const AccountCashBooksTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "TraDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "VoucherNo", width: 130 ,
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

  export const AccountExpenseBookTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "TraDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "Prefix", width: 130 ,
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
  export const AccountLedgerViewTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "TraDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "VoucherPrefix", width: 130 ,
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
  export const AccountIncomeTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "IncomeDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "IDate", width: 130 ,
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
  export const AccountReceiptTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "ReceiptDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "Prefix", width: 130 ,
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
  export const AccountBankBookTable=[
    { field: "id", headerName: "Sr. No", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
    },
    { field: "igst", headerName: "TraDate", width: 130 ,
      sortable: true, 
      disableColumnMenu: true,
     

    },
    { field: "cgst", headerName: "VoucherPrefix", width: 130 ,
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