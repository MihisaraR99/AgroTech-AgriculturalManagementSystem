import React from "react";

function AdvertiserRegistration() {
  return (
      <div className="col-md-8 mt-4 mx-auto">
          <h1 style={{fontFamily: "sans-serif", fontSize: "70px", textAlign:"center"}}>Advertiser Registration</h1>
          <br/>
   <form >
    <div class="row" >
    <div class="col">
     
      <div class="form-outline">
        <input type="text" id="form8Example1" class="form-control" placeholder="Name"/>
        
      </div>
    </div>
    <div class="col">
      
      <div class="form-outline">
        <input type="text" id="form8Example2" class="form-control" placeholder="NIC"/>
        
      </div>
    </div>
  </div>
  
  <hr />
  
  <div class="row">
    <div class="col">
      
      <div class="form-outline">
        <input type="text" id="form8Example3" class="form-control" placeholder="Address"/>
        
      </div>
    </div>
    <div class="col">
      
      <div class="form-outline">
        <input type="text" id="form8Example4" class="form-control" placeholder="Email"/>
        
      </div>
    </div>
    <div class="col">
      
      <div class="form-outline">
        <input type="tel" id="form8Example5" class="form-control" placeholder="Mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
        
      </div>
    </div>
  </div>
  <br/>
  <br/>
  <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#1bb004"}}
          
        >
          Register
        </button>
  </form>
  </div>

  );
}
export default AdvertiserRegistration;
