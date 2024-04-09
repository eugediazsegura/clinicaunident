import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const basicTheme = createTheme({
  palette: {
    primary: {
      main: "#01548B",
      contrastText: "#fff1e6",
    },
    secondary: {
      main: "#FCA721",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "0.6rem",
        },

      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Fredoka",
          fontSize: "1.1rem",
          color: "var(--primary-color)",
          opacity: "1.0",
          "&.Mui-focused": {
            color: "primary",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          '&:hover': {
            backgroundColor: "white",
        },
        "&.Mui-focused": {
          backgroundColor: "white", 
        },
      },
        underline: {
          "&:before": {
            borderBottom: "none",
          },
          "&:hover": {
            borderBottom: "none",
            
          },
          "&:hover:before": {
            borderBottom: "none !important",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&[type="number"]': {
            "-moz-appearance": "textfield",
            "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
              "-webkit-appearance": "none",
              margin: 0,
            },
          },
          "&:hover, &:focus": {
            '&[type="number"]::-webkit-outer-spin-button, &[type="number"]::-webkit-inner-spin-button':
              {
                "-webkit-appearance": "none",
                margin: 0,
              },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
        borderStyle: "none",
        backgroundColor: "white",
        },
      },
    },
  },
});
