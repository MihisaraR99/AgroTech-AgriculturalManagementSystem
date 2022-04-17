import React from "react";
import "./Store.css";

const StorePaymentScreen = () => {
  return (
    <div className="vh-100 store-container d-flex align-items-start justify-content-center">
      <div className="store-payment-form mt-4">
        <h3> Payment </h3>
        <p>
          Hey, We have recieved your order! Enter your credentials to proceed
          the payment
        </p>

        <div className="store-payment-paypal">
          <img src="https://i.ibb.co/37QxMHG/Daco-472332.png" alt="" />
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Paypal
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Credit or debit card
          </label>
        </div>

        <div class="collapse" id="collapseExample1">
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />

            <button className="btn store-order-form-button mt-3">
              Process Payment via Paypal
            </button>
          </div>
        </div>

        <div class="collapse" id="collapseExample">
          <form class="row g-3">
            <div class="col-md-5">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>

            <button className="btn store-order-form-button">
              Process Payment
            </button>
          </form>
        </div>
      </div>

      {/*  */}
      <div className="store-payment-form mt-4 mx-4 d-flex justify-content-between">
        <div>
          <h5> Order ID </h5>
          <p> Total Amount </p>
          <p> Placed Date </p>
        </div>

        <div>
          <h5> 4546546546546546465 </h5>
          <p> 24 </p>
          <p> 2020/05/20 </p>
        </div>
      </div>
    </div>
  );
};

export default StorePaymentScreen;
