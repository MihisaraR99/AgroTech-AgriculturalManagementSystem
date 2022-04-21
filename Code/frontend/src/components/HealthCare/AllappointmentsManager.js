import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Health.css'

import {getAllappointments} from './HealthCareServices'

export default function AllappointmentsManager(){
    const navigate = useNavigate()

    const [appointments,setAppointments] = useState([]);
    const [AppintmenttSearch , setSearch] = useState("");

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
        <div style={{backgroundColor:"#98fb98"}}>
            <center><h1  style={{PaddingTop:"10px"}} >Appointments</h1></center>

            <input type="text"
                placeholder="Search.." 
                className="text111"
                name="search2"
                onChange ={(e)=>{
                setSearch(e.target.value);
        }}
   style={{border:"none", marginTop:"50px",
   marginBottom:"20px",
   width:"40%",
   marginLeft:"30%",
   boxShadow:" 10px 10px 5px rgba(150, 168, 156)",
   backgroundColor:"#98fb98"
}}
  
  
  />
  <button type="submit" style={{color:"red"}}><i class="fa fa-search"></i></button>
           
                   <div className="container">
                      <table className ="table" >
                 <thead>
                     <tr>
                      <th scope ="col" className="HRth" style={{backgroundColor:"#059033"}}>No</th>  
                      <th scope ="col" className="HRth" style={{backgroundColor:"#059033"}}>Customer Name</th>
                      <th scope ="col" className="HRth" style={{backgroundColor:"#059033"}}>NIC</th>
                      <th scope ="col" className="HRth" style={{backgroundColor:"#059033"}}>Animal Type</th>     
                      <th scope ="col" className="HRth" style={{backgroundColor:"#059033"}}>Contact No</th> 
                      <th scope ="col" className="HRth"  style={{backgroundColor:"#059033"}}>Address</th> 
                      <th scope ="col" className="HRth" style={{backgroundColor:"#059033"}}>Date</th> 
                      <th scope ="col" className="HRth" style={{backgroundColor:"#059033"}}>Time</th> 
                      <th scope ="col" className="HRtd" style={{backgroundColor:"#059033"}}>Action</th> 
                    </tr> 
                </thead> 
                <tbody> 

                {appointments && appointments.filter(value=>{
                    if(AppintmenttSearch ===""){
                        return value;
                    }else if(
                        value.AnimalType.toLowerCase().includes(AppintmenttSearch.toLowerCase())
                    ){
                        return value
                    }
                }).map((appoint,index)=>{
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
                     <div className="btn btn-success" onClick={()=>{navigate("/HMUpdate", {
                         state:{appoint},
                     })}}>
                     <i className="fas fa-edit"></i>&nbsp;EDIT</div>&nbsp; 

                     <a className ="btn btn-danger" href="##" style={{backgroundColor:"", border:"none"}}
                         onClick={()=> onDelete(appoint._id)}>
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
