import React, {useState,useEffect} from "react";
import axios from "axios";
import PropTypes from 'prop-types'
// import AddProduct from "./AddProduct";

import {getAllProducts} from '../../../services/productManagementService'

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
            <h1>All Products</h1>
            {products.map((product)=>{
                return(
                   <div>
                   <p>{product.SId}</p>
                   <p>{product.SEmail}</p>
                   <p>{product.ScontactNo}</p>
                   <p>{product. PId}</p>
                   <p>{product.PName}</p>
                   <p>{product.Quentity}</p>
                   </div>);
            })
             
            }
        </div>
    )    
}

