import React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  width: "50%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "16px",
  borderRadius: "4px",
};

const ModalComp = ({
  openModal,
  question,
  setQuestion,
  answer,
  setAnswer,
  handleClose,
  handleSave,
}) => {
  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h1"
          component={"h1"}
          align="center"
          sx={{ color: "black", m: 1 }}
        >
          Add question and answer
        </Typography>
        <TextField
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          label="Question"
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <TextField
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          label="Answer"
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "15px" }}>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComp;
