import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export function Footer() {
  return (
    <AppBar
      component="footer"
      position="static"
      sx={{ bottom: 0 }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="body1">
            &copy; {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
