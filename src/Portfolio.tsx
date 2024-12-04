//import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Ensures the page content is vertically centered
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        My Portfolio
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Here is a showcase of my work and projects.
      </Typography>

      <Button
        component={Link}
        to="/" // Navigate back to the homepage
        variant="contained"
        color="secondary"
        sx={{ mt: 3 }}
      >
        Back to Home
      </Button>
    </Box>
  );
}

export default Portfolio;
