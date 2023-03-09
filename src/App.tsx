import "@fontsource/montserrat";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "app/mui";
import { Layout } from "components/sections";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Layout>
        <Typography variant="h1">Lorem ipsum dolor sit amet.</Typography>
      </Layout>
    </ThemeProvider>
  );
}
