import React from "react";
import {
  Box,
  Typography,
  Divider,
  Checkbox,
  Button,
  Modal,
} from "@mui/material";

const ModalComponent = ({
  open,
  onClose,
  onSave,
  items,
  checkedItems,
  handleCheckboxChange,
  title = "title",
  children
}) => {
  return (
    <Box>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            minWidth: 800,
            borderRadius: 2,
          }}
        >
          <Box
            className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
            style={{ backgroundColor: "#1976d2" }}
          >
            <Typography style={{ color: "#fff" }}>{title}</Typography>
          </Box>
          <Divider className="divider"/>
          <Box pl={1} pr={1}>{children}</Box>
          
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalComponent;
