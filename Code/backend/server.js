const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes to here
const storeRoutes = require("./routes/storeRoutes");

//IT20612696 Senanayake D.B
const labRoutes = require("./routes/labRoutes.js");

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyPaser.json());
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  logger.info("Mongodb connected successfully");
});

app.get("/", (req, res) => {
  res.status(200).json({ messsage: "Server is running!" });
});

// Implement the routes from here
app.use("/api/store", storeRoutes);
app.use("/api/lab", labRoutes);
app.listen(PORT, () => {
  logger.info(`Server is running on PORT: ${PORT}`);
});
//Implement the routes from Lab IT20612696 Senanayake D.B
//app.use("/reports",labRoutes);
