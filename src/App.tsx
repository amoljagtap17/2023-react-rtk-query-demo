import "@fontsource/montserrat";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "app/mui";
import { store } from "app/store";
import { router } from "components/routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}
