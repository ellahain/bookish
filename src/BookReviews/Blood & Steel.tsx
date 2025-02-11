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

function Blood() {
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
    src="https://m.media-amazon.com/images/I/91+O6MTeBkL._UF1000,1000_QL80_.jpg" 
    alt="Logo" 
    style={{ width: "150px", height: "auto", marginBottom: "16px" }} 
  />
  
  {/* Title and Author */}
  <h2 style={{ margin: "8px 0" }}>Blood & Steel</h2> {/* Title */}
  <h3 style={{ margin: "4px 0", fontWeight: "normal" }}>By Helen Scheuerer</h3> {/* Author */}
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
      This book was everything and more. I have been looking for a new fantasy series to get into as I'm diving into finals week and this was the perfect choice. Not a lot of books recently have kept me captivated like <i>Blood & Steel</i> did and I am so happy I picked this up on a whim!
    </p>
    <b><u>Althea Zoltaire</u></b> - loved this girl with all my heart. she truly was an amazing fmc. i will not lie she did kind of give off the "not like other girls" vibe at times with how insistent she was about not wanting to be an alchemist, but i digress. she was still a really great character and it was nice that we got to see her develop throughout this first book
    <br></br>
    <b><u>Wilder Hawthorne</u></b> - GUYS i hated this man at first but he really grew on me throughout the book. like i genuinely did not think i was going to end up liking him with how much i did <i>not</i> like him at the beginning but i was pleasantly surprised
    <br></br>
    <b><u>Elwren Zoltaire</u></b> - i realllly wish we got to see more wren in this book. i'm hoping she will get her own chapters in the future books because i would love to know what's going on in that beautiful brain of hers. like the teapot idea which i've seen before i absolutely LOVED seeing her making
    <br></br>
    <b><u>Kipp & Cal</u></b> - i will protect these two with everything i have. seriously. kipp especially. these two were actually what made me so invested in this book I think and if they die i will cry
    <br></br>
    <b>the plot</b> - althea "thea" is an alchemist at a guild for warriors. it is her dream to become a Legend of Thezmarr, but due to a prophecy women are not allowed to wield blades so she must train and hide in secret. everything changes when she finally gets her chance to prove herself and she will do anything to become one of the legendary warswords. enter Wilder Hawthorne, youngest warsword in history. grumpy, broody, and very much aggravated by thea's prescence. throughout the book they must go through their own journeys of self-development while also continuously tangling with each other. story includes warriors, magic and kingdoms!!! and MAPS!!!!
    <br></br><br></br>
    i can't wait to read the next one!
  </Box>
</DemoPaper>

    </>
  );
}

export default Blood;
