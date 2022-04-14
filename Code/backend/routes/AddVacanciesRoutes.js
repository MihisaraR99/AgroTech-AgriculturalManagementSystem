const express = require("express");
const {
  getvacancy,
  addVacancy,
  updateVacancy,
  removeVacancy,
} = require("../controllers/AddVacanciesController");
const router = express.Router();

router.get("/all", getvacancy);

router.post("/", addVacancy);

router.put("/:id",updateVacancy);

router.delete("/:id",removeVacancy);

module.exports = router;
