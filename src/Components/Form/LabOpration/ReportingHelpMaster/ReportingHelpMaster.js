import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Button,
  FormLabel,
  Grid,
  Modal,
  TextField,
  TableCell,
  TableRow,
  Table,
  TableHead,
  Paper,
  TableBody,
} from "@mui/material";

import { ReportingHelpMastercolumns } from "../../../TableField/TablefieldsColumns";
import DataGridTable from "../../../ConstantComponents/DataGridTable";
import ReportingHelpModal from "./ReportingHelpModal";
const ReportingHelpMaster = () => {
  const [investigation, setInvestigation] = useState("");
  const [observation, setObservation] = useState("");
  const [observationOptions, setObservationOptions] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [masterNameOptions, setMasterNameOptions] = useState([
    { id: 1, name: "Master Data 1" },
    { id: 2, name: "Master Data 2" },
    { id: 3, name: "Master Data 3" },
  ]);
  const [selectedMasterName, setSelectedMasterName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newMasterName, setNewMasterName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedMasterId, setSelectedMasterId] = useState(null);
  const investigationOptions = [
    { id: 1, name: "Investigation 1" },
    { id: 2, name: "Investigation 2" },
  ];

  useEffect(() => {
    if (investigation) {
      const fetchedObservations =
        investigation === "Investigation 1"
          ? [
              { id: "obs1", name: "Observation A" },
              { id: "obs2", name: "Observation B" },
            ]
          : [
              { id: "obs3", name: "Observation C" },
              { id: "obs4", name: "Observation D" },
            ];
      setObservationOptions(fetchedObservations);
      setObservation("");
      setTableData([]);
    }
  }, [investigation]);

  useEffect(() => {
    if (observation) {
      const fetchedTableData =
        observation === "Observation A"
          ? [
              { id: 1, masterName: "Master Data 1A" },
              { id: 2, masterName: "Master Data 2A" },
            ]
          : [
              { id: 3, masterName: "Master Data 1B" },
              { id: 4, masterName: "Master Data 2B" },
            ];
      setTableData(fetchedTableData);
    }
  }, [observation]);
  console.log("observation", observation);
  const handleAddToTable = (masterName) => {
    console.log("masterName", masterName);

    if (
      observation &&
      !tableData.some((row) => row.masterName === masterName.name)
    ) {
      setTableData((prev) => [
        ...prev,
        { id: tableData.length + 1, masterName: masterName.name },
      ]);
    }
  };

  const handleDelete = (deletid) => {
    setTableData((prev) => prev.filter((row) => row.id !== deletid.id));
  };

  const handleAddHelp = () => {
    setIsEdit(false);
    setNewMasterName("");
    setModalOpen(true);
  };

  // Handler to open "Edit Help" modal
  const handleEditHelp = () => {
    if (selectedMasterName) {
      setIsEdit(true);
      setNewMasterName(selectedMasterName.name);
      setModalOpen(true);
    } else {
      alert("Please select a master name first to edit.");
    }
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setNewMasterName("");
    setSelectedMasterName(null);
  };

  const handleSaveMasterName = () => {
    if (isEdit && selectedMasterName) {
      setMasterNameOptions((prev) =>
        prev.map((item) =>
          item.id === selectedMasterName.id
            ? { ...item, name: newMasterName }
            : item
        )
      );
    } else {
      setMasterNameOptions((prev) => [
        ...prev,
        { id: masterNameOptions.length + 1, name: newMasterName },
      ]);
    }
    handleCloseModal();
  };

  const handleMasterNameClick = (masterName) => {
    setSelectedMasterName(masterName);
    setSelectedMasterId(masterName.id);
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">Reporting Help Master</Typography>
        </Box>
        <Divider className="divider" />

        <Grid container spacing={2} p={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Grid container alignItems="center">
                <Grid
                  item
                  xs={3}
                  sx={{ mr: "3px" }}
                  className="formlableborder"
                >
                  <FormLabel>Investigation</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    value={investigation}
                    onChange={(e) => setInvestigation(e.target.value)}
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="" disabled>
                      <em>Select Investigation</em>
                    </MenuItem>
                    {investigationOptions.map((option) => (
                      <MenuItem key={option.id} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth disabled={!investigation}>
              <Grid container alignItems="center">
                <Grid
                  item
                  xs={3}
                  sx={{ mr: "3px" }}
                  className="formlableborder"
                >
                  <FormLabel>Observation</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    value={observation}
                    onChange={(e) => setObservation(e.target.value)}
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="" disabled>
                      <em>Select Observation</em>
                    </MenuItem>
                    {observationOptions.map((option) => (
                      <MenuItem key={option.id} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={2} p={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Paper variant="outlined" sx={{ height: 200, overflow: "auto" }}>
                <Table stickyHeader size="small" aria-label="Master Name Table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" sx={{ fontWeight: "bold", color:"white" }} className="tablehead">
                       Help Name
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {masterNameOptions.map((masterName) => (
                      <TableRow
                        key={masterName.id}
                        
                        onClick={() => handleMasterNameClick(masterName)}
                        onDoubleClick={() =>
                          observation && handleAddToTable(masterName)
                        }
                        style={{ cursor: observation ? "pointer" : "default" }}
                        sx={{
                          opacity: observation ? 1 : 0.6,
                          backgroundColor:
                            selectedMasterId === masterName.id
                              ? "navy"
                              : "inherit",
                          color:
                            selectedMasterId === masterName.id
                              ? "#fff"
                              : "inherit",
                        }}
                      >
                        <TableCell component="th" scope="row"
                        sx={{
                          color: selectedMasterId === masterName.id ? "white" : "inherit", // Apply color here as well
                        }}
                        >
                          {masterName.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
              <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                <button
                  onClick={handleAddHelp}
                 className="border-none project-thim text-white rounded-md "
                > 
                  Add Help
                </button>
                <button
                  onClick={handleEditHelp}
                  className="border-none project-thim text-white rounded-md "
                >
                  Edit Help
                </button>
              </Box>{" "}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="h-[200px] w-full">
              <DataGridTable
                rows={tableData}
                columns={ReportingHelpMastercolumns(handleDelete)}
              />
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* Modal for Adding or Editing Master Name */}
      <ReportingHelpModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        handleSaveMasterName={handleSaveMasterName}
        isEdit={isEdit}
        newMasterName={newMasterName}
        setNewMasterName={setNewMasterName}
      />
    </div>
  );
};

export default ReportingHelpMaster;
