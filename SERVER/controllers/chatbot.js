const Chatbot = require("../models/chatbot");

// Route to add new questions and answers
exports.add = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const chatbot = new Chatbot({ question, answer });
    await chatbot.save();
    res
      .status(201)
      .json({ message: "Pregunta y respuesta agregadas con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Hubo problemas con el servidor" });
  }
};

// Route to search for answers
exports.get = async (req, res) => {
  try {
    const chatbotQuestion = req.query.question;
    const chatbotResponse = await Chatbot.findOne({
      question: { $regex: chatbotQuestion, $options: "i" },
    });
    if (chatbotResponse) {
      res.status(200).json({ user: "chatbot", text: chatbotResponse.answer });
    } else {
      res
        .status(200)
        .json({ user: "chatbot", text: "Lo siento, no comprendo la pregunta" });
    }
  } catch (error) {
    res.status(500).json({ error: "Hubo problemas con el servidor" });
  }
};

// Route to get all questions and answers
exports.getAll = async (req, res) => {
  try {
    const datos = await Chatbot.find();
    const newData = datos.map((item) => {
      const { _id, ...rest } = item._doc;
      return { id: _id, ...rest };
    });
    res.status(200).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Hubo problemas con el servidor" });
  }
};

// Route to delete
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Chatbot.findByIdAndDelete(id);
    res.status(200).json({ message: "Registro eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Hubo problemas con el servidor" });
  }
};
