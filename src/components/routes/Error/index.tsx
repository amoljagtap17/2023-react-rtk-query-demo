import { Box, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Box textAlign="center">
      <Typography variant="h1" gutterBottom>
        Four Oh Four!
      </Typography>
      <Typography variant="h3" gutterBottom>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="h5" gutterBottom>
        We can't seem to find the page you're looking for.
      </Typography>
    </Box>
  );
}
