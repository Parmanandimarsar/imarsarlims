import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SampleRemarksMaster from "./SampleRemarksMaster";

const LabMaster = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Lab Master</Typography>
        </Box>
        <Divider className="divider" />

        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Sample Remarks Master" value="1" />
              <Tab label="Sample Rejection Master" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SampleRemarksMaster/>
          </TabPanel>
          <TabPanel value="1">
            
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default LabMaster;
