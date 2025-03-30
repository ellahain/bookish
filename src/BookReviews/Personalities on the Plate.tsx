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

function POTP() {
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
    src="https://tmm.chicagodistributioncenter.com/IsbnImages/9780226195186.jpg" 
    alt="Logo" 
    style={{ width: "150px", height: "auto", marginBottom: "16px" }} 
  />
  
  {/* Title and Author */}
  <h2 style={{ margin: "8px 0" }}>Personalities on the Plate: The Lives and Minds of Animals We Eat: </h2> {/* Title */}
  <h3 style={{ margin: "4px 0", fontWeight: "normal" }}>By Barbara J. King</h3> {/* Author */}
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
    My cousins own a dairy farm, so I was thinking a lot about them as I was reading Personalities on the Plate, especially the cows chapter. Being a dairy farm, they mostly raise their cows for milk. I also think it’s interesting because my cousins will actually show their calves at fairs (kind of like showing dogs, but with cows). They get all dressed up and walk their cows around and it's a big thing in their town. I was reflecting on this practice as I was reading about how some cows are treated so poorly and are forced to essentially just stand still until the farmers are ready to milk them and although I’m not really involved with their farm or their showings, I think it’s nice that they show them off and form close relationships with them through this event. It made me happy to know that cows appreciate it when we recognize them, so I hope that the cows on my cousin’s farm are happier than some of those who are stuck in crowded farms. Something else that really resonated with me was when they talked about how farms are being hurt by the economy, especially local, family farms. My family has definitely noticed how difficult it is to keep their farm running, which I think is something people need to be more aware of because not many people think about where their milk is coming from when they buy it in cartons at the grocery store. Since I know them, I know how much work goes into caring for the cows and producing milk, so if these kinds of family farms are forced out of business, soon all that will be left are the factory farms that greatly mistreat their cows.
    </p>
   
  </Box>
</DemoPaper>

    </>
  );
}

export default POTP;
