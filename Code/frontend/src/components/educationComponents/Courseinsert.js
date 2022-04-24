import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import swal from 'sweetalert';



function Courseinsert() {
    const [listOfCourses, setListOfCourses] = useState([]);
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    sub();
    setIsSubmit(true);
    
  };

  const validate=()=>{
    const errors = {};
    if(!course_name){
        errors.course_name = "Coursename is required!";
       
    }
    if(!course_category){
        errors.course_category = "Course Category is required!";
    }
    if(!course_price){
        errors.course_price = "Course price is required!";
    }
    if(course_price.charAt(0)!="$"){
        errors.course_price = "Please Enter $ sign!";
    }

    if(!course_institute){
        errors.course_institute = "Course institute is required!";
    }
    if(!course_description){
        errors.course_description = "Course description is required!";
    } if(!video_link){
        errors.video_link = "Course link is required!";
    }
    if(!video_source){
        errors.video_source= "Course source is required!";
    }
    return errors;
  }
const sub =() => {
   
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createCourse();
     
    }
}

  
  
  
  const createCourse = () => {
    Axios.post("http://localhost:8000/api/course/", {
        course_id,
        course_name,
        course_category,
        course_thumbnail,
        course_description,
        course_price,
        course_institute,
        lessons,
        video_source,
        video_link,
    }).then((response) => {
        setListOfCourses([
        ...listOfCourses,
        {    course_id,
            course_name,
            course_category,
            course_thumbnail,
            course_description,
            course_price,
            course_institute,
            lessons,
            video_source,
            video_link,
        },
      ]);
    });
    swal({
        title: "Course Added Successfuly!",
        icon: "success",
        confirmButtonText: "OK",
          }).then(function () {
              // Redirect the user
              window.location.href = "/courseadmin";
            });
       
 

  };





   

    return (
      
        <div >
            <body class="insert-body">
            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">

                        <div class="card" id="insert-crd">
                            <div class="insert-header">
                                <h5 class="text-center mb-4">Add New Course</h5>
                            </div>
                            <div class="padding-bot"> </div>
                            <form class="form-card">
                                <div class="row justify-content-between text-left">

                                    <div class="form-group col-sm-6 flex-column d-flex">
                                    <label class="form-control-label px-3">Course ID<span class="text-danger"> *</span></label>  <p><input placeholder="Course Id" id="i-bold" onChange={(event) => {setcrsid(event.target.value);}} class="form-control border-2" oninput="this.className = ''" name="fname" /></p>

                                        <label class="form-control-label px-3">Course Name<span class="text-danger"> *</span></label>  <p><input placeholder="Course Name" id="i-bold" onChange={(event) => {setcrsName(event.target.value);}} class="form-control border-2" oninput="this.className = ''" name="fname" /></p>
                                        <p class="alert-txt">{formErrors.course_name}</p></div>
                                    <div class="form-group col-sm-6 flex-column d-flex">
                                        <label class="form-control-label px-3">Course Category<span class="text-danger"> *</span></label>
                                        <p><select class="form-select border-2" placeholder="Course C" onChange={(event) => {setcategory(event.target.value);}} aria-label="Default select example">
                                            <option selected >Select Category</option>
                                            <option value="Animal Health">Animal Health</option>
                                            <option value="Seed Science">Seed Science</option>
                                            <option value="Seed Science">Crop Science</option>
                                            <option value="Soil Science">Soil Science</option>
                                        </select>
                                        <p class="alert-txt">{formErrors.course_category}</p>
                                        </p>
                                       
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Course Thumbnail<span class="text-danger"> *</span></label> <input type="text" id="mob"  onChange={(event) => {setthumbnail(event.target.value);}}name="mob" placeholder="Course Thumbnail" onblur="validate(4)" /><p>{formErrors.course_thumbnail}</p> </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Provide Institute<span class="text-danger"> *</span></label> <input type="text" id="mob"  onChange={(event) => {setinstitute(event.target.value);}}name="mob" placeholder="Provide Institute" onblur="validate(4)" /><p>{formErrors.course_institute}</p> </div>
                                </div>
                               
                                    
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Course Price<span class="text-danger"> *</span></label> <input type="text"  onChange={(event) => {setcrsprice(event.target.value);}}id="job" name="job" placeholder="Course Price" onblur="validate(5)" />
                                    <p class="alert-txt">{formErrors.course_price}</p>
                                    </div>
                                
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Course Description<span class="text-danger"> *</span></label> <p>
                                        <div class="form-group">
                                            <textarea class="form-control"  onChange={(event) => {setdescription(event.target.value);}} id="exampleFormControlTextarea3" rows="3" placeholder="Course Description"></textarea>
                                        </div>
                                    </p> <p class="alert-txt">{formErrors.course_description}</p></div>
                                </div>

                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Other Texts<span class="text-danger"> *</span></label> <p>
                                        <div class="form-group">
                                            <textarea class="form-control"  onChange={(event) => {setlessons(event.target.value);}} id="exampleFormControlTextarea3" rows="3" placeholder="Course Description"></textarea>
                                        </div>
                                    </p></div>
                                </div>



                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Course Source<span class="text-danger"> *</span></label> <p><select class="form-select border-2"  onChange={(event) => {setsource(event.target.value);}} aria-label="Default select example">
                                        <option selected >Select Source</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="External Url ">External Url </option>
                                        <option value="Html5(mp4)">Html5(mp4)</option>

                                    </select>
                                    <p class="alert-txt">{formErrors.video_source}</p>
                                    </p>
                                
                                    </div>
                                </div>

                                <div class="row justify-content-between text-left" id="link-input">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Source Link<span class="text-danger"> *</span></label> <input type="text"  onChange={(event) => {setlink(event.target.value);}} id="ans" name="ans" placeholder="Source Link" onblur="validate(6)" /> </div>
                                    <p class="alert-txt">{formErrors.video_link}</p>
                                </div>

                                <div class="row justify-content-end" id="add-btn">
                                    <div class="form-group col-sm-4"><Link to="./Courseadmin"> <button type="submit" onClick= {handleSubmit}class="btn-block btn-primary">Add Course</button></Link> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
</body>

        </div>


    );
}

export default Courseinsert;