import React, { useState } from "react";
import axios from "axios";

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
      image: img,
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
    <div className="col-md-8 mt-4 mx-auto" style={{ fontWeight: "bold" }}>
      <h1>Advertiser Form</h1>
      <br />
      <form onSubmit={sendData}>
        <br />
        <div className="row mb-3">
          <label class="col-sm-2 col-form-label">Type</label>
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
          <label class="col-sm-2 col-form-label">Town</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setTown(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            AgentRef
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setAgentRef(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Heading
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setheading(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Size of Area
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setsizeOfArea(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Price Rate
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setpriceRate(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Contact Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setcontactName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
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
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
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
          <label className="my-1">Image</label>
          <input
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
          class="btn btn-primary"
          style={{ backgroundColor: "#1bb004", alignItems: "center" }}
          onClick={sendData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvertiserForm;
