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

const updateProduct = async (req, res) => {
  const pid = req.params.pid;

  try {
    let product = await Product.findById(candidateId);

    if (!product) {
      return res.status(404).json({ updated: "Product not found" });
    }

    product = await Product.findByIdAndUpdate(pid, req.body);
    res.status(201).json({ updated: "Product updated successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSingleItem = (req, res) => {
  Product.findById(req.params.pid, (err, data) => {
    if (err) return handleError(err);

    res.status(200).json({ product: data });
  });
};

module.exports = {
  fetchAllProducts,
  createProduct,
  fetchProductsByCategory,
  deleteProduct,
  getSingleItem,
  updateProduct,
};
