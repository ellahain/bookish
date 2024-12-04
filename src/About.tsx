//import React from "react";
import Timeline from "./components/Timeline";
import { Box, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function About() {
  
  return (
    <>
    <Box sx={{
    display: "flex",
    background: "grey",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh", // Center content vertically
    width: "100vw", // Full width of the screen
    textAlign: "center",
    padding: "50px 0 0px 20px", // Optional padding for better layout on smaller screens
    boxShadow: "inset 0px 0px 15px rgba(0, 0, 0, 0.5)", // Inset shadow for the recessed look
    borderRadius: "10px", // Optional: adds rounded corners for a softer inset effect
}}>
  <Avatar alt="Ella Hain" src="/Headshot.JPG" sx={{ width: 250, height: 250 }}/>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Center content vertically
        textAlign: "center",
        padding: "50px 0 10px 20px", // Optional padding for better layout on smaller screens
        
      }}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        I am a passionate developer with experience in building web
        applications.
      </Typography>
      <Timeline />
    </Box>
    </>
  );
}

export default About;
