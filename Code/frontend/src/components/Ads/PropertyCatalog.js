import React from "react";
import { Link } from "react-router-dom";
import bg3 from "./img/bg3.jpg";

function PropertyCatalog() {
  return (
<div className='col-md-8 mt-4 mx-auto'>
<ul className="nav" style={{ marginLeft: "35rem" }}>
  <li className="nav-item">
    <a className="nav-link active" href="#">Login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Register</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Post Your Ads</a>
  </li>
</ul><br/>
    <div className="btn-group" style={{ marginLeft: "40rem" }}>
  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Radius
  </button>
  <div className="dropdown-menu">
    <Link className="dropdown-item" to={"#"}>Action</Link>
    <Link className="dropdown-item" to={"#"}>Another action</Link>
    <Link className="dropdown-item" to={"#"}>Something else here</Link>
    <div className="dropdown-divider"></div>
    <Link className="dropdown-item" to={"#"}>Separated link</Link>
  </div>
</div>
<div className="btn-group" style={{ marginLeft: "1rem" }}>
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Price range
  </button>
  <div className="dropdown-menu">
    <Link className="dropdown-item" to={"#"}>Action</Link>
    <Link className="dropdown-item" to={"#"}>Another action</Link>
    <Link className="dropdown-item" to={"#"}>Something else here</Link>
    <div className="dropdown-divider"></div>
    <Link className="dropdown-item" to={"#"}>Separated link</Link>
  </div>
</div>
<br/><br/>
<div className="input-group" style={{ width: "18rem" }}>
  <input type="search" className="form-control rounded" placeholder="Type" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary">search</button>
</div>
<br/>
<div className="input-group" style={{ width: "18rem" }}>
  <input type="search" className="form-control rounded" placeholder="City" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary">search</button>
</div>
<br/>
<hr></hr>

<br/>
<br/>
<br/>

    <div className="card" style={{ width: "18rem" }}>
    <img className="card-img-top" src={bg3} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Rs.3.2M Per Acre</h5>
      <p className="card-text">Description of the land</p>
    </div>
    <div className="card-body">
      
    </div>
  </div>
  </div>
  );
}

export default PropertyCatalog;
