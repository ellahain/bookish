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

function ZA9() {
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
    src="https://m.media-amazon.com/images/I/91cRvRTmW0L._UF1000,1000_QL80_.jpg" 
    alt="Logo" 
    style={{ width: "150px", height: "auto", marginBottom: "16px" }} 
  />
  
  {/* Title and Author */}
  <h2 style={{ margin: "8px 0" }}>Zodiac Academy 9: Restless Stars</h2> {/* Title */}
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
   
    <p>Ok, so I actually really liked this one! I was kind of skeptical after reading book 8 and I was so pissed off with Tory that I genuinely considered not reading this one but I'm glad I did because I could not put this down!!

Starting off with BlueLance!!!!!!!! (Yes, they require that many exclamation points because I love them so much). They were probably the only reason I kept reading because I ate up every crumb of them.

SethCaleb - they FINALLY got their stuff together and communicated and it was amazing truly. their children at the end were adorable.

ToryDarius - *sigh* you know. i didn't hate them. i didn't love them. the amount of times i had to read about Darius' "seed" though has to be a crime. Like my god we get it you're horny. but all's well that ended well i guess. i feel like they kind of got off light in terms of punishment for literally bringing him back from the dead (???) but whatever. again i say all's well that end's well.

MaxGeraldine - AUGUSTALINE. that's all i have to say

all in all a really great save after book 8 and i need a book about Tharix and then all of the main mc's children down the line</p>
    
  </Box>
</DemoPaper>

    </>
  );
}

export default ZA9;
