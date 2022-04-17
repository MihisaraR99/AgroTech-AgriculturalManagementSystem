import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class AdminUpdateAds extends Component {
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

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.params.id;

    const {
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
    } = this.state;

    const data = {
      town: town,
      AgentRef: AgentRef,
      heading: heading,
      description: description,
      sizeOfArea: sizeOfArea,
      priceRate: priceRate,
      contactName: contactName,
      email: email,
      phone: phone,
      img: img,
    };
    console.log(data);

    axios.put(`http://localhost:8000/api/Ads/${id}`, data).then((res) => {
      alert("Ad updated successfully!");
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
      <div className="col-md-8 mt-4 mx-auto">
        <h1
          className="h3 mb-3 font-weight-normal"
          style={{
            color: "#111",
            fontFamily: "Helavetica Neue",
            fontSize: "200px",
            fontWeight: "bold",
            letterSpacing: "-1px",
            lineHeight: "1",
            textAlign: "center",
          }}
        >
          Edit Member
        </h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Town</label>
            <input
              type="text"
              className="form-control"
              name="town"
              placeholder="town"
              value={this.state.town}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>AgentRef</label>
            <input
              type="text"
              className="form-control"
              name="AgentRef"
              placeholder="AgentRef"
              value={this.state.AgentRef}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Heading</label>
            <input
              type="text"
              className="form-control"
              name="heading"
              placeholder="heading"
              value={this.state.heading}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Size_of_Area</label>
            <input
              type="text"
              className="form-control"
              name="sizeOfArea"
              placeholder="sizeOfArea"
              value={this.state.sizeOfArea}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>PriceRate</label>
            <input
              type="text"
              className="form-control"
              name="priceRate"
              placeholder="priceRate"
              value={this.state.priceRate}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>ContactName</label>
            <input
              type="text"
              className="form-control"
              name="contactName"
              placeholder="contactName"
              value={this.state.contactName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Image</label>
            <input
              type="text"
              className="form-control"
              name="img"
              placeholder="img"
              value={this.state.img}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
        </form>
      </div>
    );
  }
}

export default withParams(AdminUpdateAds);
