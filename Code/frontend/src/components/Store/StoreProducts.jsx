import React from "react";
import { useNavigate } from "react-router";
import "./Store.css";

const StoreProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="store-container">
      <h1 class="display-2 p-4">Fruits</h1>

      <div className="products-list row p-4">
        <div className="product-card">
          <div className="product-image">
            <img src="/images/store/img4.jpg" alt="product" />
          </div>

          <div
            className="product-title"
            style={{ color: "#6d6d6d", textAlign: "center" }}
          >
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid #333",
              }}
            />
            <p style={{ fontSize: "18px", margin: "0", color: "#333" }}>
              <b>Sample Title</b>
            </p>
            <p style={{ fontSize: "24px", color: "#12af39" }}>
              <b>$35</b>
            </p>

            <button className="details-button btn btn-success">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProducts;
