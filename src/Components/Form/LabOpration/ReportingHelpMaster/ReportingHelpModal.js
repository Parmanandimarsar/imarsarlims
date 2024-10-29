import React from "react";
import {
  Box,
  Button,
  FormLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";

const ReportingHelpModal = ({
  modalOpen,
  handleCloseModal,
  handleSaveMasterName,
  isEdit,
  newMasterName,
  setNewMasterName,
}) => {
  return (
    <Modal open={modalOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6"  sx={{ fontWeight: "bold" }}>
          {isEdit ? "Edit Help" : "Add New Help"}
        </Typography>
        <div className=" absolute  right-2 top-2  " onClick={handleCloseModal}>
        <RxCross2 className="text-gray-500 text-2xl" />
      </div>
        <FormLabel>Master Name</FormLabel>
        <TextField
          fullWidth
          value={newMasterName}
          onChange={(e) => setNewMasterName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <button
          className="border-none project-thim text-white rounded-md "
          disabled={!newMasterName.trim()}
        >
          Save
        </button>
      </Box>
    </Modal>
  );
};

export default ReportingHelpModal;
