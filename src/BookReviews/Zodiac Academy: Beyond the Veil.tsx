//import React from "react";
import { Box } from "@mui/material";
//import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";

//import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "80vw",
  height: "75 vh",
  marginTop: "100px",
  marginBottom: "100px",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'left',
}));

function ZA85() {
  return (
    <>
    <Navbar/>
    <DemoPaper square>
  {/* Centered Image */}
  <Box 
  sx={{ 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center" // Space below the whole block
  }}
>
  {/* Image */}
  <img 
    src="https://m.media-amazon.com/images/I/811Hw216KZL._UF1000,1000_QL80_.jpg" 
    alt="Logo" 
    style={{ width: "150px", height: "auto", marginBottom: "16px" }} 
  />
  
  {/* Title and Author */}
  <h2 style={{ margin: "8px 0" }}>Zodiac Academy 8.5: Beyond the Veil</h2> {/* Title */}
  <h3 style={{ margin: "4px 0", fontWeight: "normal" }}>By Caroline Peckham and Susanne Valenti</h3> {/* Author */}
</Box>
  
  {/* Separator */}
  <Box 
    sx={{ 
      width: "100%", 
      borderBottom: "2px solid #d2928a", // Add a stylish separator
      marginBottom: "16px" // Space below the separator
    }}
  />

  {/* Left-aligned Text */}
  <Box 
    sx={{ 
      textAlign: "left", 
      padding: "8px", // Optional padding for better readability
      fontSize: "18px", // Larger text size
      lineHeight: "1.6", // Improve readability
    }}
  >
     <p>
    I didn't hate this as much as others seemed to but to be fair, I had books 8, 8.5 and 9 in my hands so there was no waiting involved. if i hadn't had book 9 ready to go i would have been pissed as hell that I was basically just rereading book 8
    </p>
  </Box>
</DemoPaper>

    </>
  );
}

export default ZA85;
