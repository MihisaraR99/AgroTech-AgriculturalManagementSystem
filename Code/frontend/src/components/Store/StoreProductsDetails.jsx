import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./Store.css";

const StoreProductsDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState();
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/store/product/${params.id}`)
      .then((res) => {
        setProduct(res.data.product);
      });
  }, [params]);

  return (
    <div className="mx-vw-100 vh-100 d-flex">
      <div className="container">
        <div className="product-details-content w-100 h-100 d-flex flex-column align-items-center justify-content-center">
          <div class="row">
            <div class="col-4">
              <div className="store-products-top text-secondary">
                <p> Home > Products > {product && product.name} </p>
              </div>
              {/* Image */}

              <img
                className="product-details-img"
                style={{
                  objectFit: "cover",
                  height: "500px",
                }}
                src={product && product.image}
                alt=""
              />
            </div>

            <div class="col-8">
              <div className="h-100 my-4 d-flex flex-column justify-content-center">
                <h4>{product && product.name}</h4>
                <h2 className="my-3" style={{ color: "#3f3f3f" }}>
                  ${product && product.price}
                </h2>

                <h6 style={{ color: "#777" }}>{product && product.smallDes}</h6>

                <p className="my-3">{product && product.longDes}</p>

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
                  <button
                    disabled={quantity <= 0}
                    onClick={() => {
                      navigate(
                        `/store/order/store-order-create/${product._id}/${quantity}/${product.price}`
                      );
                    }}
                    className="btn product-details-buy-now w-100"
                  >
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
