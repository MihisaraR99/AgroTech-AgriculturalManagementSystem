import React, {useState,useEffect} from "react";
//import img1 from "./img1.png";
import axios from "axios";
//import PropTypes from 'prop-types'


import {getAllCompany} from '../productManagementService';


export default function AllProducts(){

    const [company, setRequest] = useState([]);

    useEffect(()=>{
        getAllCompany().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setRequest(data.data.existingPosts)
        })
        
    },[])
     
    

      const onDelete= (id)=>{
          axios.delete(`http://localhost:8000/api/companyRequest/delete/${id}`).then(()=>{
             alert("Deleted succesfully");
             //getAllCompany();
          })
    };

return(
  <div>
    <center><h1>All Company Requests</h1> 
        <div class="row">
            {company && company.map((company,index)=>(
              <div class="col-4">
                          

<div 
className="product-title">

<div className="inputdiv">
     <div className="inputdiv1">
        <p style={{ fontSize: "20px",textAlign:"center"}}>
     Request No -<b>{index+1}</b>
    </p>
        </div>
   
    <p style={{ fontSize: "20px",textAlign:"left" }}>
     Company Id-<b>{company.Company_Id}</b>
    </p>
    <p style={{ fontSize: "20px",textAlign:"left" }}>
    Product Name-<b> {company.Product_Name}</b>
    </p>
    <p style={{ fontSize: "20px",textAlign:"left"}}>
     Company Email-<b> {company.Company_Email}</b>
    </p>
    <p style={{ fontSize: "20px",textAlign:"left" }}>
     Contact No-<b>{company.Company_contactNo}</b>
    </p>
    <p style={{ fontSize: "20px",textAlign:"left" }}>
     Quantity-<b>{company.Quentity}</b>
    </p>
    </div>

<tr> 
<td>
 <a className ="btn btn-warning"  href="#" >
    <i className="fas fa-edit"></i>&nbsp;Confirm</a>&nbsp; 

<a className ="btn btn-danger"  onClick={()=> onDelete(company._id)}>
    <i className="far fa-trash-alt"></i>&nbsp;DELETE</a>
</td>
</tr>
</div>
</div>
                  
    

     ))}
  </div></center>
 </div> 
        
  )    
}


