import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Health.css'

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
                      <table className ="table" >
                 <thead>
                     <tr>
                      <th scope ="col" className="HRth" style={{backgroundColor:"blue"}}>No</th>  
                      <th scope ="col" className="HRth" style={{backgroundColor:"blue"}}>Customer Name</th>
                      <th scope ="col" className="HRth" style={{backgroundColor:"blue"}}>NIC</th>
                      <th scope ="col" className="HRth" style={{backgroundColor:"blue"}}>Animal Type</th>     
                      <th scope ="col" className="HRth" style={{backgroundColor:"blue"}}>Contact No</th> 
                      <th scope ="col" className="HRth"  style={{backgroundColor:"blue"}}>Address</th> 
                      <th scope ="col" className="HRth" style={{backgroundColor:"blue"}}>Date</th> 
                      <th scope ="col" className="HRth" style={{backgroundColor:"blue"}}>Time</th> 
                      <th scope ="col" className="HRtd" style={{backgroundColor:"blue"}}>Action</th> 
                    </tr> 
                </thead> 
                <tbody> 

                {appointments && appointments.map((appoint,index)=>{
                return(
                   <tr>
                    <td className="HRtd" >{index+1}</td>
                    <td className="HRtd">{appoint.CustomerName}</td>
                    <td className="HRtd" >{appoint.NIC}</td>
                    <td className="HRtd">{appoint.AnimalType}</td>
                    <td className="HRtd">{appoint.ContactNo}</td>
                    <td className="HRtd">{appoint.Address}</td>
                    <td className="HRtd">{appoint.Date}</td>
                    <td className="HRtd">{appoint.Time}</td>
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
