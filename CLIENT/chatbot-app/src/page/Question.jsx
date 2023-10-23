import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestionAction,
  deleteQuestionByIdAction,
  getQuestionsAction,
} from "../actions/chatbotAction";
import Main from "./Main";
import DataTable from "../components/DataTable";
import ModalComp from "../components/Modal";
import { Button, Container, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Question = () => {
  const [openModal, setOpenModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chatbot.questions_answers);
  const send_success = useSelector((state) => state.chatbot.send_success);

  useEffect(() => {
    dispatch(getQuestionsAction());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!send_success) return;
    setOpenModal(false);
    setAnswer("");
    setQuestion("");
    dispatch(getQuestionsAction());
    // eslint-disable-next-line
  }, [send_success]);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSave = () => {
    if (question.trim() === "" || answer.trim() === "") return;
    dispatch(addQuestionAction({ question, answer }));
  };

  const handleDelete = (id) => {
    if (!id) return;
    dispatch(deleteQuestionByIdAction(id))
  };

  return (
    <Main>
      <Container maxWidth="xl">
        <Button
          startIcon={<AddCircleIcon />}
          sx={{ marginTop: "20px" }}
          onClick={handleClick}
        >
          Add
        </Button>
        <Typography
          variant="h1"
          component={"h1"}
          align="center"
          sx={{
            marginTop: "5px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            backgroundColor: "#6E48AA",
          }}
        >
          Questions and Answers
        </Typography>
        <DataTable rows={data} handleDelete={handleDelete} />
        {openModal && (
          <ModalComp
            openModal={openModal}
            question={question}
            setQuestion={setQuestion}
            answer={answer}
            setAnswer={setAnswer}
            handleClose={handleClose}
            handleSave={handleSave}
          />
        )}
      </Container>
    </Main>
  );
};

export default Question;
