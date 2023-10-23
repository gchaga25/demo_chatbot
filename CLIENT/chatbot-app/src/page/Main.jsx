import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import { Box } from "@mui/material";

const Main = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <nav>
        <Navbar toggleDrawer={toggleDrawer} />
      </nav>
      <SideMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <main>
        {children}
      </main>
    </Box>
  );
};

export default Main;
