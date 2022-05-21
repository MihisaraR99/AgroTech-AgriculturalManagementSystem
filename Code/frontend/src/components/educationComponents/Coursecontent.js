import React from "react";
import { Link,useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";


function Coursecontent(){
    const {id} = useParams();
    const [course_id, setcrsid] = useState("");
   const [course_name, setcrsName] = useState("");
  const [ course_category, setcategory] = useState("");
  const [course_thumbnail, setthumbnail] = useState("");
  const [course_description, setdescription] = useState("");
  const [course_price, setcrsprice] = useState("");
  const [course_institute, setinstitute] = useState("");
  const [lessons, setlessons] = useState("");
  const [video_source, setsource] = useState("");
  const [video_link, setlink] = useState("");
  
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/course/${id}`).then(res => {
          setcrsid(res.data.course_id);
          setcrsName(res.data.course_name);
          setcategory(res.data.course_category);
          setthumbnail(res.data.course_thumbnail);
            setcrsprice(res.data.course_price);
            setsource(res.data.video_source);
            setlink(res.data.video_link);
            setlessons(res.data.lessons);
            setdescription(res.data.course_description);
            setinstitute(res.data.course_institute);
            console.log(res.data);
            })		
        }, [])

    return(
         <div >
        <div class="course_head">
            <h1 class="c_head">{course_name}</h1>
            <p class="c_dis">{course_description}</p>
            <p class="c_dis" style={{fontWeight:"bold"}}>Provided By {course_institute}</p>

           
        </div>
        <div class="crs-bg">
        <center>
        <div class="video-wrapper">
        <iframe width="1000" height="500"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
        </div>
        </center>
        <div class="c_brder">
        <div class="c_lesson"> 
        <div class="ex1"> <center><h1>{course_name}</h1></center>
            {lessons}</div>
        

        </div>
        </div>
        <div   style={{paddingTop:"20px",paddingLeft:"30px"}}> <h2> Student Feedbacks</h2></div>
        <div class="feed-box">
        <div class="input-group"style={{marginBottom:"40px"}}>
  <input type="text"  style={{border:"solid black"}} class="form-control"placeholder="Add your feedack"/>
  <span class="input-group-btn">
    <button class="btn btn-default" id="add-feed"  style={{backgroundColor:"black",border:"solid black",color:"white"}}type="button">ADD</button>
  </span>
</div>

        </div>
          
        <div  style={{paddingBottom:"100px"}}>


        </div>
        </div>
       
        </div>
    
 
     

    )
}

export default Coursecontent;