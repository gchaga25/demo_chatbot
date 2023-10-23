import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1E'
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
          color: 'white'
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
        color: 'info'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
        }
      }
    },   
  }
});