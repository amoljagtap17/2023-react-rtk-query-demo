import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 15,
    htmlFontSize: 16,
    fontWeightRegular: 400,
  },
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
        size: "large",
      },
      styleOverrides: {
        contained: {
          borderRadius: 0,
          minWidth: "125px",
        },
      },
    },
  },
});
