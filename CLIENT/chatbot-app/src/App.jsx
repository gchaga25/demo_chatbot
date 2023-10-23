import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Chatbot from "./page/Chatbot";
import Question from "./page/Question";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Chatbot />} />
          <Route path="/questions" element={<Question />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
