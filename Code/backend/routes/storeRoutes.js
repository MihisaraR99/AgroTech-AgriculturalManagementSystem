const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  fetchProductsByCategory,
} = require("../controllers/storeControllers");

const router = express.Router();

router.get("/products", fetchAllProducts);
router.post("/products", createProduct);
router.get("/products/:category", fetchProductsByCategory);
router.delete("/products/:pid", fetchProductsByCategory);

module.exports = router;
