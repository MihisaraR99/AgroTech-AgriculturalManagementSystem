const express = require("express");
const { fetchAllProducts } = require("../controllers/storeControllers");

const router = express.Router();

router.route("/products").get(fetchAllProducts);

module.exports = router;
