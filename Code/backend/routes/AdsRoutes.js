const express = require("express");
const router = express.Router();
const { 
    addAds,
    getAds,
    updateAds,
    removeAds
 } = require("../controllers/AdsController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getAds);

//@route POST api/ads
//@desc Add an ads
router.post("/", addAds);

//@route PUT api/employee/:id
//@desc Update an employee
router.put("/:id", updateAds);

//@route DELETE api/employee/:id
//@desc delete an employee
router.delete("/:id", removeAds)

module.exports = router;
