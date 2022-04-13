import React, {useState,useEffect} from "react";
//import axios from "axios";
//import PropTypes from 'prop-types'

// import AddProduct from "./AddProduct";

import {getAllProducts} from '../../../services/productManagementService'
import {getAllCompany} from '../../../services/productManagementService'


export default function AllProducts(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getAllProducts().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setProducts(data.data.existingPosts)
        })
        
    },[])

    return(
        <div>
            <center><h1>Stock Details</h1></center>
            <table className ="table">
                 <thead>
                     <tr>
                      
                      <th scope ="col">Product ID</th> 
                      <th scope ="col">Product Name</th> 
                      <th scope ="col">Quantity(Kg)</th> 
                      <th scope ="col">Action</th> 
                    
                    </tr> 
                </thead> 
                <tbody>  
            {products && products.map((product)=>{
                return(
                    
                  
                 
                   <tr >
                  
                   <td>{product. PId}</td>
                   <td>{product.PName}</td>
                   <td>{product.Quentity}</td>
                   <td>
                            <a className ="btn btn-warning"  href="#">
                                <i className="fas fa-edit"></i>&nbsp;EDIT
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

