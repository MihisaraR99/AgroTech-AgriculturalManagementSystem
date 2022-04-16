import React from "react";

import { useState } from "react/cjs/react.production.min";

export default function AddAppointments(){
   

      /*Create state
      const[AppointmentNo,setAppointment] = useState("");
      const[CustomerName,setEmail] = useState("");
      const[NIC,setNIC] = useState("");
      const[AnimalType,setAnimalType] = useState("");
      const[ContactNo,setConatcNo] = useState("");
        
      function sendAppointmentData(e){
        
      }
      */
      return(
      <div className="container">
        <h1> Get an Appointment</h1>
        <form>
        <div class="form-group">

          <label for="No">Appontment NO</label>
          <input type="text" class="form-control" id="appno" placeholder="Auto Generated"/>
          
        </div>
        <div class="form-group">
          <label for="oname">Owner Name</label>
          <input type="text" class="form-control" id="oname" placeholder="Enter Your Name"/>
        </div>
          
        <div class="form-group">
          <label for="onic">NIC</label>
          <input type="text" class="form-control" id="onic" placeholder="NIC"/>
        </div>

        <div class="form-group">
          <label for="breed">Animal Type</label>
          <input type="text" class="form-control" id="type" placeholder="Breed"/>
        </div> 

        <div class="form-group">
          <label for="contact">Contact No</label>
          <input type="text" class="form-control" id="contact" placeholder="Mobile Number"/>
        </div>               

        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>    
        
    )
}