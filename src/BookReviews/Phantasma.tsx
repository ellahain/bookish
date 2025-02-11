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

function Phantasma() {
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
    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710664241i/204593914.jpg" 
    alt="Logo" 
    style={{ width: "150px", height: "auto", marginBottom: "16px" }} 
  />
  
  {/* Title and Author */}
  <h2 style={{ margin: "8px 0" }}>Phantasma</h2> {/* Title */}
  <h3 style={{ margin: "4px 0", fontWeight: "normal" }}>By Kaylie Smith</h3> {/* Author */}
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
    BLACKWELL AND OPHELIA MY LOVES. I kind of predicted the ending but doesn’t matter because I ate this up
    </p>
    
    
  </Box>
</DemoPaper>

    </>
  );
}

export default Phantasma;
