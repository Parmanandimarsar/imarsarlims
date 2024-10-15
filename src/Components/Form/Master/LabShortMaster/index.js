import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SampleRemarksMaster from "./SampleRemarksMaster";
import SampleRejectionMaster from "./SampleRejectionMaster";
import SampleReRerunRemarks from "./SampleReRerunRemarks";
import SampleTypeMaster from "./SampleTypeMaster";
import ReportFooterRemarks from "./ReportFooterRemarks";
import OutSourceLabMaster from "./OutSourceLabMaster";
import LabDepartmentMaster from "./LabDepartmentMaster";
import TestMethodMaster from "./TestMethodMaster";

const LabShortMaster = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Lab Short Master</Typography>
        </Box>
        <Divider className="divider" />

        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Sample Remarks Master" value="1" />
              <Tab label="Sample Rejection Master" value="2" />
              <Tab label="Sample Re-Rerun Remarks" value="3" />
              <Tab label="Sample Type Master" value="4" />
              <Tab label="Report Footer Remarks" value="5" />
              <Tab label="Outsource Lab Master" value="6" />
              <Tab label="Lab Department Master" value="7" />
              <Tab label="Test Method Master" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SampleRemarksMaster/>
          </TabPanel>
          <TabPanel value="2">
            <SampleRejectionMaster/>
          </TabPanel>
          <TabPanel value="3">
            <SampleReRerunRemarks/>
          </TabPanel>
          <TabPanel value="4">
            <SampleTypeMaster/>
          </TabPanel>
          <TabPanel value="5">
            <ReportFooterRemarks/>
          </TabPanel>
          <TabPanel value="6">
            <OutSourceLabMaster/>
          </TabPanel>
          <TabPanel value="7">
           <LabDepartmentMaster/>
          </TabPanel>
          <TabPanel value="8">
           <TestMethodMaster/>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default LabShortMaster;
