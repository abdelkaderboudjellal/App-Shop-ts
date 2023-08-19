"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";
const darkTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ].join(","),
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffff",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #bdbdbd",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 700,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "black",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          border: "1px solid #bdbdbd",
          borderRadius: 5,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "25px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderRadius: "25px",
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          MuiSliderRail: {
            pending: 0,
          },
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          wrapper: "none!important",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          alignItems: "start!important",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          px: 1,
          py: 0,
          m: 0,
          "&.MuiAlert-outlined": {
            border: "none!important",
          },
          textTransform: "capitalize",
        },
      },
    },
  },
});
export default responsiveFontSizes(darkTheme);
