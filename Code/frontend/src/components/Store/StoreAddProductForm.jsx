import React, { useState } from "react";
import axios from "axios";

const StoreAddProductForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [smallDes, setSmallDes] = useState("");
  const [longDes, setLongDes] = useState("");

  const saveProduct = async () => {
    const product = {
      name,
      category,
      price,
      image: img,
      smallDes,
      longDes,
    };

    console.log(product);

    axios
      .post("http://localhost:8000/api/store/products", product)
      .then((response) => console.log(response));
  };

  return (
    <div className="store-add-product d-flex align-items-center flex-column justify-content-center">
      <h2 className="display-6"> Add Product to Store </h2>
      <small id="emailHelp" className="form-text text-muted">
        Enter the details of the new product
      </small>

      <div className="store-add-product-form-inner">
        <form>
          <div className="form-group my-4">
            <label className="my-1">Name</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group my-4">
            <label className="my-1">Category</label>
            <input
              type="text"
              className="form-control"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Category"
            />
          </div>

          <div className="form-group my-4">
            <label className="my-1">Unit Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Unit Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div className="form-group my-4">
            <label className="my-1">Image</label>
            <input
              type="text"
              className="form-control"
              placeholder="Image"
              value={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </div>

          <div className="form-group my-4">
            <label className="my-1">Small Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Small Description"
              value={smallDes}
              onChange={(e) => {
                setSmallDes(e.target.value);
              }}
            />
          </div>

          <div className="form-group my-4">
            <label className="my-1">Long Description</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Long Description"
              value={longDes}
              onChange={(e) => {
                setLongDes(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={saveProduct}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StoreAddProductForm;
