import React from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'

const ReportingHelpModal = ({modalOpen,
    handleCloseModal,
    handleSaveMasterName,
    isEdit,
    newMasterName,
    setNewMasterName,}) => {
  return (
    <Modal open={modalOpen} onClose={handleCloseModal}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" mb={2}>
        {isEdit  ? "Edit Help" : "Add New Help"}
      </Typography>
      <TextField
        fullWidth
        label="Master Name"
        value={newMasterName}
        onChange={(e) => setNewMasterName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleSaveMasterName}
        fullWidth
        disabled={!newMasterName.trim()}
      >
        Save
      </Button>
    </Box>
  </Modal>
  )
}

export default ReportingHelpModal