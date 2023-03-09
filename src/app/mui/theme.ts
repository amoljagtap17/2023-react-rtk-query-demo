import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: grey[900],
    },
  },
  components: {},
});
