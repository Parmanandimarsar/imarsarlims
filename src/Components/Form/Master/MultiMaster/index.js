import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DiscountReasonMaste from "./DiscountReasonMaste";
import DoctorDegreeMaster from "./DoctorDegreeMaster";
import DesignationMaster from "./DesignationMaster";
import PatientDocumentMaster from "./PatientDocumentMaster";
import TitleMaster from "./TitleMaster";
import BankMaster from "./BankMaster";
import DiscountApprovalMaster from "./DiscountApprovalMaster";
import DiscountTypeMaster from "./DiscountTypeMaster";

const MultiMaster = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Multi Master</Typography>
        </Box>
        <Divider className="divider" />

        <TabContext value={value}>
          <Box
           
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Discount Reason Master" value="1" />
              <Tab label="Doctor Degree Master" value="2" />
              <Tab label="Designation Master" value="3" />
              <Tab label="Patient Document Master" value="4" />
              <Tab label="Title Master" value="5" />
              <Tab label="Bank Master" value="6" />
              <Tab label="Discount Approval Master" value="7" />
              <Tab label="Discount Type Master" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DiscountReasonMaste />
          </TabPanel>
          <TabPanel value="2">
            <DoctorDegreeMaster />
          </TabPanel>
          <TabPanel value="3">
            <DesignationMaster />
          </TabPanel>
          <TabPanel value="4">
            <PatientDocumentMaster />
          </TabPanel>
          <TabPanel value="5">
            <TitleMaster />
          </TabPanel>
          <TabPanel value="6">
            <BankMaster />
          </TabPanel>
          <TabPanel value="7">
            <DiscountApprovalMaster />
          </TabPanel>
          <TabPanel value="8">
            <DiscountTypeMaster />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MultiMaster;
