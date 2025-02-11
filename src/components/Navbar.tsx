import { useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook

function Navbar() {
  const location = useLocation(); // Hook to get the current route
  const [value, setValue] = useState<number | null>(null); // Explicitly type as number | null

  useEffect(() => {
    const currentPath = location.pathname;

     // Determine the correct tab index based on the current path
     if (currentPath === "/bookish/") {
      setValue(0); // Home tab
    } else if (currentPath === "/bookish/reviews") {
      setValue(1); // Reviews tab
    } else if (currentPath.includes("/review")) {
      setValue(1); // Reviews tab for individual reviews
    } else if (currentPath === "/bookish/careers") {
      setValue(2); // Careers tab
    } else {
      setValue(null); // Handle undefined paths if necessary
    }
  }, [location]); // Run effect only when location changes

  // If the value is not set yet (i.e., initial render), don't render the Tabs yet
  if (value === null) {
    return null; // Or a loading state if needed
  }

  return (
    <AppBar position="fixed" sx={{ top: 0, bgcolor: "black" }}>
      <Toolbar>
        <Tabs
          value={value}
          onChange={(_e, newValue) => setValue(newValue)} // Allow tab switching by click
          textColor="inherit"
          sx={{ "& .MuiTabs-indicator": { backgroundColor: "#d2928a" } }}
        >
          <Tab
            label="Home"
            component={Link}
            to="/bookish/" // Link to the home page
            sx={{
              color: "white", // Normal text color
              "&:hover": {
                color: "#d2928a", // Hover text color
              },
            }}
          />
          <Tab
            label="Reviews"
            component={Link}
            to="/bookish/reviews" // Link to the reviews page
            sx={{
              color: "white", // Normal text color
              "&:hover": {
                color: "#d2928a", // Hover text color
              },
            }}
          />
          {/* <Tab
            label="Careers"
            component={Link}
            to="/bookish/careers" // Link to the reviews page
            sx={{
              color: "white", // Normal text color
              "&:hover": {
                color: "#d2928a", // Hover text color
              },
            }}
          /> */}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
