import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
export const menuItems = [
    {
      text: " Master",
      icon: <MailIcon />,
      subItems: [
       
        { text: "Client-Master", link: "/client-master", icon: <MailIcon /> },
        { text: "Employee-Master", link: "employee-master", icon: <MailIcon /> },
        { text: "Rate-Type-Master", link: "/rate-type-master", icon: <MailIcon />},
        { text: "Multi-Master", link: "/multimaster", icon: <MailIcon /> },
        { text: "lab-Short-master", link: "/lab-short-master", icon: <MailIcon />},
        { text: "Add-Letter-Head", link: "/add-letter-head", icon: <MailIcon /> },
        { text: "LabTestMaster", link: "/lab-test-master", icon: <MailIcon /> },
        { text: "Menu Master", link: "/menu-master", icon: <MailIcon /> },
        { text: "Observation Mapping", link: "/observation-mapping", icon: <MailIcon /> },
       
      ],
    },
    {
      text: "Lab Opration",
      icon:<InboxIcon /> ,
      subItems: [
        { text: "Dr Test Approval Master", link: "/dr-test-approval-master", icon: <MailIcon /> },
        { text: "TestOut Source Lab Master", link: "/test-out-source-labMaster", icon: <MailIcon /> },
        { text: "Outhouse Settelite Processing Master", link: "/outhouse-settelite-processing-master", icon: <MailIcon /> },
        { text: "NABL Master", link: "/nabl-master", icon: <MailIcon /> },
        { text: "Manage Test Report Ordering", link: "/manage-test-report-ordering", icon: <MailIcon /> },
        { text: "Reporting Help Master", link: "/reporting-help-master", icon: <MailIcon /> },
        { text: "Interpretation Master", link: "/interpretation-master", icon: <MailIcon /> },
        // { text: "Interpretation Master", link: "/interpretation-master", icon: <MailIcon /> },
      ],
    },
    {
      text: "Subdealer",
      icon: <MailIcon />,
      subItems: [
        
        { text: "Sales-Challan", link: "/sales-challan", icon: <MailIcon /> },
       
      ],
    },
    {
      text: "Accounts",
      icon:<InboxIcon /> ,
      subItems: [
        { text: "A/C Payment Voucher", link: "/account-payment-voucher", icon: <MailIcon /> },
        // { text: "Contra Voucher", link: "/contra-voucher", icon: <MailIcon /> },
        // { text: "Cash Books", link: "/cash-books", icon: <MailIcon /> },
        // { text: "Expense Books", link: "/expense-book", icon: <MailIcon /> },
        // { text: "Ledger view", link: "/ledger-view", icon: <MailIcon /> },
        // { text: "Income", link: "/income", icon: <MailIcon /> },
        // { text: "Receipt", link: "/receipt", icon: <MailIcon /> },
        // { text: "Bank Book", link: "/bank-book", icon: <MailIcon /> },
      ],
    },
  ];