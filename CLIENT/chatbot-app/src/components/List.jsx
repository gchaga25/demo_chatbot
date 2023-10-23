import React from "react";
import { Avatar, Box, List, ListItem } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const styleMessage = {
  p: 1,
  backgroundColor: "#ededed",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderBottomLeftRadius: "10px",
  color: "black",
};

const styleMessageChatbot = {
  p: 1,
  backgroundColor: "#6E48AA",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  color: "white",
};

const ListComp = ({ messages }) => {
  return (
    <List>
      {messages &&
        messages.map((message, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: message.user === "user" ? "right" : "left",
              wordWrap: "break-word",
            }}
          >
            {message.user === "chatbot" && (
              <Avatar sx={{ mr: 1 }}>
                <SmartToyIcon />
              </Avatar>
            )}
            <Box
              sx={message.user === "user" ? styleMessage : styleMessageChatbot}
            >
              {message.text}
            </Box>
            {message.user === "user" && (
              <Avatar src="/broken-image.jpg" sx={{ ml: 1 }} />
            )}
          </ListItem>
        ))}
    </List>
  );
};

export default ListComp;
