import React,{useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"
import updateimg from "./Img/update.png"

export default function AddAppointments(){

    const {state} = useLocation();
    // const location = useLocation()
    // const state = location.state
const [CustomerName,setCustomerName] = useState("");
const [NIC,setNIC] = useState("");
const [AnimalType,setAnimalType] = useState("");
const [ContactNo,setContactNo] = useState("");
const [Address,setAddress] = useState("");
const [Date,setDate] = useState("");
const [Time,setTime] = useState("");

useEffect(()=>{
    setCustomerName(state.appoint.CustomerName)
    setNIC(state.appoint.NIC)
    setAnimalType(state.appoint.AnimalType)
    setContactNo(state.appoint.ContactNo)
    setAddress(state.appoint.Address)
    setDate(state.appoint.Date)
    setTime(state.appoint.Time)
},[])

/*02--add*/
function sendAppointment(e){
  e.preventDefault();
  alert("Update Appointment");

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
  axios.put(`http://localhost:8000/api/app/update/${state.appoint._id}`,newAppointment).then(()=>{
    alert("Appointment Updated");

   
  }).catch((err)=>{
    alert(err)
    console.log(err);
  })
}


   
      return(
       <div  style={{  backgroundImage: `url(${updateimg})` , paddingTop:"30px", paddingBottom:"30px", marginBottom:"30px"}}>  

          <section className="addapp">
            <div className="container mt-5">
              <div className= "addapp_content">
                <div className="addapp-form">
                  <h2 className="form-title">Update An Appointment</h2><br/>
                  <div className="row">
                  <div className="col col-6">
                  <form className="get-appointment" id="appointment-form"
                  onSubmit={sendAppointment}>


                    <div class="form-group">
                    {/* <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name zmdi-hc-2x"></i>
                    </label> */}
                    <input type="text" name="name" id="name" autoComplete="off"
                      placeholder="Your Name" value={CustomerName}
                    disabled
           
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    {/* <label htmlFor="NIC">
                      <i class="zmdi zmdi-assignment-account material-icons-name zmdi-hc-2x"></i>
                    </label> */}
                    <input type="text" name="NIC" id="NIC" autoComplete="off"
                      placeholder="Your NIC" value={NIC}
                      disabled
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    {/* <label htmlFor="AnimalType">
                      <i class="zmdi zmdi-face material-icons-name zmdi-hc-2x"></i>
                    </label> */}
                    <input type="text" name="AnimalType" id="AnimalType" autoComplete="off"
                      placeholder="Breed" value={AnimalType}
                      disabled
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    {/* <label htmlFor="ContactNo">
                      <i class="zmdi zmdi-phone-in-talk material-icons-name zmdi-hc-2x"></i>
                    </label> */}
                    <input type="text" name="ContactNo" id="ContactNo" autoComplete="off"
                      placeholder="Your Mobile No" value={ContactNo}
                      disabled
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    {/* <label htmlFor="Address">
                      <i class="zmdi zmdi-home material-icons-name zmdi-hc-2x"></i>
                    </label> */}
                    <input type="text" name="Address" id="Address" autoComplete="off"
                      placeholder="Your Address" value={Address}
                      disabled
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    {/* <label htmlFor="Date">
                      <i class="zmdi zmdi-calendar material-icons-name zmdi-hc-2x"></i>
                    </label> */}
                    <input type="text" name="Date" id="Date" autoComplete="off"
                      placeholder="Date Required" value={Date} onChange={(e)=>{
                        setDate(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    {/* <label htmlFor="Time">
                      <i class="zmdi zmdi-time material-icons-name zmdi-hc-2x"></i>
                    </label> */}
                    <input type="text" name="Time" id="Time" autoComplete="off"
                      placeholder="Time Required" value={Time} onChange={(e)=>{
                        setTime(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div className="form-group form-button">
                    <button type="submit" class="btn btn-primary">Update</button>
                    </div>

                  </form>
                  </div>
                  </div>
                </div>

              </div>  
            </div>
          </section>
        </div>     
            
              
        
    )
}

