import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CustomDropdowSearchPopover from "../../ConstantComponents/PopoverSearchSelectSingalDropComp";

// Mock data
const centres = [
  { id: 1, name: "Department 1" },
  { id: 2, name: "Department 2" },
  { id: 3, name: "Department 3" },
];

const testsByDepartment = {
  "Department 1": [
    { id: "1", name: "Test A" },
    { id: "2", name: "Test B" },
  ],
  "Department 2": [
    { id: "3", name: "Test C" },
    { id: "4", name: "Test D" },
  ],
  "Department 3": [
    { id: "5", name: "Test E" },
    { id: "6", name: "Test F" },
  ],
};

// Sortable row component for drag-and-drop
function SortableRow({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </TableRow>
  );
}

const ManageTestReportOrdering = () => {
  const [department, setDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [hasChanges, setHasChanges] = useState(true);
  const [rows, setRows] = useState([]);

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  // Handle popover opening
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setSearchQuery("");
  };

  // Handle popover closing
  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSearchQuery("");
  };

  // Handle department selection
  const handleSelectDepartment = (name) => {
    setDepartment(name);
    handlePopoverClose();
    const selectedTests = testsByDepartment[name] || [];
    setRows(selectedTests);
  };

  // Handle drag end event
  const handleDragEnd = (event) => {
    console.log("event", event);
    setHasChanges(true);
    const { active, over } = event;
    if (active.id !== over.id) {
      setRows((prevRows) => {
        const oldIndex = prevRows.findIndex((row) => row.id === active.id);
        const newIndex = prevRows.findIndex((row) => row.id === over.id);
        return arrayMove(prevRows, oldIndex, newIndex);
      });
    }
  };

  const handleSaveChanges = async () => {
    try {
      // Replace with your API call
      await fetch("/your-api-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rows),
      });
      alert("Changes saved successfully!");
      setHasChanges(false);
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to save changes. Please try again.");
    }
  };
  console.log("rows", rows);

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">Manage Test Report Ordering</Typography>
        </Box>
        <Divider className="divider" />

        <Grid container spacing={1} className="pl-1">
          {/* Department Selection */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <Grid container alignItems="center">
                <Grid
                  item
                  xs={3}
                  className="formlableborder"
                  sx={{ mr: "3px" }}
                >
                  <FormLabel>Department</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    value={department}
                    placeholder="Select department"
                    fullWidth
                    variant="outlined"
                    size="small"
                    onClick={handlePopoverOpen}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <CustomDropdowSearchPopover
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    options={centres}
                    onSelect={handleSelectDepartment}
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>

        {department && (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={rows.map((row) => row.id)}
              strategy={verticalListSortingStrategy}
            >
              <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className="project-thim">
                    <TableRow>
                      <TableCell sx={{ color: "#ffff" }}>S/N</TableCell>
                      <TableCell sx={{ color: "#ffff" }}>Test Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <SortableRow key={row.id} id={row.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{row.name}</TableCell>
                      </SortableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </SortableContext>
          </DndContext>
        )}
        {/* Save Changes Button */}
        <Box sx={{ display: "flex",  mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSaveChanges}
            disabled={!hasChanges}
            sx={{ backgroundColor: "#0b5394" }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ManageTestReportOrdering;
