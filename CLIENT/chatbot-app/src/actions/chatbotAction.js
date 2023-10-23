import clienteAxios from "../config/axios";
import {
  CHATBOT_ADD_SUCCESS,
  CHATBOT_DATA_SUCCESS,
  CHATBOT_DELETE_SUCCESS,
  CHATBOT_ERROR,
  CHATBOT_START,
  CHATBOT_SUCCESS,
} from "../types";
import { swalSuccess } from "../alert";

// Route to search question and answer
export const searchQuestionAction = (query, question) => {
  return async (dispatch) => {
    dispatch(chatbotStart());
    try {
      const message = { user: "user", text: query };
      if (!question) {
        const { data } = await clienteAxios.get(
          `/chatbot/search?question=${query}`
        );
        dispatch(chatbotSuccess(data));
      } else {
        dispatch(chatbotSuccess(message));
      }
    } catch (error) {
      dispatch(chatbotError());
    }
  };
};

// Route to get all question and answer

export const getQuestionsAction = () => {
  return async (dispatch) => {
    dispatch(chatbotStart());
    try {
      const { data } = await clienteAxios.get("/chatbot");
      dispatch(chatbotDataSuccess(data));
    } catch (error) {
      dispatch(chatbotError());
    }
  };
};

// Route to add new question and answer
export const addQuestionAction = (newData) => {
  return async (dispatch) => {
    dispatch(chatbotStart());
    try {
      const { data } = await clienteAxios.post("/chatbot/add", newData);
      dispatch(chatbotAddSuccess());
      swalSuccess(data.message);
    } catch (error) {
      dispatch(chatbotError());
    }
  };
};

// Route to delete by id question and answer
export const deleteQuestionByIdAction = (id) => {
  return async (dispatch) => {
    dispatch(chatbotStart());
    try {
      const { data } = await clienteAxios.delete(`/chatbot/${id}`);
      dispatch(chatbotDeleteSuccess(id));
      swalSuccess(data.message);
    } catch (error) {
      dispatch(chatbotError());
    }
  };
};

export const chatbotStart = () => ({
  type: CHATBOT_START,
});
export const chatbotError = () => ({
  type: CHATBOT_ERROR,
});
export const chatbotSuccess = (data) => ({
  type: CHATBOT_SUCCESS,
  payload: data,
});
export const chatbotDataSuccess = (data) => ({
  type: CHATBOT_DATA_SUCCESS,
  payload: data,
});
export const chatbotAddSuccess = () => ({
  type: CHATBOT_ADD_SUCCESS,
});
export const chatbotDeleteSuccess = (data) => ({
  type: CHATBOT_DELETE_SUCCESS,
  payload: data,
});
