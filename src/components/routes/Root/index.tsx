import { Box, Container } from "@mui/material";
import { Footer, Navbar } from "components/sections";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
}
