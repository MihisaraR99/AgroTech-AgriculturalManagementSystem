import React from "react";
import AddApp from "../HealthCare/Img/gappointment.png";

import { NavLink } from "react-router-dom";

export default function AddAppointments(){
   
      return(
       <>  

          <section className="addapp">
            <div className="container mt-5">
              <div className= "addapp_content">
                <div className="addapp-form">
                  <h2 className="form-title"> Get an Appointment</h2><br/>
                  <form className="get-appointment" id="appointment-form">

                    <div class="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="name" id="name" autoComplete="off"
                      placeholder="Your Name" 
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="NIC">
                      <i class="zmdi zmdi-assignment-account material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="NIC" id="NIC" autoComplete="off"
                      placeholder="Your NIC" 
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="AnimalType">
                      <i class="zmdi zmdi-face material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="AnimalType" id="AnimalType" autoComplete="off"
                      placeholder="Breed" 
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="ContactNo">
                      <i class="zmdi zmdi-phone-in-talk material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="ContactNo" id="ContactNo" autoComplete="off"
                      placeholder="Your Mobile No" 
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="Address">
                      <i class="zmdi zmdi-home material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Address" id="Address" autoComplete="off"
                      placeholder="Your Address" 
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="Date">
                      <i class="zmdi zmdi-calendar material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Date" id="Date" autoComplete="off"
                      placeholder="Date Required" 
                    />
                    </div>
                    <br/>

                    <div class="form-group">
                    <label htmlFor="Time">
                      <i class="zmdi zmdi-time material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Time" id="Time" autoComplete="off"
                      placeholder="Time Required" 
                    />
                    </div>
                    <br/>

                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Terms and condition apply</label>
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