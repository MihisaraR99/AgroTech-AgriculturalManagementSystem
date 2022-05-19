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
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

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
           
            <div className="tablestock" >
            <center><h1 style={{MarginTop:"80px", paddingRight:"190px"}}>Stock Details</h1></center>
            <table  class="table table-bordered" style={{marginTop:"40px"}}>
                 <thead style={{width: "20px",fontSize:"20px", padding:"20px", backgroundColor:"#c3c9c5"}}>
                     <tr >
                      <th scope ="col" style={{width: "20px", padding:"20px"}} >Product No</th> 
                      <th scope ="col" style={{width: "20px", padding:"20px"}} >Product ID</th> 
                      <th scope ="col" style={{width: "20px", padding:"20px"}}>Product Name</th> 
                      <th scope ="col" style={{width: "20px", padding:"20px"}}>Quantity(Kg)</th> 
                      <th scope ="col" style={{width: "20px", padding:"20px"}}>Action</th> 
                    </tr> 
                </thead> 
                <tbody>  
            {products && products.map((product,index)=>{
                return(
                   <tr >
                   <td   >{index+1}</td>
                   <td >{product. PId}</td>
                   <td >{product.PName}</td>
                   <td >{product.Quentity}</td>
                   <td >
                            { <Link to={`/productUpdate/${product._id}/${product.PName}/${product.Quentity}`} 
                                    className ="btn btn-warning" onClick={togglePopup} style={{backgroundColor:"white", border:"2px solid green", color:"green"}}>
                                <i className="fas fa-edit" style={{color:"green"}}></i>&nbsp;EDIT
                            </Link>}
                            
                            &nbsp; 
                            <a className ="btn btn-danger" href="#"  style={{backgroundColor:"white", border:"2px solid red", color:"red",margin:"10px"}}>
                                <i className="far fa-trash-alt" style={{color:"red"}}></i>&nbsp;DELETE
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

