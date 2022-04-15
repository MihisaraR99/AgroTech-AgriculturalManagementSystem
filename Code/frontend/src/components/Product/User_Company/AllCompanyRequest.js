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
         alert("Going to delete " + id);
          axios.delete(`http://localhost:8000/api/companyRequest/delete/${id}`).then(()=>{
             alert("Deleted succesfully");
         
          })
    };

return(
  <div>
    <center><h1>All Company Requests</h1> 
        <div class="row">
            {company && company.map((company,index)=>(
              <div class="col-4">
                          

<div 
className="product-title"
style={{ 

border:"0.5px solid rgba(150, 168, 156)",
marginLeft: "2%",
marginTop: "70px",
color:"white",
borderRadius: "30px",
boxShadow: " 10px 10px 5px rgba(150, 168, 156)",
width:"450px",
padding: "5px",}}>

<div className="inputdiv"
  
 style={{ 
    //backgroundColor: "black",
    //border: "1px solid white",
    width:"400px",
    color:"black",
    margin: "2px",
    position:"center",
    //border:"2px solid black",
    padding: " 5px 5px 5px", }}>
        <div style={{border: "1px ",width:"400px",height:"50px",borderRadius: "30px", float:"center",boxShadow: " 10px 10px 5px rgba(150, 168, 156)",marginBottom:"30px"}}>
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
    </div>

<tr> 
<td>
 <a className ="btn btn-warning"  href="#" >
    <i className="fas fa-edit"></i>&nbsp;Confirm</a>&nbsp; 

<a className ="btn btn-danger"  onClick={()=> onDelete(company.Company_Id)}>
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


