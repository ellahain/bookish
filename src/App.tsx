//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Home"; // Import Home component
import Navbar from "./components/Navbar"; // If you have a separate Navbar component
import Reviews from "./Reviews";
import BookReviewPage from "./BookReviewPage";
import Careers from "./Careers";

function App() {
  return (
    <Router>
      {/* Ensure the Router wraps the app */}
      <Navbar/>  {/*Your navigation bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          height: "100%", // Ensure it takes up the full viewport height
          width: "100%", // Ensure it takes up full width of the viewport
          textAlign: "center", // Center the text
          paddingTop: "64px", // Offset content by the navbar height
          //flexGrow: 1, // Allow content to grow and fill available space
        }}
      >
        <Routes>
          <Route path="/bookish/" element={<Home />} /> {/* Home route */}
          <Route path="/bookish/reviews" element={<Reviews />} />
          <Route path="/bookish/careers" element={<Careers />} />
          <Route path="/bookish/reviews/:title" element={<BookReviewPage />} />
          {/*<Route path="/about" element={<About />} /> {/* Portfolio route */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
