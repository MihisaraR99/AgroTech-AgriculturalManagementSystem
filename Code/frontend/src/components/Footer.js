import React, { Component } from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <div>
    <hr/>
      
    
<footer className="page-footer font-small teal pt-4">


<div className="container-fluid text-center text-md-left">

<div className="row">

<div className="col-md-6 mt-md-0 mt-3">
<h5 className="text-uppercase font-weight-bold">Navigation</h5>
<a href=''>Home</a><br/>
<a href=''>Services</a><br/>
<a href=''>Event & Contact Support</a><br/>
<a href=''>Contact</a><br/>
<a href=''>Help</a><br/>

</div>


<div className="col-md-6 mb-md-0 mb-3">
<h5 className="text-uppercase font-weight-bold">About</h5>
<p>Welcome to AgroTech LLC, your number one source for all things agricultural. 
We're dedicated to providing you the best of agricultural product, with a focus on dependability. 
customer service, and farmer support.
We're working to turn our passion for agricultural products into a booming online store. 
We hope you enjoy our products as much as we enjoy offering them to you.
</p>
</div>

</div>

</div>
</footer>

</div>
  )
}


export default Footer;