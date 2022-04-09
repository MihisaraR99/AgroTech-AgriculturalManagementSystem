import React from "react";
import { Link } from "react-router-dom";
import Culti from "./img/Culti.jpg";

function DisplayAd() {
  return (
      <div>
          <br/>
          <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button" style={{marginLeft:"22rem"}}>Back</button>
</div>
    <div class="text-center" >
    
        <br/>
        
        <br/>
  <img src={Culti} class="rounded" alt="..." style={{ width: "40rem" }} />
  <br/>
  <br/>
  <div className="btn-group" style={{ marginLeft: "30rem" }}>
  <button type="button" className="btn btn-success">
   Share
  </button>
</div>
<div className="btn-group" style={{ marginLeft: "2rem" }}>
  <button type="button" className="btn btn-warning">
   Print
  </button>
</div>
<br/>
  <hr></hr>
  <br/>
  <div style={{marginRight: "25rem"}}>
  <blockquote class="blockquote" style={{float: "right"}}>
  <p className="mb-0">Availability : </p>
</blockquote>
<blockquote class="blockquote">
  <p className="mb-0">Area of Land : </p>
</blockquote>
<blockquote class="blockquote" style={{float: "right"}}>
  <p className="mb-0">AgentRef : </p>
</blockquote>
<blockquote class="blockquote">
  <p className="mb-0">Offered for : </p>
</blockquote>
</div>
<br/>
<hr></hr>
<div style={{marginRight: "19rem"}}>
<h1 style={{marginRight: "4.5rem"}}>Property Details</h1>
<br/>
<p>details details detail details detail detail detail detail</p>
<p>details details detail details detail detail detail detail</p>
<p>details details detail details detaildetaildetail detail </p>
</div>
<br/>
<div className="container p-3 my-3 bg-dark text-white">
  <h1>Contact Advertiser</h1>
</div>
<div className='col-md-8 mt-4 mx-auto'>
<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="" placeholder="Name"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="" placeholder="www.@examples.com"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="" placeholder="07XXXXXXXX"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputMessage" class="col-sm-2 col-form-label">Message</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="Message"/>
    </div>
  </div>
</form>
</div>
<br/>
<button type="button" className="btn btn-success">
   Send Message
  </button>
</div>
</div>
  );
}
export default DisplayAd;
