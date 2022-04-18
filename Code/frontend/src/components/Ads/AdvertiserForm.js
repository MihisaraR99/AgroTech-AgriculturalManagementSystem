import React, { useState } from "react";
import axios from "axios";
import adformback2 from "./img/adformback2.jpg";


const AdvertiserForm = () => {
  const [type, setType] = useState("Something else here");
  const [town, setTown] = useState("");
  const [AgentRef, setAgentRef] = useState("");
  const [heading, setheading] = useState("");
  const [description, setdescription] = useState("");
  const [sizeOfArea, setsizeOfArea] = useState("");
  const [priceRate, setpriceRate] = useState("");
  const [contactName, setcontactName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [img, setImg] = useState("");

  const sendData = async (e) => {
    const newAd = {
      type,
      town,
      AgentRef,
      heading,
      description,
      sizeOfArea,
      priceRate,
      contactName,
      email,
      phone,
      img,
    };

    axios
      .post("http://localhost:8000/api/Ads", newAd)
      .then(() => {
        alert("Advertisment Added");
      })
      .catch((err) => {
        alert(err);
      });

    e.preventDefault();
  };

  return (
    <div style={{  backgroundImage: `url(${adformback2})`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', }}>
      <br/>
      <h1 style={{fontFamily: "Georgia" ,fontSize: "100px", textAlign:"center", color:"white"}}>Advertiser Form</h1>
      <br/>
      <div >
      
      </div>
    <div className="col-md-8 mt-4 mx-auto" style={{ fontWeight: "bold" , fontFamily: "sans-serif", border: "3px solid green", margin: "2px"}}>
      
      <br />
      <form onSubmit={sendData} style={{margin: "20px"}}>
        <br />
        <div className="row mb-3">
          <label class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>Type</label>
          <div className="col-sm-10">
            <div class="dropdown">
              <a
                class="btn btn-secondary dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#1bb004" }}
              >
                {type}
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li
                  onClick={(e) => {
                    setType(e.target.textContent);
                  }}
                  value="action"
                >
                  Cinnamon
                </li>
                <li
                  onClick={(e) => {
                    setType(e.target.textContent);
                  }}
                >
                  Coconut
                </li>
                <li
                  onClick={(e) => {
                    setType(e.target.textContent);
                  }}
                >
                  Tea
                </li>
                <li
                  onClick={(e) => {
                    setType(e.target.textContent);
                  }}
                >
                  Rubber
                </li>
                <li
                  onClick={(e) => {
                    setType(e.target.textContent);
                  }}
                >
                  Waterfront
                </li>
                <li
                  onClick={(e) => {
                    setType(e.target.textContent);
                  }}
                >
                  Something else here
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>Town</label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="text"
              className="form-control"
              
              onChange={(e) => {
                setTown(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>
            AgentRef
          </label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="text"
              className="form-control"
              
              onChange={(e) => {
                setAgentRef(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>
            Heading
          </label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="text"
              className="form-control"
              
              onChange={(e) => {
                setheading(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>
            Description
          </label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="text"
              className="form-control"
              
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>
            Size of Area
          </label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="text"
              className="form-control"
              
              onChange={(e) => {
                setsizeOfArea(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>
            Price Rate
          </label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="text"
              className="form-control"
             
              onChange={(e) => {
                setpriceRate(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>
            Contact Name
          </label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="text"
              className="form-control"
              
              onChange={(e) => {
                setcontactName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>
            Email
          </label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="email"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#D3D3D3"}}>
            Phone
          </label>
          <div className="col-sm-10">
            <input style={{backgroundColor:"#D3D3D3"}}
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
          </div>
        </div>
        <br />
        <div className="form-group my-4">
          <label className="my-1" style={{color:"#D3D3D3"}}>Image</label>
          <input style={{backgroundColor:"#D3D3D3"}}
            type="text"
            className="form-control"
            placeholder="Image"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#1bb004"}}
          onClick={sendData}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default AdvertiserForm;
