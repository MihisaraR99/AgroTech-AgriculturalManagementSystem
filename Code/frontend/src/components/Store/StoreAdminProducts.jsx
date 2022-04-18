import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";

const StoreAdminOrders = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/products`).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="store-container vh-100 d-flex justify-content-center p-5">
      <div className=" w-100">
        <h3> Store Products Admin </h3>
        <p> These are the products exists inside the store </p>
        <table class="table mt-4 store-orders-container">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((prod) => (
                <tr>
                  <th scope="row" style={{ width: "300px" }}>
                    {prod._id}
                  </th>
                  <td>{prod.name}</td>
                  <td>{prod.category}</td>
                  <td style={{ width: "300px" }}>
                    <Link to={`/store/store-admin-products/edit/${prod._id}`}>
                      <button
                        type="button"
                        class="btn btn-outline-warning mx-2"
                      >
                        Edit <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>

                    <button type="button" class="btn btn-outline-danger">
                      Delete <i class="fa-solid fa-xmark"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreAdminOrders;
