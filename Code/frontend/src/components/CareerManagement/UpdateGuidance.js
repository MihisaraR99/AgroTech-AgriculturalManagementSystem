import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import React,{useState} from "react";
import axios from "axios"; 

function UpdateGuidance(){
    
   const {id} = useParams();
   /*create state*/
   const [programNo,setproNo]=useState("");
   const [programName,setproName]=useState("");
   const [programDescription,setDescription]=useState("");
   const [programImage, setImage]=useState("");
   const [publishedDate,setPublishDate]=useState("");
 
   /*add*/

   function sendProgrammData(e){
      e.preventDefault();
      alert("Going to Update Program");
  
      const newProgram = {
       programNo,
       programName,
       programDescription,
       programImage,
       publishedDate,
   }
  
   /*url*/
   axios.put(`http://localhost:8000/api/AddGuidances/${id}`,newProgram).then(()=>{
      alert("Program Updated");

    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}
useEffect(() => {
    axios.get(`http://localhost:8000/api/AddGuidances/${id}`).then(res => {
        setDescription(res.data.programDescription);
        setproName(res.data.programName);
        setproNo(res.data.programNo);
        setImage(res.data.programImage);
        setPublishDate(res.data.publishedDate);
        console.log(res.data);
        })		
    }, []) 

 return(  
    <div class="mains"> 
    <div class="wrapper">
    <div class="title">
       Add/Update Creer Guidance Programs
      </div>
      <div class="form" >
        <div class="inputfield">
            <label>Program No</label>
            <input value={programNo} type="text" class="input" required onChange={(e)=>{
               setproNo(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Program Name</label>
            <input value={programName} type="text" class="input" required onChange={(e)=>{
               setproName(e.target.value);
            }}/>
         </div>
         <div class="inputfield">
            <label>Description</label>
            <input value={programDescription} type="text" class="input" required onChange={(e)=>{
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
            <input value={programImage} type="link" class="input"  onChange={(e)=>{
                  setImage(e.target.value);
            }}/>
            <div class="value">
                                <div class="input-group js-input-file">
                                    <input class="input-file" type="file" name="image" id="file"  />
                                    <span class="input-file__info">No file chosen</span>
                                </div> 
                            </div>
         </div>
                       
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendProgrammData}>Update</button>
           
        </div>
      </div>
</div>
    </div>
    
    );
}

export default UpdateGuidance;