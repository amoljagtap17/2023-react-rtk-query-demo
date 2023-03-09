import "@fontsource/montserrat";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "app/mui";
import { router } from "components/routes";
import { RouterProvider } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
