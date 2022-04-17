import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {getAllappointments} from './HealthCareServices'

export default function AllappointmentsManager(){
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        getAllappointments().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setAppointments(data.data.existingPosts)
        })
        
    },[])

    const onDelete= (id)=>{
           alert("going to delete" + id)
        axios.delete(`http://localhost:8000/api/app/delete/${id}`).then(()=>{
           alert("Deleted succesfully");
           //getAllappointments();
        })
  };


    return(
        <div>
            <center><h1>Appointments</h1></center><br/>
           
                   <div className="container">
                      <table className ="table">
                 <thead>
                     <tr>
                      <th scope ="col">No</th>  
                      <th scope ="col">Customer Name</th>
                      <th scope ="col">NIC</th>
                      <th scope ="col">Animal Type</th>     
                      <th scope ="col">Contact No</th> 
                      <th scope ="col">Address</th> 
                      <th scope ="col">Date</th> 
                      <th scope ="col">Time</th> 
                      <th scope ="col">Action</th> 
                    </tr> 
                </thead> 
                <tbody> 

                {appointments && appointments.map((appoint,index)=>{
                return(
                   <tr>
                    <td>{index+1}</td>
                    <td>{appoint.CustomerName}</td>
                    <td>{appoint.NIC}</td>
                    <td>{appoint.AnimalType}</td>
                    <td>{appoint.ContactNo}</td>
                    <td>{appoint.Address}</td>
                    <td>{appoint.Date}</td>
                    <td>{appoint.Time}</td>
                    <td>
                     <div className="btn btn-primary" onClick={()=>{navigate("/HMUpdate", {
                         state:{appoint},
                     })}}>
                     <i className="fas fa-edit"></i>&nbsp;EDIT</div>&nbsp; 

                     <a className ="btn btn-danger" href="##" onClick={()=> onDelete(appoint._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;DELETE</a>
                    </td> 
                    
                   </tr>
                     );
            })
             
            }
            </tbody>
            </table>
                   </div>
            
             
            
        </div>
    )  
}
