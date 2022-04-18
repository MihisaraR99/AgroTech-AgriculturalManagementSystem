import react,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 

function CandidateAdmin(){
    const [candidate, setCandidate] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/Candidate/all/").then(res => {
           setCandidate(res.data);
           console.log(res.data);
        })		
        }, []) 

    return(
        <body class="adminbody">
        <div class="container-xl">
        <div class="h1 text-center text-dark" id="pageHeaderTitle">Registered Candidates Dashboard</div>

            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6"><h2><b>Manage </b><b>Candidates</b></h2></div>
                        <div>
                            <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-plus"></i> <span>Add New Vacancies</span></a>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name with Initials&nbsp;</th>
                                <th>Full Name</th>
                                <th>DOB&nbsp;</th>
                                <th>NIC</th>
                                <th>Address</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>LinkedIn</th>
                                <th>O/L</th>
                                <th>A/L</th>
                                <th>Degree</th>
                                <th>CV</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {candidate && candidate.map((candi, i) => (
                             <tr data-status="active">
                                <td>{candi.name_with_initials}</td>
                                <td>{candi.name_in_full}</td>
                                <td><span class="label label-success">{candi.date_of_birth}</span></td>
                                <td>{candi.nic}</td>
                                <td>{candi.address}</td>
                                <td>{candi.mobile}</td>
                                <td>{candi.email}</td>
                                <td>{candi.linked_in_profile}</td>
                                <td>{candi.ordinarylevel}</td>
                                <td>{candi.advancedlavel}</td>
                                <td>{candi.degree}</td>
                                <td>{candi.cv}</td>
                                <td><button class="btn btn-sm manage"> Delete </button></td>
                                <td><button class="btn btn-sm manage"> <a href="mailto://mail.google.com/"> Call </a></button></td>
                                
                             </tr>

                         ))}
                        
                        </tbody>
                    </table>
                </div> 
            </div>   
        </div> 
        </body>
        );
    }
export default CandidateAdmin;