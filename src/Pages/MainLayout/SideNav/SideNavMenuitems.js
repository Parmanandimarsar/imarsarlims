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
        // { text: "HSNCode Master", link: "/hsncode-master", icon: <MailIcon /> },
        // { text: "Parts Master", link: "/parts-master", icon: <MailIcon /> },
        // { text: "Ledger Group", link: "/ledger-group", icon: <MailIcon /> },
        // { text: "Location Master", link: "/location-master", icon: <MailIcon /> },
      ],
    },
    {
      text: "Purchase Master",
      icon:<InboxIcon /> ,
      subItems: [
        { text: "Vehicle Order", link: "/vehicle-order", icon: <MailIcon /> },
       
       
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