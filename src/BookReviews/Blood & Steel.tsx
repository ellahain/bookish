//import React from "react";
import { Box } from "@mui/material";
//import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";



function Blood() {
  return (
    <>
    <Navbar/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          //paddingTop: "64px", // To avoid overlap with fixed navbar
        }}
      >
        <h1 style={{color: "white"}}>Review Coming Soon!</h1>
      </Box>
    </>
  );
}

export default Blood;
