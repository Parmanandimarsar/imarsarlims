import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  oddRow: {
    backgroundColor: "#f2f2f2", // Light gray for odd rows
  },
  evenRow: {
    backgroundColor: "#e0f7fa", // Light cyan for even rows
  },
});
const DataGridTable = ({ rows, columns}) => {
  const classes = useStyles();
  return (
    <>
      <DataGrid
        rows={rows} // Filtered rows
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        columnHeaderHeight={20}
       
        rowHeight={25}
        headerHeight={20}
        hideFooterSelectedRowCount
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0
            ? classes.evenRow
            : classes.oddRow
        }
      />
    </>
  );
};

export default DataGridTable;
