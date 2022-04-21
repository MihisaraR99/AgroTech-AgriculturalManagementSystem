import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ads.css";
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
<div >
<br/>

<div className="upper-images">
        <img
          className="ecommerce-slide"
          src="https://th.bing.com/th/id/R.414f0016399d8a7af8ceb1030ee66281?rik=Gcv2%2f7iMfLKn8g&pid=ImgRaw&r=0"
          alt=""
        />
        <div class="middle">
    <div class="text"><p>Lands To Buy..</p></div>
   <p className="para">Search our selection of land plots for sale in Sri Lanka. 
     Our fast-growing portfolio of properties brings you closer to your ideal home. 
     Every project is monitored and handled by detail-oriented team members 
     committed to serving our customers with the highest possible service to guarantee you find your dream farm.</p>
     <button class="buttonserv"><span>Discover</span></button> 
  </div>
      </div>

<div className='col-md-8 mt-4 mx-auto' style={{marginBottom:"40px"}}>
  
<br/>

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
            <div className="card" style={{ width: "15rem", margin: "1rem", height:"20rem" }}>
    <div className="card-body">
    <div className="product-image" style={{height:"10rem"}}>
        <img src={ad.img} alt="product"/>
      </div>
      <p className="card-text">Rs. {ad.priceRate} </p><p className="card-left"> Per Perch </p><br/>
      <p className="card-title">{ad.title}</p>
      <p className="card-type">{ad.type}</p>
      <p className="card-area">{ad.sizeOfArea} Perches</p>
      <Link className="card-link" to={`/Ads/DisplayAd/${ad._id}`}>more..</Link>
    </div>
    <div className="card-body">
    </div>
  </div>
          ))}
      </div>
  </div>
  </div>
  );
}
export default PropertyCatalog;
