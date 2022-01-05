import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../index.css'; 
import {createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Paper } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'If you have the ref, you\'re a bro.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



const rows = [
  { id: 1, lastName: 'Joestar', firstName: 'Jonathan', age: 18 },
  { id: 2, lastName: 'Joestar', firstName: 'Joseph', age: 20 },
  { id: 3, lastName: 'Kujo', firstName: 'Jotaro', age: 16 },
  { id: 4, lastName: 'Higashikata', firstName: 'Josuke', age: 16 },
  { id: 5, lastName: 'Giovanna', firstName: 'Giorno', age: 15 },
  { id: 6, lastName: 'Kujo', firstName: 'Joycelyne', age: 17 },
  { id: 7, lastName: 'Joestar', firstName: 'Johnny', age: 24 },
  { id: 8, lastName: 'Higashikata', firstName: 'Josuke', age: 19 },
  { id: 9, lastName: 'Joestar', firstName: '???' , age: null },
];

export default function Grid() {
  return (
      <Paper>
        <div className ='grid' theme={darkTheme}>
          <DataGrid
            
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </Paper>
  );
}