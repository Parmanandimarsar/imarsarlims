import React from "react";
import {
  Button,
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
import { AccountCashBooksTable } from "../../TableField/TablefieldsColumns";
const CashBooks = () => {
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
          <Typography>Cash Books</Typography>
        </Box>
        <Divider className="divider" />
        <div className="flex pl-1 pr-1">
          <Grid container spacing={2}>
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
                    <FormLabel>Opening</FormLabel>
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
                      <MenuItem value="">Opening</MenuItem>
                      <MenuItem value="rv1">Opening 1</MenuItem>
                      <MenuItem value="rv2">Opening 2</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>Bal Type</FormLabel>
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
                      <MenuItem value="">Bal Type</MenuItem>
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
                    <button className="border-2 rounded-lg pl-1 pr-1 bg-green-600 text-white ">
                      Export To Excel
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
              columns={AccountCashBooksTable}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              rowHeight={30}
              headerHeight={30}
              columnHeaderHeight={20}
            />
          </Paper>
        </div>

        <div className="mt-6  flex items-end gap-4 ml-0 justify-end border rounded-md p-2 border-[#1A9A87]">
          <Button
            size="small"
            type="button"
            color="error"
            variant="outlined"
            className="p-2"
          >
            Print
          </Button>
          <Button
            size="small"
            type="button"
            color="error"
            variant="outlined"
            className="p-2"
          >
            New
          </Button>

          <Button
            size="small"
            type="submit"
            color="primary"
            variant="contained"
            className="p-2"
          >
            Save
          </Button>

          <Button
            size="small"
            type="button"
            color="error"
            variant="outlined"
            className="p-2"
          >
            Delete
          </Button>

          <Button
            size="small"
            type="reset"
            color="default"
            variant="outlined"
            className="p-2"
          >
            Refresh
          </Button>

          <Button
            size="small"
            color="default"
            variant="outlined"
            className="p-2"
          >
            Exit
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default CashBooks;
