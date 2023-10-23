import React from "react";
import ListComp from "./List";
import { Typography, Paper, Grid, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Chatbot = ({
  input,
  messages,
  chatContainerRef,
  handleInputChange,
  handleSendMessage,
}) => {
  return (
    <>
      <Typography
        variant="h1"
        component={"h1"}
        align="center"
        sx={{
          marginTop: "30px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          backgroundColor: "#6E48AA",
        }}
      >
        Chatbot
      </Typography>
      <Paper
        elevation={3}
        sx={{
          height: "500px",
          overflowY: "scroll",
          backgroundColor: "#f7fcff",
        }}
        ref={chatContainerRef}
      >
        <ListComp messages={messages} />
      </Paper>
      <Grid
        container
        sx={{
          marginTop: "7px",
          backgroundColor: "#f7fcff",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex" }}>
          <TextField
            label="Escribe un mensaje"
            variant="standard"
            fullWidth
            value={input}
            onChange={handleInputChange}
          />
          <IconButton
            color="primary"
            onClick={handleSendMessage}
            sx={{ margin: "4px" }}
          >
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Chatbot;
