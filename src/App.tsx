import "@fontsource/montserrat";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "app/mui";
import { Typography } from "@mui/material";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Typography variant="h1">Lorem ipsum dolor sit amet.</Typography>
    </ThemeProvider>
  );
}
