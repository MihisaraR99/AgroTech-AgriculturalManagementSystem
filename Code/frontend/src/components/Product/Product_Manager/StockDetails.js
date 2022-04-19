import React, {useState,useEffect} from "react";
import axios from "axios";
import './Product.css';

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
           
            <div className="tablestock" style={{padding:"40px" ,marginLeft:"320px"}}>
            <center><h1 style={{MarginTop:"60px", paddingRight:"190px"}}>Stock Details</h1></center>
            <table className="table12" >
                 <thead >
                     <tr className="tr12">
                      <th scope ="col" className="t12" >Product No</th> 
                      <th scope ="col" className="t12">Product ID</th> 
                      <th scope ="col" className="t12">Product Name</th> 
                      <th scope ="col" className="t12">Quantity(Kg)</th> 
                      <th scope ="col" className="t12">Action</th> 
                    </tr> 
                </thead> 
                <tbody>  
            {products && products.map((product,index)=>{
                return(
                   <tr className="tr12">
                   <td  className="td12" style={{padding:"30px"}}>{index+1}</td>
                   <td className="td12">{product. PId}</td>
                   <td className="td12">{product.PName}</td>
                   <td className="td12">{product.Quentity}</td>
                   <td className="td12">
                            { <Link to={`/productUpdate/${product._id}/${product.PName}/${product.Quentity}`} 
                                    className ="btn btn-warning" style={{backgroundColor:"#987456", border:"none"}}>
                                <i className="fas fa-edit"></i>&nbsp;EDIT
                            </Link>}
                            
                            &nbsp; 
                            <a className ="btn btn-danger" href="#"  style={{backgroundColor:"#fd5e53", border:"none", margin:"10px"}}>
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
        </div>
        
    )    
    
}

