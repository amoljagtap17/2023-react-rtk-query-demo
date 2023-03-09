import "@fontsource/montserrat";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "app/mui";
import { Container, Typography } from "@mui/material";
import { Navbar } from "components/sections";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />

      <Container maxWidth="lg">
        <Typography variant="h1">Lorem ipsum dolor sit amet.</Typography>
      </Container>
    </ThemeProvider>
  );
}
