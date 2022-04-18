import react from "react";
import {link} from "react-router-dom"

function CandidateRegister(){
 return(  
    
    <div class="main">
    <div class="h1 text-center text-dark" id="pageHeaderTitle">Register as an Candidate</div>
    <div class="containers" >
    
        <form method="POST" class="appointment-form" id="appointment-form">
                          
            <div class="form-group-1">
                <h2 class="h2new">Personal Information</h2>
                <input class="input" type="text" name="nameinit" id="nameinit" placeholder="Name with Initials" required />
                <input class="input" type="text" name="name" id="name" placeholder="Name in Full" required />
                <input class="input" type="date" name="dob" id="dob" placeholder="Date of Birth" required />
                <input class="input" type="text" name="nic" id="nic" placeholder="NIC" required/>
                <h2 class="h2new">Contact Details</h2>
                <input class="input" type="text" name="address" id="address" placeholder="Address" required/>
                <input class="input" type="text" name="mobile" id="mobile" placeholder="Mobile" required/>
                <input class="input" type="email" name="email" id="email" placeholder="Email" required/>
                <input class="input" type="link" name="linkedin" id="linkedin" placeholder="LinkedIn" required/>
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
                                    <input class="input-file" type="file" name="file_cv" id="file"/>
                                    <label class="label--file" for="file">Choose file</label>
                                    <span class="input-file__info">No file chosen</span>
                                    <h6 class="h6new">Upload your CV/Resume or any other relevant file. Max file size 50 MB</h6>
                                </div>
                                
                            </div>
            <div class="form-check">
                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
            </div>
            <button type="button" class="btn btn-primary btn-sm">Register Now </button>
        </form>
    </div>
    </div>

  );
}

export default CandidateRegister;