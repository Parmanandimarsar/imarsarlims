
import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import CustomDropdowSearchPopover from "../../ConstantComponents/PopoverSearchSelectSingalDropComp";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Sample data for departments and tests
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

const ManageTestReportOrdering = () => {
  const [department, setDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [rows, setRows] = useState([]); // Table rows data will be set based on department

  // Handle popover open
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setSearchQuery("");
  };

  // Handle popover close
  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSearchQuery("");
  };

  // Handle department selection and filter tests
  const handleSelectCentre = (name) => {
    setDepartment(name);
    handlePopoverClose();

    // Set the test data based on the selected department
    const selectedTests = testsByDepartment[name] || [];
    setRows(selectedTests); // Update the rows for the table based on department
  };

  // Handle drag end (reorder rows)
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setRows((prevRows) => {
        const oldIndex = prevRows.findIndex((row) => row.id === active.id);
        const newIndex = prevRows.findIndex((row) => row.id === over.id);
        return arrayMove(prevRows, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">Manage Test Report Ordering</Typography>
        </Box>
        <Divider className="divider" />

        {/* Department dropdown */}
        <Grid container spacing={1} className="pl-1">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <Grid container alignItems="center">
                <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
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
                    onSelect={handleSelectCentre}
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>

        {/* Draggable Table */}
        {department && (
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={rows.map((row) => row.id)} strategy={verticalListSortingStrategy}>
              <Box>
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">SNO</th>
                      <th className="px-4 py-2 text-left">Test Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <SortableRow key={row.id} row={row} index={index} />
                    ))}
                  </tbody>
                </table>
              </Box>
            </SortableContext>
          </DndContext>
        )}
      </Box>
    </div>
  );
};

// Sortable row component
const SortableRow = ({ row, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: row.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <td className="px-4 py-2">{index + 1}</td> {/* Serial Number Column */}
      <td className="px-4 py-2">{row.name}</td> {/* Test Name Column */}
    </tr>
  );
};

export default ManageTestReportOrdering;
