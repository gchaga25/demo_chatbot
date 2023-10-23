import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = ({ rows, handleDelete }) => {
  const columns = [
    { field: "question", headerName: "Question", width: 350 },
    { field: "answer", headerName: "Answer", flex: 1 },
    {
      field: "actions",
      headerName: "Action",
      width: 75,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleDelete(params.row.id)}
          sx={{ color: "red" }}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];
  return (
    <Box>
      {rows && (
        <DataGrid
          columns={columns}
          rows={rows}
          pageSizeOptions={[100]}
          autoHeight
          autoWidth
        />
      )}
    </Box>
  );
};

export default DataTable;
