import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchQuestionAction } from "../actions/chatbotAction";
import ChatbotComp from "../components/Chatbot";
import Main from "./Main";
import { Container } from "@mui/material";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chatbot.messages);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === "" || input.length <= 3) return;
    let inputTemp = input;
    dispatch(searchQuestionAction(input, true));
    setInput("");
    setTimeout(() => {
      dispatch(searchQuestionAction(inputTemp, false));
    }, 700);
  };

  useEffect(() => {
    // Desplazar hacia abajo para mostrar el mensaje más reciente.
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <Main>
      <Container maxWidth="md" >
        <ChatbotComp
          input={input}
          messages={messages}
          chatContainerRef={chatContainerRef}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
        />
      </Container>
    </Main>
  );
};

export default Chatbot;
