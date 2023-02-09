import React from 'react';
import Dashboard from '../containers/Dashboard';
import { Link, redirect, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      light: '#CCE1EB',
      main: '#71ABC5',
      dark: '#0F1031',
      contrastText: '#fff',
    },
    secondary: {
      light: '#dbffff',
      main: '#a7ffeb',
      dark: '#75ccb9',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


function App() {
  return (
  <ThemeProvider theme={theme}>
      <Dashboard/>
  </ThemeProvider>);
}

export default App;