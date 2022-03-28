import React from "react";
import { Link } from "react-router-dom";
import Culti from "./Ads/img/Culti.jpg";
import lab from "./Ads/img/lab.jpg";
import education from "./Ads/img/education.jpg";
import animalhealth from "./Ads/img/animalhealth.png";
import career from "./Ads/img/career.jpg";

function AllServices() {
  return (
    <div>
    <div className='col-md-8 mt-4 mx-auto'>
    <div className="card" style={{ width: "18rem",float: "left", marginRight: "1rem"}}>
      <div className="card-body">
        <h5 className="card-title">Lab Sevices</h5>
        <img className="card-img-top" src={lab} alt="Card image cap"/>
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

    <div className="card" style={{ width: "18rem",float: "left", marginRight: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">Education</h5>
        <img className="card-img-top" src={education} alt="Card image cap"/>
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
    <div className="card" style={{ width: "18rem", marginBottom:"5rem"}}>
      <div className="card-body">
        <h5 className="card-title">Animal Health</h5>
        <img className="card-img-top" src={animalhealth} alt="Card image cap" height={"170rem"}/>
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
    </div>

    <div className='col-md-8 mt-4 mx-auto' >
    <div className="card" style={{ width: "18rem" , marginRight: "1rem", float: "left", marginLeft: "10rem"}}>
      <div className="card-body">
        <h5 className="card-title">Career</h5>
        <img className="card-img-top" src={career} alt="Card image cap"/>
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

    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Land Sale Ads</h5>
        <img className="card-img-top" src={Culti} alt="Card image cap"/>
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
    </div>
    </div>

    
  );
}

export default AllServices;
