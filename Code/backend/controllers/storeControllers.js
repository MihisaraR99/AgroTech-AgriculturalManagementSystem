const fetchAllProducts = (req, res) => {
  res.status(200).json({ products: "success" });
};

module.exports = { fetchAllProducts };
