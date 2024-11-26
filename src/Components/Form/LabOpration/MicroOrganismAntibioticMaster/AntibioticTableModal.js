

import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import DataGridTable from "../../../ConstantComponents/DataGridTable";
import { AntibioticTableColumns } from "../../../TableField/TablefieldsColumns";

const AntibioticTableModal = ({ onSave }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  // Table data
  const rows = [
    { id: 1, sn: 1, antibiotic: "Penicillin", addedBy: "Admin", addedOn: "2024-11-12" },
    { id: 2, sn: 2, antibiotic: "Amoxicillin", addedBy: "Admin", addedOn: "2024-11-11" },
    { id: 3, sn: 3, antibiotic: "Ciprofloxacin", addedBy: "User1", addedOn: "2024-11-10" },
  ];

 

  // Handle selection change
  const handleSelectionChange = (newSelection) => {
    console.log("newSelection",newSelection);
    
    setSelectedRows(newSelection);
  };

  return (
    <Box>
      {/* DataGrid */}
      <DataGridTable
        rows={rows}
        columns={AntibioticTableColumns}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionChange}
        autoHeight
      />

      {/* Save Button */}
      <Box mt={2}>
        <Button
          variant="contained"
          onClick={() => onSave(selectedRows)}
          disabled={selectedRows.length === 0}
        >
          Save Selected
        </Button>
      </Box>
    </Box>
  );
};

export default AntibioticTableModal;
