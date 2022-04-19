import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 

function AddNewVacancies(){
   /*create state*/
   const [vacancyNo,setvacancyNo]=useState("");
   const [jobTitle,setTitle]=useState("");
   const [jobDescription,setDescription]=useState("");
   const [publishedDate,setPublishDate]=useState("");
   const [jobImage, setImage]=useState("");
  
   /*add*/
   function sendvacancyData(e){
      e.preventDefault();
      alert("Going to add New Vacancy");
  
      const newVacancy = {
       vacancyNo,
       jobTitle,
       jobDescription,
       publishedDate,
       jobImage,
   }

   /*url*/
   axios.post("http://localhost:8000/api/AddVacancies/",newVacancy).then(()=>{
      alert("Vacancy Added");

    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}

 return(  
   <div class="mains"> 
    <div class="wrapper">
    <div class="title">
       Add New Vacancies
      </div>
      <div class="form">
        <div class="inputfield">
            <label>VacancyNo</label>
            <input type="text" class="input" required onChange={(e)=>{
                setvacancyNo(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Job Title</label>
            <input type="text" class="input" required onChange={(e)=>{
               setTitle(e.target.value);
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
            <input type="link" class="input" onChange={(e)=>{
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendvacancyData}> <Link to={`/VacancyAdmin/`} > Add </Link></button>
           
        </div>
      </div>
</div>
</div>
    );
}

export default AddNewVacancies;