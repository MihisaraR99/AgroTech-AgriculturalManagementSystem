import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";

const StoreAdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/orders`).then((res) => {
      setOrders(res.data.orders);
    });
  }, []);

  return (
    <div className="store-container vh-100 d-flex justify-content-center p-5">
      <div className=" w-100">
        <h3> Store Order Admin </h3>
        <p> These are the orders recived inside this month </p>

        <table class="table mt-4 store-orders-container">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr>
                  <th scope="row" style={{ width: "300px" }}>
                    {order._id}
                  </th>
                  <td>
                    {order.firstName} {order.lastName}
                  </td>
                  <td>$ {order.total}</td>
                  <td style={{ width: "300px" }}>{order.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreAdminOrders;
