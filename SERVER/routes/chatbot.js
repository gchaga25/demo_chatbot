const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbot");

// Route to get all questions and answers
router.get("/", chatbotController.getAll)
// Route to search for answers
router.get("/search", chatbotController.get);
// Route to add new questions and answers
router.post("/add", chatbotController.add);
// Route to delete 
router.delete("/:id", chatbotController.delete)

module.exports = router;
