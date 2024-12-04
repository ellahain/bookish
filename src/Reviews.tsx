//import React from "react";
//import { Box, Typography } from "@mui/material";
//import Marquee from "react-fast-marquee";
import Review from "./components/reviewpage";

function Home() {
  return (
    <>
      <Review/>
      {/*<Box
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
      </Box>*/}
    </>
  );
}

export default Home;
