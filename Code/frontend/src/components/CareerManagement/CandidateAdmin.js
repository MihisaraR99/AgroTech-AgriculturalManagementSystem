import React,{useState, useEffect} from "react";
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

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/Candidate/${id}`).then((res) => {
              alert("Candidate Deleted Successfully!");
            });
            window.location.reload(false);
          };

    return(
        <div>
        <div class="h1 text-center text-dark" id="pageHeaderTitle">Registered Candidates Dashboard</div>

 <div class="card shodow mb-4">
     <div class="card-header py-3">
     </div>
     <div class="card-body">
         <div class="table-responsive">
             <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                 <thead>
                     <tr>
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
                                <td>{candi.advancedlevel}</td>
                                <td>{candi.degree}</td>
                                <td>{candi.cv}</td>
                     <td>
                     <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(candi._id)}
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
export default CandidateAdmin;