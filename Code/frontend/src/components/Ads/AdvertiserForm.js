import React from "react";
import { Link } from "react-router-dom";

function AdvertiserForm() {
  return (
  <div className='col-md-8 mt-4 mx-auto'>
    <h1>Advertiser Form</h1>
   <form>
    <br/>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Type</label>
    <div className="col-sm-10">
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Type
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Action</button>
    <button className="dropdown-item" type="button">Another action</button>
    <button className="dropdown-item" type="button">Something else here</button>
  </div>
</div>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Town</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">AgentRef</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Heading</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Size of Area</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Price Rate</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Availability</label>
    <div className="col-sm-10">
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" for="inlineRadio1">Available</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" for="inlineRadio2">Not Available</label>
</div>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Contact Name</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Phone</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          I agree privacy & policies
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
  
</form>
</div>
  );
}

export default AdvertiserForm;
