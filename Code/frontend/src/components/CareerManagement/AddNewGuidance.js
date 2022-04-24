import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; 


function AddNewGuidance(){
   /*create state*/
   const [programNo,setproNo]=useState("");
   const [programName,setproName]=useState("");
   const [programDescription,setDescription]=useState("");
   const [programImage, setImage]=useState("");
   const [publishedDate,setPublishDate]=useState("");
   const [formErrors, setFormErrors] = useState({});
   const [programNoError, setProgramNoError]=useState({});
   const [errors, setErrors] = useState([]);

   /*add*/
   function sendProgrammData(e){
      e.preventDefault();
      alert("Going to add New Program");
      let hasErrors = false;

      if (programNo.length <= 0) {
         hasErrors = true;
         setErrors((prev) => [...prev, "programNoError"]);
       }

       if (hasErrors) {
         return;
       } else {
      const newProgram = {
       programNo,
       programName,
       programDescription,
       programImage,
       publishedDate,
   };

   /*url*/
   axios.post("http://localhost:8000/api/AddGuidances/",newProgram).then(()=>{
      alert("Program Added");

     
    }).catch((err)=>{
      alert(err)
    });
    window.location.href = "/GuidanceAdmin";
   
   }
}

 return(  
    <div class="mains"> 
    <div class="wrapper">
    <div class="title">
       Add Career Guidance Programs
      </div>
      <div class="form" >
        <div class="inputfield">
            <label>Program No</label>
            <input type="text" class="input" required onChange={(e)=>{
               setproNo(e.target.value);
            }}/>
            {errors.includes("programNoError") && (
              <p class="alert-txt">Please Enter Valid Program No</p>
            )}
         </div>
         <div class="inputfield">
            <label>Program Name</label>
            <input type="text" class="input" required onChange={(e)=>{
               setproName(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Description</label>
            <input type="text" class="input" required onChange={(e)=>{
               setDescription(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Published Date</label>
            <input type="date" class="input" required onChange={(e)=>{
                  setPublishDate(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Image</label>
            <input type="link" class="input"  onChange={(e)=>{
                  setImage(e.target.value);
            }}/>
            <div class="value">
                                <div class="input-group js-input-file">
                                    <input class="input-file" type="file" name="image" id="file"/>
                                    <span class="input-file__info">No file chosen</span>
                                </div> 
                            </div>
         </div>
                       
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendProgrammData}> Add </button>
           
        </div>
      </div>
</div>
    </div>
    
    );
}

export default AddNewGuidance;