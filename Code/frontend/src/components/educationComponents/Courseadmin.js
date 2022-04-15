import React from "react";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import Axios from "axios";
    


function Courseadmin(){


    const [listOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:8000/api/course/all").then((response) => {
        setListOfUsers(response.data);

         
        var input = document.getElementById( 'upload' );
        var infoArea = document.getElementById( 'upload-label' );
        
        input.addEventListener( 'change', showFileName );
        function showFileName( event ) {
          var input = event.srcElement;
          var fileName = input.files[0].name;
          infoArea.textContent = 'File name: ' + fileName;
        }

      });
    }, [])

    return(

       <body class="adminbody">
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6"><h2><b>Manage   </b><b>Courses</b></h2></div>
                <div>
                <div class="container mt-5">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa-solid fa-plus"></i> <span>Add New Course</span></button>
                   


        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Course</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                       
                        <form id="insertForm" class="courseinsert-form">
              
  
                    <div class="tab">
                  <p><input placeholder="Course Name" class="form-control border-2" oninput="this.className = ''" name="fname"/></p>

                 <p><select class="form-select" aria-label="Default select example">
                           <option selected >Select Category</option>
                   <option value="1">Animal Health</option>
                    <option value="2">Seed Science</option>
                    <option value="3">Soil Science</option>
                    <option value="3">Soil Science</option>
                     </select>
</p>
          
            <div class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                <input id="upload"  type="file"  onchange="showFile;" class="form-control border-2"/>
                <label id="upload-label" for="upload" class="font-weight-light text-muted">Course Thumbnail</label>
                <div class="input-group-append">
                    <label for="upload" class="btn btn-light m-0 rounded-pill px-4"><i class="fa fa-cloud-upload mr-2 text-muted"></i><small class="text-uppercase font-weight-bold text-muted">Choose file</small></label>

                </div>

            </div>

    <p><div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" placeholder="Course Fee" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>
</p>    

 <p>
 <div class="form-group">
  <textarea class="form-control" id="exampleFormControlTextarea3" rows="5"placeholder="Course Description"></textarea>
</div>
 </p>


    <p><input placeholder="Provide Institute" class="form-control border-2" oninput="this.className = ''" name="fname"/></p>
    <p>
 <div class="form-group">

  <textarea class="form-control" id="exampleFormControlTextarea3" rows="7"placeholder="Course Content"></textarea>
</div>
 </p>
 <p><input placeholder="Video Source" class="form-control border-2" oninput="this.className = ''" name="fname"/></p>
               
                      
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                    </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
 
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Course ID&nbsp;</th>
                        <th>Course Name</th>
                        <th>Category&nbsp;</th>
                        <th>Institute&nbsp;</th>
                        <th>Enrolements</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-status="active">
                        <td>1</td>
                        <td>Soil Science</td>
                        <td>Soil</td>
                        <td><span class="label label-success">Hemas Agro</span></td>
                        <td>800</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                       
                    </tr>
        {listOfUsers.map((courses) => {
            return (
                <tr data-status="active">
                <td></td>
                <td>{courses.course_name}</td>
                <td>{courses.course_category}</td>
                <td><span class="label label-success">{courses.course_institute}</span></td>
                <td>800</td>
                <td><a href="#" class="btn btn-sm manage">Manage</a></td>
               
            </tr>
            
            
           
            );
          
          })}
                   
                </tbody>
            </table>
        </div> 
    </div>   
</div> 
</body>
    );




    }

export default Courseadmin;