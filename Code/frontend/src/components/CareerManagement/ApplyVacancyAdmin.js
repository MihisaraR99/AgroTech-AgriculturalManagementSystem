import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 

function ApplyVacancyAdmin(){
    const [applyvacancy, setApplyVacancy] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/Applyvacancies/all/").then(res => {
           setApplyVacancy(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/Applyvacancies/${id}`).then((res) => {
              alert("Applicant Deleted Successfully!");
            });
            window.location.reload(false);
          };


    return(
       <div>
          
           <div class="h1 text-center text-dark" id="pageHeaderTitle">Career Vacancy Applicants Dashboard</div>

    <div class="card shodow mb-4">
        <div class="card-header py-3">
           
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Name with Initials</th>
                            <th>Full Name</th>
                            <th>DOB</th>
                            <th>NIC</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>LinkedIn</th>
                            <th>O/L</th>
                            <th>A/L</th>
                            <th>Degeree</th>
                            <th>CV</th>
                            <th>Delete</th>
                            <th>Call for Interview</th>
                        </tr>
                    </thead>
                    <tbody>
                    {applyvacancy && applyvacancy.map((apply, i) => (
                         <tr data-status="active">
                        <td>{apply.position}</td>
                        <td>{apply.name_with_init}</td>
                        <td>{apply.namefull}</td>
                        <td>{apply.dob}</td>
                        <td>{apply.nicNo}</td>
                        <td>{apply.Address}</td>
                        <td>{apply.Mobile}</td>
                        <td>{apply.Email}</td>
                        <td>{apply.linkedIn}</td>
                        <td>{apply.Ordinarylevel}</td>
                        <td>{apply.Advancedlevel}</td>
                        <td>{apply.Degree}</td>
                        <td>{apply.CV}</td>

                        <td>
                        <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(apply._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link> 
                        </td>
                        <td>
                        <button className="btn btn-warning" > <a href="mailto://mail.google.com/"> Send Mail </a></button> 
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>

</div>  
       
        );
    }
export default ApplyVacancyAdmin;