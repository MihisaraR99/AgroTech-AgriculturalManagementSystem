const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes to here
const storeRoutes = require("./routes/storeRoutes");

const app = express();
dotenv.config();
app.use(cors());

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

app.listen(PORT, () => {
  logger.info(`Server is running on PORT: ${PORT}`);
});
