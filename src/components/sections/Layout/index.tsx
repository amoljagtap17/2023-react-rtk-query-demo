import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface iLayoutProps {
  children: ReactNode;
}

export function Layout({ children }: iLayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
}
