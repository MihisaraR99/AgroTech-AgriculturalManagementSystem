import react from "react";
import {link} from "react-router-dom";
import React,{useState}from "react";
import axios from "axios"; 

function ApplyVacancy(){
     /*create state*/
     const [position,setPosition]=useState("");
     const [name_with_init,setName]=useState("");
     const [namefull,setFullName]=useState("");
     const [dob,setDOB]=useState("");
     const [nicNo, setNIC]=useState("");
     const [Address, setAddress]=useState("");
     const [Mobile, setMobile]=useState("");
     const [Email, setEmail]=useState("");
     const [linkedIn, setLinkedin]=useState("");
     const [Ordinarylevel, setOrdinary]=useState("");
     const [Advancedlevel, setAdvanced]=useState("");
     const [Degree, setDegree]=useState("");
     const [CV, setCV]=useState("");
    
     /*add*/
     function sendvacancyApplyData(e){
        e.preventDefault();
        alert("Going to Apply for a Vacancy");
    
        const VacancyApply = {
            position,
            name_with_init,
            namefull,
            dob,
            nicNo,
            Address,
            Mobile,
            Email,
            linkedIn,
            Ordinarylevel,
            Advancedlevel,
            Degree,
            CV,
     }
  
     /*url*/
     axios.post("http://localhost:8000/api/Applyvacancies/",VacancyApply).then(()=>{
        alert("Successfully Submited Your Response");
  
      }).catch((err)=>{
        alert(err)
        console.log(err);
      })
  }
  

 return(  
    <div class="bdy">
 <div class="main">
    <div class="h1 text-center text-dark" id="pageHeaderTitle">Apply for Vacancies</div>
    <div class="containers" >
    
        <form method="POST" class="appointment-form" id="appointment-form">
                            <div class="value">
                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                        <select name="subject">
                                            <option disabled="disabled" selected="selected">Choose Applying Position</option>
                                            <option>Veterinarian</option>
                                            <option>Warehouse Manager</option>
                                            <option>Vegetable Supplier</option>
                                            <option>Fruit Supplier</option>
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
            <div class="form-group-1">
                <h2 class="h2new">Personal Information</h2>
                <input class="input" type="text" name="nameinit" id="nameinit" placeholder="Name with Initials" required onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                <input class="input" type="text" name="name" id="name" placeholder="Name in Full" required onChange={(e)=>{
                    setFullName(e.target.value);
                }} />
                <input class="input" type="date" name="dob" id="dob" placeholder="Date of Birth" required onChange={(e)=>{
                    setDOB(e.target.value);
                }} />
                <input class="input" type="text" name="nic" id="nic" placeholder="NIC" required onChange={(e)=>{
                    setNIC(e.target.value);
                }}/>
                <h2 class="h2new">Contact Details</h2>
                <input class="input" type="text" name="address" id="address" placeholder="Address" required onChange={(e)=>{
                    setAddress(e.target.value);
                }}/>
                <input class="input" type="text" name="mobile" id="mobile" placeholder="Mobile" required onChange={(e)=>{
                    setMobile(e.target.value);
                }}/>
                <input class="input" type="email" name="email" id="email" placeholder="Email" required onChange={(e)=>{
                    setEmail(e.target.value);
                }}/> 
                <input class="input" type="link" name="linkedin" id="linkedin" placeholder="LinkedIn" required onChange={(e)=>{
                    setLinkedin(e.target.value);
                }}/>
                <h2 class="h2new">Educational Qualifications</h2>
                <div class="select-list">
                    <select name="course_type" id="course_type">
                        <option slected value="">Are you Passed Advanced Level Exam ?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <div class="form-group-2">
                <div class="select-list">
                    <select name="confirm_type" id="confirm_type">
                    <option slected value="">Are you Passed Ordinary Level Exam ?</option>
                        <option  value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="select-list">
                    <select name="confirm_type" id="confirm">
                    <option slected value="">Are you a Degree Holder ?</option>
                        <option seleected value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <h5 class="h5new">Upload Your CV</h5>
                            <div class="value">
                                <div class="input-group js-input-file">
                                    <input class="input-file" type="file" name="file_cv" id="file" onChange={(e)=>{
                                        setCV(e.target.value);
                                    }}/>
                                    <label class="label--file" for="file">Choose file</label>
                                    <span class="input-file__info">No file chosen</span>
                                    <h6 class="h6new">Upload your CV/Resume or any other relevant file. Max file size 50 MB</h6>
                                </div>
                                
                            </div>
            <div class="form-check">
                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
            </div>
            <button type="button" class="btn btn-primary btn-sm"  onClick={sendvacancyApplyData}>Apply Now </button>
        </form>
    </div>
    </div>

    </div>
         
  );
}

export default ApplyVacancy;