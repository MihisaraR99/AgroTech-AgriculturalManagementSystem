import React from "react";
import { useNavigate } from "react-router";

const StoreProductSingle = ({ img, title, price, id }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt="product" />
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
          <b>{title}</b>
        </p>
        <p style={{ fontSize: "24px", color: "#12af39" }}>
          <b>${price}</b>
        </p>

        <button
          onClick={() => {
            navigate(`/store/products/product/${id}`);
          }}
          className="details-button btn btn-success"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default StoreProductSingle;
