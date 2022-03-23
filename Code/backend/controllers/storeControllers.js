const Product = require("../models/ProductModel");

const fetchAllProducts = (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ products: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const fetchProductsByCategory = (req, res) => {
  Product.find({ category: req.params.category }, (err, docs) => {
    if (!err) {
      res.status(200).json({ products: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const createProduct = (req, res) => {
  Product.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.pid }, (err) => {
    if (err) return handleError(err);

    res.status(204).json({ status: "Product deleted!" });
  });
};

const getSingleItem = (req, res) => {
  Product.findById(req.params.pid, (err, data) => {
    if (err) return handleError(err);

    res.status(204).json({ product: data });
  });
};

module.exports = {
  fetchAllProducts,
  createProduct,
  fetchProductsByCategory,
  deleteProduct,
  getSingleItem,
};
