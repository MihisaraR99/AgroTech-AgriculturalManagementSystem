import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";

const StoreAdminPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/payments`).then((res) => {
      setPayments(res.data.payments);
    });
  }, []);

  return (
    <div className="store-container vh-100 d-flex justify-content-center p-5">
      <div className=" w-100">
        <h3> Store Payment Admin </h3>
        <p> These are the payments happend inside this month </p>

        <table class="table mt-4 store-orders-container">
          <thead>
            <tr>
              <th scope="col">Payment ID</th>
              <th scope="col">Payee Name</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments &&
              payments.map((payment) => (
                <tr>
                  <th scope="row" style={{ width: "300px" }}>
                    {payment._id}
                  </th>
                  <td>{payment.paidBy}</td>
                  <td>$ {payment.amount}</td>
                  <td style={{ width: "300px" }}>{payment.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreAdminPayments;
