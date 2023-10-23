import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Link } from "react-router-dom";

const SideMenu = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawer}
      anchor="left"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <SmartToyIcon />
            </ListItemIcon>
            <ListItemText primary="Chatbot" />
          </ListItem>
          <ListItem button component={Link} to="/questions">
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="Questions" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
