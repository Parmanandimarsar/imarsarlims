import React from "react";
import {
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Box,
  FormLabel,
  Divider,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import { AccountBankBookTable } from "../../TableField/TablefieldsColumns";
const BankBook = () => {
  // Validation schema
  const paginationModel = { page: 0, pageSize: 5 };

  const rows = [
    {
      id: 1,
      igst: "Snow",
      cgst: "Jon",
      sgst: 35,
      cess: "434",
      regd: "45",
      insur: "gfg",
      hpa: "564",
      agree: "yes",
      other: "oyther",
      discount: "5%",
    },
    {
      id: 1,
      igst: "Snow",
      cgst: "Jon",
      sgst: 35,
      cess: "434",
      regd: "45",
      insur: "gfg",
      hpa: "564",
      agree: "yes",
      other: "oyther",
      discount: "5%",
    },
    {
      id: 1,
      igst: "Snow",
      cgst: "Jon",
      sgst: 35,
      cess: "434",
      regd: "45",
      insur: "gfg",
      hpa: "564",
      agree: "yes",
      other: "oyther",
      discount: "5%",
    },
    {
      id: 1,
      igst: "Snow",
      cgst: "Jon",
      sgst: 35,
      cess: "434",
      regd: "45",
      insur: "gfg",
      hpa: "564",
      agree: "yes",
      other: "oyther",
      discount: "5%",
    },
    {
      id: 1,
      igst: "Snow",
      cgst: "Jon",
      sgst: 35,
      cess: "434",
      regd: "45",
      insur: "gfg",
      hpa: "564",
      agree: "yes",
      other: "oyther",
      discount: "5%",
    },
    {
      id: 1,
      igst: "Snow",
      cgst: "Jon",
      sgst: 35,
      cess: "434",
      regd: "45",
      insur: "gfg",
      hpa: "564",
      agree: "yes",
      other: "oyther",
      discount: "5%",
    },
  ];

  return (
    <div className=" mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Bank Book</Typography>
        </Box>
        <Divider className="divider" />
        <div className=" pl-1 pr-1">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>Branch</FormLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <Select
                      name="branch"
                      // value={formValues.branch}
                      // onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value="">Branch Select</MenuItem>
                      <MenuItem value="rv1">Branch 1</MenuItem>
                      <MenuItem value="rv2">Branch 2</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>Location</FormLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <Select
                      name="branch"
                      // value={formValues.branch}
                      // onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value="">Location Select</MenuItem>
                      <MenuItem value="rv1">Location 1</MenuItem>
                      <MenuItem value="rv2">Location 2</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>From</FormLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      name="date"
                      type="date"
                      fullWidth
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>To</FormLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      name="date"
                      type="date"
                      fullWidth
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>Bal Type </FormLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <Select
                      name="branch"
                      // value={formValues.branch}
                      // onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value="">Bal Type Select</MenuItem>
                      <MenuItem value="rv1">Bal Type 1</MenuItem>
                      <MenuItem value="rv2">Bal Type 2</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={12}>
                    <button className="border-2 rounded-lg  px-5 bg-green-600 text-white ">
                      show
                    </button>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className="border border-[#338691] mt-2 rounded-lg ml-1 mr-1">
          <Paper
            sx={{
              minHeight: 100,
              width: "100%",
              padding: "3px",
              maxHeight: 400,
            }}
          >
            <DataGrid
              className="PaymentVoucherTable"
              rows={rows}
              columns={AccountBankBookTable}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              rowHeight={30}
              headerHeight={30}
              columnHeaderHeight={20}
              checkboxSelection={false}
              hideFooterSelectedRowCount
            />
          </Paper>
        </div>
      </Box>
    </div>
  );
};

export default BankBook;
