import { useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook

function Navbar() {
  const [value, setValue] = useState(0); // State to manage active tab
  const location = useLocation(); // Hook to get the current route

  useEffect(() => {
    // Set the active tab based on the current path
    if (location.pathname === "/") {
      setValue(0); // Home tab
    } else if (location.pathname === "/portfolio") {
      setValue(1); // Portfolio tab
    } else if (location.pathname === "/about") {
      setValue(2); // About tab
    }
  }, [location]); // Update when location changes

  return (
    <AppBar position="fixed" sx={{ top: 0, bgcolor: "black" }}>
      <Toolbar>
        <Tabs value={value} textColor="inherit" indicatorColor="secondary">
          <Tab
            label="Home"
            component={Link}
            to="/" // Link to the home page
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              "&:focus": { backgroundColor: "transparent" },
              "&:focus-visible": { outline: "none" },
            }}
          />
          <Tab
            label="Portfolio"
            component={Link}
            to="/portfolio" // Link to the portfolio page
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              "&:focus": { backgroundColor: "transparent" },
              "&:focus-visible": { outline: "none" },
            }}
          />
          <Tab
            label="About"
            component={Link}
            to="/about" // Link to the about page
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              "&:focus": { backgroundColor: "transparent" },
              "&:focus-visible": { outline: "none" },
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
