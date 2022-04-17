const express = require("express");
const {
  getguidance,
  addGuidance,
  updateGuidance,
  removeGuidance,
 
} = require("../controllers/AddGuidanceProgramsController");
const router = express.Router();

router.get("/all", getguidance);

router.post("/", addGuidance);

router.put("/:id",updateGuidance);

router.delete("/:id",removeGuidance)

module.exports = router;
