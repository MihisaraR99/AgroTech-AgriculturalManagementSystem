import React, { Component } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class DisplayAd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      town: "",
      AgentRef: "",
      heading: "",
      description: "",
      sizeOfArea: "",
      priceRate: "",
      contactName: "",
      email: "",
      phone: "",
      img: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  componentDidMount() {
    const {
      town,
      agentRef,
      heading,
      description,
      sizeofArea,
      priceRate,
      contactName,
      email,
      phone,
      image,
    } = this.props.params;

    this.setState({
      town: town,
      AgentRef: agentRef,
      heading: heading,
      description: description,
      sizeOfArea: sizeofArea,
      priceRate: priceRate,
      contactName: contactName,
      email: email,
      phone: phone,
      img: image,
    });
  }



render() {
    return (
    <div style={{marginTop: '20px'}}>
      <div>
          <br/>
          <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button" style={{marginLeft:"22rem"}}>Back</button>
</div>
    <div class="text-center" >
    
        <br/>
        
        <br/>
  <img  class="rounded" src={this.state.img} alt="..." style={{ width: "40rem" }} />
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
  <p className="mb-0">Town : {this.state.town}</p>
</blockquote>
<blockquote class="blockquote">
  <p className="mb-0" style={{marginLeft:"125px"}}>Area of Land : {this.state.sizeOfArea} Perches</p>
</blockquote>
<blockquote class="blockquote" style={{float: "right"}}>
  <p className="mb-0">AgentRef : {this.state.AgentRef}</p>
</blockquote>
<blockquote class="blockquote">
  <p className="mb-0" style={{marginLeft:"180px"}}>Offered for : {this.state.heading}</p>
</blockquote>
</div>
<br/>
<hr></hr>
<div style={{marginRight: "19rem"}}>
<h1 style={{marginRight: "4.5rem"}}>Property Details</h1>
<br/>
<p style={{marginLeft:"125px", width:"70rem"}}>{this.state.description}</p>
<p></p>
</div>
<br/>
<div className="container p-3 my-3 bg-dark text-white">
  <h1 >Contact Advertiser ({this.state.contactName})</h1>
</div>
<div className='col-md-8 mt-4 mx-auto'>
<h5>Phone : {this.state.phone}</h5>
<h5>Email : {this.state.email}</h5>

</div>
<br/>
<button onClick={() => window.location = `mailto:${this.state.email}`} className="btn btn-success">Contact Me</button>
  <br/>
</div>
<br/>
</div>
</div>
  )
}
}
export default withParams(DisplayAd);