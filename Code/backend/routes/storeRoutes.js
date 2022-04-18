const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  fetchProductsByCategory,
  getSingleItem,
  deleteProduct,
  updateProduct,
} = require("../controllers/storeControllers");

const router = express.Router();

router.get("/products", fetchAllProducts);
router.post("/products", createProduct);
router.get("/products/:category", fetchProductsByCategory);
router.put("/products/:pid", updateProduct);
router.delete("/products/:pid", deleteProduct);
router.get("/product/:pid", getSingleItem);

module.exports = router;
