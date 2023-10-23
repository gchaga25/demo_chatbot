import { combineReducers } from "redux";
import chatbotReducer from "./chatbotReducer";

export default combineReducers({ chatbot: chatbotReducer });
