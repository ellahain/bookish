//import React from "react";
//import { Box } from "@mui/material";
//import Marquee from "react-fast-marquee";
import logo from "/logo3.png";
import ProgressBar from "./components/ProgressBar";


function Home() {
  return (
    <>
      <div>
      <img src={logo} alt="Logo" style={{ width: "50vw", height: "auto" }} />
     </div>
     <div><ProgressBar/></div>
      {/*<Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          //paddingTop: "64px", // To avoid overlap with fixed navbar
        }}
      >
      </Box>*/}
    </>
  );
}

export default Home;
