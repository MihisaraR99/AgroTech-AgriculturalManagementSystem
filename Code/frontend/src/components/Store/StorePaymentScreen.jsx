import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import "./Store.css";

const StorePaymentScreen = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState();

  useState(() => {
    axios
      .get(`http://localhost:8000/api/store/order/${orderId}`)
      .then((res) => {
        setOrder(res.data.order);
      });
  }, []);

  const [paypalEmail, setPaypalEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [owner, setOwner] = useState("");
  const [error, setError] = useState("");

  const onClick = (e) => {
    if (paypalEmail.length <= 0 || creditCard.length <= 0) {
      setError("You need to enter either you credit card or paypal");
      return;
    }

    const payment = {
      paymentType: paypalEmail.length > 0 ? "paypal" : "card",
      amount: order.total,
      paid: true,
      paidBy: owner,
      paypalUserName: paypalEmail,
    };

    axios
      .post(`http://localhost:8000/api/store/payment`, payment)
      .then((res) => {
        alert("You have successfully paid the bill");
      });
  };

  return (
    <div className="vh-100 store-container d-flex align-items-start justify-content-center">
      <div className="store-payment-form mt-4">
        <h3> Payment </h3>
        <p>
          Hey, We have recieved your order! Enter your credentials to proceed
          the payment
        </p>

        {error && <p> {error} </p>}

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
              Enter your paypal email
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="user@paypal.com"
              value={paypalEmail}
              onChange={(e) => {
                setPaypalEmail(e.target.value);
              }}
            />

            <button
              type="button"
              onClick={onClick}
              className="btn store-order-form-button mt-3"
            >
              Process Payment via Paypal
            </button>
          </div>
        </div>

        <div class="collapse" id="collapseExample">
          <form class="row g-3">
            <div class="col-md-5">
              <label for="inputEmail4" class="form-label">
                Card Number
              </label>
              <input
                value={creditCard}
                onChange={(e) => {
                  setCreditCard(e.target.value);
                }}
                type="email"
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
                Expiration
              </label>
              <input
                value={expiration}
                onChange={(e) => {
                  setExpiration(e.target.value);
                }}
                type="text"
                class="form-control"
                id="inputPassword4"
              />
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label">
                CVV
              </label>
              <input
                value={cvv}
                onChange={(e) => {
                  setCvv(e.target.value);
                }}
                type="text"
                class="form-control"
                id="inputPassword4"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Owner's Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="John Doe"
                value={owner}
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
              />
            </div>

            <button
              type="button"
              onClick={onClick}
              className="btn store-order-form-button"
            >
              Process Payment
            </button>
          </form>
        </div>
      </div>

      {/*  */}
      <div className="store-payment-form mt-4 mx-4">
        <div className="d-flex justify-content-between w-100">
          <div>
            <h5> Order ID </h5>
            <p> Total Amount </p>
            <p> Placed Date </p>
          </div>

          <div>
            <h5> {order && order._id} </h5>
            <p> ${order && order.total} </p>
            <p> 2020/05/20 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePaymentScreen;
