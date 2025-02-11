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

function HalfSoul() {
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
    src="https://m.media-amazon.com/images/I/71wvIY18yEL._AC_UF1000,1000_QL80_.jpg" 
    alt="Logo" 
    style={{ width: "150px", height: "auto", marginBottom: "16px" }} 
  />
  
  {/* Title and Author */}
  <h2 style={{ margin: "8px 0" }}>Half a Soul</h2> {/* Title */}
  <h3 style={{ margin: "4px 0", fontWeight: "normal" }}>By Olivia Atwater</h3> {/* Author */}
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
    this was such a great, cutesy little historical/fantasy/romance perfect for any romantasy lover! i myself enjoy historical fiction so this was an extra special treat for me. i will not give anything away, but i loved Dora and Elias and their relationship throughout the book. i feel like they both developed in ways that you could actually see happening throughout and the plot was really unique in terms of historical regency era romance, so i thoroughly enjoyed this! would 10/10 recommend for anyone looking for a nice palette cleanser between major fantasy series.
    </p>
    
  </Box>
</DemoPaper>

    </>
  );
}

export default HalfSoul;
