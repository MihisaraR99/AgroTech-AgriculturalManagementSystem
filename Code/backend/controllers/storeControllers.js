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

const createProduct = (req, res) => {
  Product.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

module.exports = { fetchAllProducts, createProduct };
