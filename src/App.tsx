//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Home"; // Import Home component
import Portfolio from "./Portfolio"; // Import Portfolio component
import About from "./About";
import Navbar from "./components/Navbar"; // If you have a separate Navbar component

function App() {
  return (
    <Router>
      {/* Ensure the Router wraps the app */}
      <Navbar /> {/* Your navigation bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          minHeight: "100vh", // Ensure it takes up the full viewport height
          width: "100%", // Ensure it takes up full width of the viewport
          textAlign: "center", // Center the text
          paddingTop: "64px", // Offset content by the navbar height
          flexGrow: 1, // Allow content to grow and fill available space
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} /> {/* Portfolio route */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
