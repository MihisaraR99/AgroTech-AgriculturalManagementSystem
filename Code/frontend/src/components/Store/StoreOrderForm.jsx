import React from "react";

const StoreOrderForm = () => {
  return (
    <div className="p-5 store-container store-order-form-page d-flex align-items-start justify-content-center">
      <div className="store-form-outer-layer">
        <h3> Enter Shipping Details </h3>

        <p>
          Please enter your shipping details, We'll deliver your items to your
          doorstep
        </p>
        <hr />
        <form class="row g-3 mt-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Last Name
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn store-order-form-button ">
              Place Order
            </button>
          </div>
        </form>
      </div>

      <div className="store-bought-product mx-4">
        <div className="store-bought-product-item d-flex">
          <img src="https://i.ibb.co/19JrPDb/FruitImg.jpg" alt="fruit" />

          <div className="mx-4">
            <p> Test Product item bought </p>
            <p> Quantity: 4 </p>
          </div>
        </div>

        <hr />

        <div className="pricing-store-area d-flex justify-content-between w-100">
          <div className="pricing-labels-store">
            <p> Subtotal </p>
            <p> Delivery Fee (6.5%) </p>
          </div>

          <div className="pricing-labels-store">
            <p> $40 </p>
            <p> $6 </p>
          </div>
        </div>

        <hr />

        <div className="pricing-store-area d-flex justify-content-between w-100">
          <div className="pricing-labels-store">
            <p> Total </p>
          </div>

          <div className="pricing-labels-store">
            <p> $46 </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default StoreOrderForm;
