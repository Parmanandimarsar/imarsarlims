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
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SideNave from "../../../Pages/MainLayout/SideNav";
import { DataGrid } from "@mui/x-data-grid";
import { MasterLedgerGroupTable } from "../../TableField/TablefieldsColumns";
const LedgerGroup = () => {
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
  ];

  return (
    

      <div className=" mb-[50px] pl-2">
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography
             
            >
              Ledger Group
            </Typography>
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
                      <FormLabel>SubLedgerGroup</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        name="branch"
                        // value={formValues.branch}
                        // onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        size="small"
                      ></TextField>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl fullWidth>
                  <Grid container alignItems="center">
                    <Grid item xs={4}>
                      <FormLabel>MainLedgerG.</FormLabel>
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
                        <MenuItem value="">MainLedgerGroup Select</MenuItem>
                        <MenuItem value="rv1">MainLedgerGroup 1</MenuItem>
                        <MenuItem value="rv2">MainLedgerGroup 2</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl fullWidth>
                  <Grid container alignItems="center">
                    <Grid item xs={4}>
                      <FormLabel> Ledger Search</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <Select
                        name="Search"
                        // value={formValues.branch}
                        // onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        size="small"
                      >
                        <MenuItem value=""> Ledger Search Select</MenuItem>
                        <MenuItem value="rv1">Ledger 1</MenuItem>
                        <MenuItem value="rv2">Ledger 2</MenuItem>
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
                        Search
                      </button>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className="border border-[#338691] mt-2 rounded-lg ml-1 mr-1  ">
            
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
                columns={MasterLedgerGroupTable}
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
          <div className="mt-6  flex items-end gap-4 ml-0 justify-end border rounded-md p-2 border-[#1A9A87]">
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

export default LedgerGroup;
