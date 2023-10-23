import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleDrawer }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", height: "60px" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
          <Typography sx={{ml:2}}>Chatbot React and Node</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
