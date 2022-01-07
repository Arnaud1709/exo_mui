import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../index.css'; 
import {createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Paper, Switch } from '@mui/material';



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
  {
    field: 'desceased',
    headerName: 'Desceased ?',
    width: 120,
    editable: true,
  },
  {
    field: 'ennemy',
    headerName: 'Ennemy',
    width: 160,
    editable: true,
  }
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

const Grid = (props) => {

  return (
    <ThemeProvider theme={props.theme} size={{ width:"70%"}}>
      <Paper>
        <div className ='grid' style={{backgroundColor: '000'}}>
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
    </ThemeProvider>
  );
}

export default Grid