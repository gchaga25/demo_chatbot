const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ extended: true }));

app.use("/api/chatbot", require("./routes/chatbot"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
