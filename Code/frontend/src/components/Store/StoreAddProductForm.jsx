import React, { useState } from "react";

const StoreAddProductForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [smallDes, setSmallDes] = useState("");
  const [longDes, setLongDes] = useState("");

  return (
    <div className="store-add-product d-flex align-items-center flex-column justify-content-center">
      <h2 className="display-6"> Add Product to Store </h2>
      <small id="emailHelp" class="form-text text-muted">
        Enter the details of the new product
      </small>

      <div className="store-add-product-form-inner">
        <form>
          <div class="form-group my-4">
            <label className="my-1">Name</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div class="form-group my-4">
            <label className="my-1">Category</label>
            <input
              type="text"
              class="form-control"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Category"
            />
          </div>

          <div class="form-group my-4">
            <label className="my-1">Unit Price</label>
            <input
              type="number"
              class="form-control"
              placeholder="Unit Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div class="form-group my-4">
            <label className="my-1">Image</label>
            <input
              type="text"
              class="form-control"
              placeholder="Image"
              value={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </div>

          <div class="form-group my-4">
            <label className="my-1">Small Description</label>
            <input
              type="text"
              class="form-control"
              placeholder="Small Description"
              value={smallDes}
              onChange={(e) => {
                setSmallDes(e.target.value);
              }}
            />
          </div>

          <div class="form-group my-4">
            <label className="my-1">Long Description</label>
            <textarea
              type="text"
              class="form-control"
              placeholder="Long Description"
              value={longDes}
              onChange={(e) => {
                setLongDes(e.target.value);
              }}
            />
          </div>

          <button type="submit" class="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StoreAddProductForm;
