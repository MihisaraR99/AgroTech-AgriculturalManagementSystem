import React,{useState} from "react";
import AddApp from "../HealthCare/Img/gappointment.png";
import axios from "axios";

import { NavLink } from "react-router-dom";

export default function AddAppointments(){

  /*01--create state*/
const [CustomerName,setCustomerName] = useState("");
const [NIC,setNIC] = useState("");
const [AnimalType,setAnimalType] = useState("");
const [ContactNo,setContactNo] = useState("");
const [Address,setAddress] = useState("");
const [Date,setDate] = useState("");
const [Time,setTime] = useState("");


/*02--add*/
function sendAppointment(e){
  e.preventDefault();
  alert("Going to add new Appointment");

  const newAppointment = {
    CustomerName,
    NIC,
    AnimalType,
    ContactNo,
    Address,
    Date,
    Time
  }
 
  /*url*/
  axios.post("http://localhost:8000/api/app/add",newAppointment).then(()=>{
    alert("Appointment Added");

   
  }).catch((err)=>{
    alert(err)
    console.log(err);
  })
}


   
      return(
       <>  

          <section className="addapp">
            <div className="container mt-5">
              <div className= "addapp_content">
                <div className="addapp-form">
                  <h2 className="form-title"> Get an Appointment</h2><br/>
                  <form className="get-appointment" id="appointment-form"
                  onSubmit={sendAppointment}>


                    <div class="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="name" id="name" autoComplete="off"
                      placeholder="Your Name" onChange={(e)=>{
                        setCustomerName(e.target.value);
                  }}
           
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="NIC">
                      <i class="zmdi zmdi-assignment-account material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="NIC" id="NIC" autoComplete="off"
                      placeholder="Your NIC" onChange={(e)=>{
                        setNIC(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="AnimalType">
                      <i class="zmdi zmdi-face material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="AnimalType" id="AnimalType" autoComplete="off"
                      placeholder="Breed" onChange={(e)=>{
                        setAnimalType(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="ContactNo">
                      <i class="zmdi zmdi-phone-in-talk material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="ContactNo" id="ContactNo" autoComplete="off"
                      placeholder="Your Mobile No" onChange={(e)=>{
                        setContactNo(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="Address">
                      <i class="zmdi zmdi-home material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Address" id="Address" autoComplete="off"
                      placeholder="Your Address" onChange={(e)=>{
                        setAddress(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="Date">
                      <i class="zmdi zmdi-calendar material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Date" id="Date" autoComplete="off"
                      placeholder="Date Required" onChange={(e)=>{
                        setDate(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="Time">
                      <i class="zmdi zmdi-time material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Time" id="Time" autoComplete="off"
                      placeholder="Time Required" onChange={(e)=>{
                        setTime(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">I accept the Terms of Use & Privacy Policy</label>
                    </div>

                    <div className="form-group form-button">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                  </form>
                </div>     
                    <div className="appointment-image">
                      <figure>
                        <img src={AddApp} alt="getAppointment pic"/>
                      </figure>
                      <NavLink to="../HealthCare/MyAppointment" className="appointment-image-link">I am already get an appointment</NavLink>
                    </div>

              </div>  
            </div>
          </section>
        </>     
            
              
        
    )
}