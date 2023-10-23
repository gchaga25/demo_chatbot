const mongoose = require("mongoose");

const chatbotSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Chatbot = mongoose.model("Chatbot", chatbotSchema);
module.exports = Chatbot;
