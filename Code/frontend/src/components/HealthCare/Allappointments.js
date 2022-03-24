import React, {useState,useEffect} from "react";
import axios from "axios";
// import AddProduct from "./AddProduct";

//import {getAllProducts} from '../../../services/productManagementService'

import {getAllappointments} from '../../Services/HealthCareServices'

export default function AllProducts(){

    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        getAllappointments().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setAppointments(data.data.existingPosts)
        })
        
    },[])

    return(
        <div>
            <h1>All Products</h1>
            {appointments && appointments.map((appoint)=>{
                return(
                   <div>

                    <table style={{ marginTop: 20  }}>  
                    <thead>
                       <th>retiu
                   <td><p>{appoint.AppointmentNo}</p></td>

                   </th>
                   </thead>
                   </table>
                   </div>);
            })
             
            }
        </div>
    )    
}
