import React, {useState,useEffect} from "react";
//import axios from "axios";
//import PropTypes from 'prop-types'

// import AddProduct from "./AddProduct";

import {getAllProducts} from '../../../services/productManagementService'
import {getAllCompany} from '../../../services/productManagementService'


export default function AllProducts(){

    const [products, setProducts] = useState([]);
    const [company, setRequest] = useState([]);

    useEffect(()=>{
        getAllProducts().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setProducts(data.data.existingPosts)
        })
        
    },[])

    useEffect(()=>{
        getAllCompany().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setRequest(data.data.existingPosts)
        })
        
    },[])


    

    return(
        <div>
            <h1>All Products</h1>
            <table className ="table">
                 <thead>
                     <tr>
                     <th scope ="col">Supplier Id</th>
                      <th scope ="col">Supplier Email</th>
                      <th scope ="col">Contact Number</th>    
                      <th scope ="col">Product ID</th> 
                      <th scope ="col">Product Name</th> 
                      <th scope ="col">Quentity</th> 
                     
                    </tr> 
                </thead> 
                <tbody>  
            {products && products.map((product)=>{
                return(
                    
                  
                 
                   <tr >
                   <td>{product.SId}</td>
                   <td>{product.SEmail}</td>
                   <td>{product.ScontactNo}</td>
                   <td>{product. PId}</td>
                   <td>{product.PName}</td>
                   <td>{product.Quentity}</td>
                  
                   </tr>
                  
                   
                   );
            })
             
            }
            </tbody>
            </table>
        </div>
        
    )    
    
}

