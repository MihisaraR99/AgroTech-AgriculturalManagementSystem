const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
const cors = require("cors");
const eventModel = require('./models/eventsModel')
const loanModel=require('./models/LoansModel')

// Import routes to here
const storeRoutes = require("./routes/storeRoutes");
const eventRoutes = require("./routes/eventRoutes");
const loanRoutes = require("./routes/loanRoutes");

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
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
app.use("/api/Addevent",require("./routes/eventRoutes"));
app.use("/api/Addloan",require("./routes/loanRoutes"));

app.listen(PORT, () => {
  logger.info(`Server is running on PORT: ${PORT}`);
});
