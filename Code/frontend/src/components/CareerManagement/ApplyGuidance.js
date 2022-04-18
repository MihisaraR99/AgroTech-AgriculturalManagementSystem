import react from "react";
import {link} from "react-router-dom";
import React,{useState}from "react";
import axios from "axios"; 

function ApplyGuidance(){
   /*create state*/
   const [program,setProgram]=useState("");
   const [name_with_in,setname]=useState("");
   const [nameinfull,setFullname]=useState("");
   const [nic_no, setnic]=useState("");
   const [address_g, setaddress]=useState("");
   const [mobile_no, setmobile]=useState("");
   const [email_g, setemail]=useState("");
   const [Ordinarylevel, setordinary]=useState("");
   
  
   /*add*/
   function sendguidanceApplyData(e){
      e.preventDefault();
      alert("Going to Apply for a Guidance Program");
  
      const VacancyApply = {
          program,
          name_with_in,
          nameinfull,
          nic_no,
          address_g,
          mobile_no,
          email_g,
          Ordinarylevel,
          
   }

   /*url*/
   axios.post("http://localhost:8000/api/Applyguidances/",VacancyApply).then(()=>{
      alert("Successfully Submited Your Response");

    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}


 return(  
    
          <div class="main">
    <div class="h1 text-center text-dark" id="pageHeaderTitle">Register for Career Guidance Programs</div>
    <div class="containers" >
    
        <form method="POST" class="appointment-form" id="appointment-form">
                            <div class="value">
                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                        <select name="subject" onChange={(e)=>{
                                            setProgram(e.target.value);
                                        }}>
                                            <option disabled="disabled" selected="selected">Choose Applying Program</option>
                                            <option value="Product Development Training">Product Development Training</option>
                                            <option value="Analytical Chemist Training">Analytical Chemist Training</option>
                                            <option value="Haevy Machinery Training">Haevy Machinery Training</option>
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
            <div class="form-group-1">
                <h2 class="h2new">Personal Information</h2>
                <input class="input" type="text" name="nameinit" id="nameinit" placeholder="Name with Initials" required onChange={(e)=>{
                    setname(e.target.value);
                }} />
                <input class="input" type="text" name="name" id="name" placeholder="Name in Full" required onChange={(e)=>{
                    setFullname(e.target.value);
                }}/>
                <input class="input" type="text" name="nic" id="nic" placeholder="NIC" required onChange={(e)=>{
                    setnic(e.target.value);
                }}/>
                <h2 class="h2new">Contact Details</h2>
                <input class="input" type="text" name="address" id="address" placeholder="Address" required onChange={(e)=>{
                    setaddress(e.target.value);
                }}/>
                <input class="input" type="text" name="mobile" id="mobile" placeholder="Mobile" required onChange={(e)=>{
                    setmobile(e.target.value);
                }}/>
                <input class="input" type="email" name="email" id="email" placeholder="Email" required onChange={(e)=>{
                    setemail(e.target.value);
                }}/>
            
                <h2 class="h2new" >Educational Qualifications</h2>
                <div class="select-list">
                    <select name="type" onChange={(e)=>{
                        setordinary(e.target.value);
                    }} >
                        <option diabled="disabled" slected="selected">Are you Passed Ordinary Level Exam ?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            
            <div class="form-check">
                <input  type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
            </div>
            <button type="button" class="btn btn-primary btn-sm"  onClick={sendguidanceApplyData}>Apply Now </button>
        </form>
    </div>
    </div>

  );
}

export default ApplyGuidance;