import { createTheme } from '@mui/material/styles';
// import { ThemeProvider } from '@emotion/react';
// import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      light: "grey",
    },
    secondary: {
      main: '#3f51b5',
    },
      tryColor: { 
     main: "#009688"
    }
  }
});

export default theme;