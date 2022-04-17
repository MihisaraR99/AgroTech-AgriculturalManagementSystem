import React, {useState,useEffect} from "react";
import axios from "axios";

import {
    Link
} from "react-router-dom"

//import axios from "axios";
import PropTypes from 'prop-types'

// import AddProduct from "./AddProduct";

import {getAllProducts} from '../productManagementService'

export default function AllProducts(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getAllProducts().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setProducts(data.data.existingPosts)
        })
        
    },[])

    
    /*update*/
    function updateStock(id){
        //console.log(id)
        products.history.get("/read" + id)
    }

    return(
        <div>
            <center><h1>Stock Details</h1></center>
            <table className ="table">
                 <thead>
                     <tr>
                      <th scope ="col">Product No</th> 
                      <th scope ="col">Product ID</th> 
                      <th scope ="col">Product Name</th> 
                      <th scope ="col">Quantity(Kg)</th> 
                      <th scope ="col">Action</th> 
                    </tr> 
                </thead> 
                <tbody>  
            {products && products.map((product,index)=>{
                return(
                   <tr >
                   <td>{index+1}</td>
                   <td>{product. PId}</td>
                   <td>{product.PName}</td>
                   <td>{product.Quentity}</td>
                   <td>
                            { <Link to={`/productUpdate/${product._id}/${product.PName}/${product.Quentity}`} 
                                    className ="btn btn-warning">
                                <i className="fas fa-edit"></i>&nbsp;EDIT
                            </Link>}
                            
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

