import {
  CHATBOT_ADD_SUCCESS,
  CHATBOT_DATA_SUCCESS,
  CHATBOT_DELETE_SUCCESS,
  CHATBOT_START,
  CHATBOT_SUCCESS,
} from "../types";

const initialState = {
  messages: [],
  questions_answers: [],
  error: false,
  loading: false,
  send_success: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case CHATBOT_START:
      return {
        ...state,
        loading: true,
        error: false,
        send_success: false,
      };
    case CHATBOT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        messages: [...state.messages, action.payload],
      };
    case CHATBOT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        questions_answers: action.payload,
      };
    case CHATBOT_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        send_success: true,
      };
    case CHATBOT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        questions_answers: state.questions_answers.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
