import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const MiscChargeModal = ({ openMicModal, handelModelOpen }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    sgst: "",
    cess: "",
    document1: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.files[0] });
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <BootstrapDialog
      onClose={handelModelOpen}
      aria-labelledby="customized-dialog-title"
      open={openMicModal}
    >
      <DialogTitle id="customized-dialog-title" className="project-thim text-white" >
        Misc Charge
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handelModelOpen}
        sx={(theme) => ({
          position: "absolute",
          right: 5,
          top: -3,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{borderColor:"#4ad3e970"}}>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            aria-label="charge-options"
            value={selectedOption}
            onChange={handleRadioChange}
           
          >
            <Grid container spacing={2} alignItems="center">
              {/* First Option: SCalculate% */}
              <Grid item container alignItems="center">
                <Grid item xs={4}>
                  <FormControlLabel
                    value="scalculate"
                    control={<Radio />}
                    label="SCalculate%"
                    sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 15,
                        },
                      }}
                  />
                </Grid>

                <Grid item xs={2} sm={4}>
                  <FormControl fullWidth>
                    <FormLabel>SGST%</FormLabel>
                    <TextField
                      name="sgst"
                      type="number"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={formData.sgst}
                      onChange={handleInputChange}
                      disabled={selectedOption !== "scalculate"}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={2} sm={4}>
                  <FormControl fullWidth>
                    <FormLabel>Charge Type</FormLabel>
                    <TextField
                      name="chargeType"
                      type="text"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={formData.chargeType}
                      onChange={handleInputChange}
                      disabled={selectedOption !== "scalculate"}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              {/* Second Option: SExclude GST% */}
              <Grid item container alignItems="center">
                <Grid item xs={4}>
                  <FormControlLabel
                    value="sexclude"
                    control={<Radio />}
                    label="SExclude GST%"
                    sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 15,
                        },
                      }}
                  />
                </Grid>

                <Grid item xs={2} sm={4}>
                  <FormControl fullWidth>
                    <FormLabel>Choose File</FormLabel>
                    <input
                      type="file"
                      name="document1"
                      onChange={handleFileChange}
                      disabled={selectedOption !== "sexclude"}
                      style={{
                        padding: "5px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        width: "100%",
                      }}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={2} sm={4}>
                  <FormControl fullWidth>
                    <FormLabel>Load Excel File</FormLabel>
                    <input
                      type="file"
                      name="document2"
                      onChange={handleFileChange}
                      disabled={selectedOption !== "sexclude"}
                      style={{
                        padding: "5px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        width: "100%",
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              {/* Third Option: Multi */}
              <Grid item container alignItems="center">
                <Grid item xs={4}>
                  <FormControlLabel
                    value="multi"
                    control={<Radio />}
                    label="Multi"
                    sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 15,
                        },
                      }}
                  />
                </Grid>

                <Grid item xs={2} sm={4}>
                  <FormControl fullWidth>
                    <FormLabel>Choose File</FormLabel>
                    <input
                      type="file"
                      name="document1"
                      onChange={handleFileChange}
                      disabled={selectedOption !== "multi"}
                      style={{
                        padding: "5px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        width: "100%",
                      }}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={2} sm={4}>
                  <FormControl fullWidth>
                    <FormLabel>Load Excel File</FormLabel>
                    <input
                      type="file"
                      name="document2"
                      onChange={handleFileChange}
                      disabled={selectedOption !== "multi"}
                      style={{
                        padding: "5px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        width: "100%",
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handelModelOpen}>
          Ok
        </Button>
        <Button autoFocus onClick={handelModelOpen}>
          Clear
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default MiscChargeModal;
