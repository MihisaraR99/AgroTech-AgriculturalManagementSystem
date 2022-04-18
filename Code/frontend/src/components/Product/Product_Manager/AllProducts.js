import React, {useState,useEffect} from "react";
import topic from "../images/topic.png";
import './Product.css';

import {getAllProducts} from '../productManagementService'

export default function AllProducts(){

    const [products, setProducts] = useState([]);
    const [searchProdName , setSearch] = useState("");

    useEffect(()=>{
        getAllProducts().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setProducts(data.data.existingPosts)
        })
        
    },[])
   
    return(
        <div>
             <div className="img11pp"> <img
          src={topic}
          alt=""
          style={{
            width: "100%",
            height: "300px",
            borderBlockColor: "black",
          }}/></div>


  <input type="text"
   placeholder="Search.." 
   className="text11"
   name="search2"
   onChange={(e)=>{
       setSearch(e.target.value);
   }}
  
  />
  <button type="submit"><i class="fa fa-search"></i></button>

          

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

            {products && products.filter((val)=>{
                if(searchProdName=== ""){
                    return val;
                }else if(
                    val.PName.toLowerCase().includes(searchProdName.toLowerCase())
                   
                ){
                    return val;
                }
                
            }).map((product)=>{
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

