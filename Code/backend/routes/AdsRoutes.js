const express = require("express");
const router = express.Router();
const { 
    addAds,
    getAds,
 } = require("../controllers/AdsController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getAds);

//@route POST api/ads
//@desc Add an ads
router.post("/", addAds);

module.exports = router;
