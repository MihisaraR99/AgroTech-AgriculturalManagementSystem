import React from "react";
import { Link } from "react-router-dom";

function AllServices() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <Link to="/" className="card-link">
          Card link
        </Link>
        <Link to="/" className="card-link">
          Another link
        </Link>
      </div>
    </div>
  );
}

export default AllServices;
