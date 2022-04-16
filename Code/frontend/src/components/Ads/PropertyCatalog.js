import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const PropertyCatalog = () => {
  
  const [ads, setAds] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Ads/all`)
      .then((res) => {
        setAds(res.data);
      });

    console.log(ads);
  }, []);
  


  return (
<div className='col-md-8 mt-4 mx-auto'>
<ul className="nav" style={{ marginLeft: "35rem", backgroundColor:"#1bb004", border:"2px solid black"}}>
  <li className="nav-item" >
    <Link className="nav-link active" to="/Ads/AdverLogin" style={{color:"#ffffff", marginRight: "20px"}}>Login</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Ads/adform" style={{color:"#ffffff", marginRight: "20px"}}>Register</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Ads/adform" style={{color:"#ffffff"}}>Post Your Ads</Link>
  </li>
</ul><br/>


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

<div className="products-list row p-5" style={{backgroundColor:"#D3D3D3"}}>
        {ads &&
          ads.map((ad) => (
            <div className="card" style={{ width: "22rem", margin: "1rem" }}>
    <div className="card-body">
    <div className="product-image">
        <img src={ad.img} alt="product" />
      </div>
      <h5 className="card-title">{ad.title}</h5>
      <p className="card-text">{ad.type}</p>
      <p className="card-text">{ad.priceRate}</p>
      <p className="card-text">{ad.sizeOfArea}</p>
    </div>
    <div className="card-body">
      
    </div>
  </div>
          ))}
      </div>
  </div>
  );
}

export default PropertyCatalog;
