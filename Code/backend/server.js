const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes to here
const storeRoutes = require("./routes/storeRoutes");
const AdsRoutes = require("./routes/AdsRoutes");
const CandidateRoutes = require("./routes/CandidateRoutes");
const ApplyforVacancyRoutes = require("./routes/ApplyforVacancyRoutes");
const ApplyforGuidanceRoutes = require("./routes/ApplyforGuidanceRoutes");
const AddVacanciesRoutes = require("./routes/AddVacanciesRoutes");
const AddGuidanceProgramsRoutes = require("./routes/AddGuidanceProgramsRoutes");

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
app.use("/api/Candidate",require("./routes/CandidateRoutes"));
app.use("/api/Ads", require("./routes/AdsRoutes"));
app.use("/api/Applyvacancies", require("./routes/ApplyforVacancyRoutes"));
app.use("/api/Applyguidances", require("./routes/ApplyforGuidanceRoutes"));
app.use("/api/AddVacancies",require("./routes/AddVacanciesRoutes"));
app.use("/api/AddGuidances",require("./routes/AddGuidanceProgramsRoutes"));

app.listen(PORT, () => {
  logger.info(`Server is running on PORT: ${PORT}`);
});
