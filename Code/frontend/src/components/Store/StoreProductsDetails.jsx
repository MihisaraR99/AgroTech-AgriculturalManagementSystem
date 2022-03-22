import React, { useState } from "react";
import "./Store.css";

const StoreProductsDetails = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="mx-vw-100 vh-100 d-flex">
      <div className="container">
        <div className="product-details-content w-100 h-100 d-flex flex-column align-items-center justify-content-center">
          <div class="row">
            <div class="col-4">
              <div className="store-products-top text-secondary">
                <p> Home > Products > Sample Product 1 </p>
              </div>
              {/* Image */}

              <img
                className="product-details-img"
                style={{ objectFit: "cover" }}
                src="/images/store/img4.jpg"
                alt=""
              />
            </div>

            <div class="col-8">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h4>Dark yellow lace cut out swing dress</h4>
                <h2 className="my-3" style={{ color: "#3f3f3f" }}>
                  $84.00
                </h2>

                <h6 style={{ color: "#777" }}>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing. Sed lectus.
                </h6>

                <p className="my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>

                <div className="quantity-area col-4 my-3">
                  <label className="form-label">Choose your quantity:</label>
                  <input
                    type="number"
                    className={`form-control col-2 ${
                      quantity < 0 && "is-invalid"
                    }`}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <div class="invalid-feedback">
                    Please enter a valid amount
                  </div>
                </div>

                <div className="col-4 my-3">
                  <button className="btn product-details-buy-now w-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProductsDetails;
