import React, {useState,useEffect} from "react";
//import axios from "axios";
//import PropTypes from 'prop-types'


import {getAllCompany} from '../../../services/productManagementService'

export default function AllProducts(){

    const [company, setRequest] = useState([]);

    useEffect(()=>{
        getAllCompany().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setRequest(data.data.existingPosts)
        })
        
    },[])

    return(
        <div>
            <h1>All Company Requests</h1>
            <table className ="table">
            <thead>
                     <tr>
                      <th scope ="col">Company Id</th>
                      <th scope ="col">Contact Name</th>
                      <th scope ="col">Company Email</th>
                      <th scope ="col">Contact Number</th>    
                      <th scope ="col">Product ID</th> 
                      <th scope ="col">Product Name</th>   
                    </tr> 
            </thead> 
            <tbody>       
            {company && company.map((company)=>{
                return(
                   <tr>
                   
                   <td>{company.Company_Id}</td>
                   <td>{company.Contact_Name}</td>
                   <td>{company.Company_Email}</td>
                   <td>{company.Company_contactNo}</td>
                   <td>{company.Product_Id}</td>
                   <td>{company.Product_Name}</td>
                   <td>BsFillCheckSquareFill
                            <a className ="btn btn-warning"  href="#">
                                <i className="fas fa-edit"></i>&nbsp;Confirm
                            </a>
                            &nbsp; 
                            <a className ="btn btn-danger" href="#" >
                                <i className="far fa-trash-alt"></i>&nbsp;DELETE
                            </a>
                    </td>
                   </tr>
                
                  );
            })
             
            }
            </tbody> 
            </table>
        </div>
    )    
}


