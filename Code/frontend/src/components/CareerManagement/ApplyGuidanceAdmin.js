import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 

function ApplyGuidanceAdmin(){
    const [applyguidance, setApplyGuidance] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/Applyguidances/all/").then(res => {
           setApplyGuidance(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/Applyguidances/${id}`).then((res) => {
              alert("Applicant Deleted Successfully!");
            });
            window.location.reload(false);
          };

    return(
       <div>
           <div class="h1 text-center text-dark" id="pageHeaderTitle">Guidance Program Applicants Dashboard</div>
    <div class="card shodow mb-4">
        <div class="card-header py-3">
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Program</th>
                            <th>Name with Initials</th>
                            <th>Full Name</th>
                            <th>NIC</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>O/L</th>
                            <th>Delete</th>
                            <th>Call for Program</th>
                        </tr>
                    </thead>
                    <tbody>
                    {applyguidance && applyguidance.map((applyg, i) => (
                         <tr data-status="active">
                        <td>{applyg.program}</td>
                        <td>{applyg.name_with_in}</td>
                        <td>{applyg.nameinfull}</td>
                        <td>{applyg.nic_no}</td>
                        <td>{applyg.address_g}</td>
                        <td>{applyg.mobile_no}</td>
                        <td>{applyg.email_g}</td>
                        <td>{applyg.Ordinarylevel}</td>
                        
                        <td>
                        <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(applyg._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link> 
                        </td>
                        <td>
                        <button className="btn btn-warning"> <a href="mailto://mail.google.com/"> Send Mail </a></button> 
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
export default ApplyGuidanceAdmin;