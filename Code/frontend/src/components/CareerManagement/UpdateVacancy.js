import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import React,{useState} from "react";
import axios from "axios"; 

function UpdateVacancies(){

   const {id} = useParams();
   /*create state*/
   const [vacancyNo,setvacancyNo]=useState("");
   const [jobTitle,setTitle]=useState("");
   const [jobDescription,setDescription]=useState("");
   const [publishedDate,setPublishDate]=useState("");
   const [jobImage, setImage]=useState("");
  
   /*add*/
   function sendvacancyData(e){
      e.preventDefault();
      alert("Going to Update Vacancy");
  
      const newVacancy = {
       vacancyNo,
       jobTitle,
       jobDescription,
       publishedDate,
       jobImage,
   }

   /*url*/
   axios.put(`http://localhost:8000/api/AddVacancies/${id}`,newVacancy).then(()=>{
      alert("Vacancy Updated");

    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
    window.location.href = "/VacancyAdmin";
}
   useEffect(() => {
    axios.get(`http://localhost:8000/api/AddVacancies/${id}`).then(res => {
        setvacancyNo(res.data.vacancyNo);
        setTitle(res.data.jobTitle);
        setDescription(res.data.jobDescription);
        setImage(res.data.jobImage);
        setPublishDate(res.data.publishedDate);
        console.log(res.data);
        })		
    }, []) 

 return(  
   <div class="mains"> 
    <div class="wrapper">
    <div class="title">
       Update Vacancy
      </div>
      <div class="form">
        <div class="inputfield">
            <label>VacancyNo</label>
            <input value={vacancyNo} type="text" class="input" required onChange={(e)=>{
                setvacancyNo(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Job Title</label>
            <input value={jobTitle} type="text" class="input" required onChange={(e)=>{
               setTitle(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Description</label>
            <input value={jobDescription} type="text" class="input" required onChange={(e)=>{
               setDescription(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Published Date</label>
            <input value={publishedDate} type="date" class="input" required onChange={(e)=>{
               setPublishDate(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Image</label>
            <input value={jobImage} type="link" class="input" onChange={(e)=>{
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
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendvacancyData}> <Link to={`/VacancyAdmin/`} >Update </Link></button>
        </div>
      </div>
</div>
</div>
    );
}

export default UpdateVacancies;