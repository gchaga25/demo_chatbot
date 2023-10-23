const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DB_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error with mongoDB"));
db.once("open", () => {
  console.log("Successful connection with mongoDB");
});
