const express = require("express");
const {
  fetchAllProducts,
  createProduct,
} = require("../controllers/storeControllers");

const router = express.Router();

router.get("/products", fetchAllProducts);
router.post("/products", createProduct);

module.exports = router;
