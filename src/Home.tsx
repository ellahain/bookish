//import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <>
      <Marquee
        speed={100}
        gradient={false}
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "62px", // Adding margin to push the Marquee below the navbar
          width: "100vw", // Make the marquee take up full width
          position: "fixed", // Fix the marquee at the top of the screen
          top: "0", // Align it at the top of the screen
          left: "0",
          zIndex: 1000, // Ensure it stays above other content
        }}
      >
        <span style={{ marginLeft: "30px", marginRight: "30px" }}> ⭐</span>
        <span style={{ marginRight: "30px" }}> Leader</span>
        <span style={{ marginRight: "30px" }}>Student</span> Computer Scientist{" "}
        <span style={{ marginLeft: "30px" }}>Designer</span>
        <span style={{ marginLeft: "30px", marginRight: "30px" }}> ⭐</span>
        <span style={{ marginRight: "30px" }}>Leader</span>
        <span style={{ marginRight: "30px" }}>Student</span> Computer Scientist{" "}
        <span style={{ marginLeft: "30px" }}>Designer</span>
        <span style={{ marginLeft: "30px", marginRight: "30px" }}> ⭐</span>
        <span style={{ marginRight: "30px" }}>Leader</span>
        <span style={{ marginRight: "30px" }}>Student</span> Computer Scientist{" "}
        <span style={{ marginLeft: "30px" }}>Designer</span>
      </Marquee>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingTop: "64px", // To avoid overlap with fixed navbar
        }}
      >
        <Typography variant="h4">Welcome to My Website</Typography>
        <Typography variant="body1">
          This is where your main content goes.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
