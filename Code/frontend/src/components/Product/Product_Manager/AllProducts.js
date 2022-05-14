import React, {useState,useEffect} from "react";
import topic from "../images/topic.png";
import './Product.css';

import {getAllProducts} from '../productManagementService'

export default function AllProducts(){

    const [products, setProducts] = useState([]);
    const [ProductSearch , setSearch] = useState("");

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
   className="text111"
   name="search2"
   onChange ={(e)=>{
       setSearch(e.target.value);
   }}
   style={{border:"none",color:"black"}}
  
  
  />
  <button type="submit" style={{color:"black"}}><i class="fa fa-search"></i></button>

          
            <div className="tale11">
            <table className ="table" >
                 <thead>
                      <tr >
                      <th className="t11" scope ="col">No of Products</th>
                      <th className="t11" scope ="col">Supplier Id</th>
                      <th className="t11" scope ="col">Contact Number</th>    
                      <th className="t11" scope ="col">Product ID</th> 
                      <th className="t11" scope ="col">Product Name</th> 
                      <th className="t11" scope ="col">Quentity</th> 
                     
                    </tr> 
                </thead> 
            

            {products && products.filter(val=>{
                if(ProductSearch ===""){
                    return val;
                }else if(
                    val.PName.toLowerCase().includes(ProductSearch.toLowerCase()) ||
                    val.PId.toLowerCase().includes(ProductSearch.toLowerCase())
                ){
                    return val
                }
            }).map((product,index)=>{
                return(
                   <tr >
                   <td className="td11">{index+1}</td>
                   <td className="td11">{product.SId}</td>
                   <td className="td11">{product.ScontactNo}</td>
                   <td className="td11">{product. PId}</td>
                   <td className="td11">{product.PName}</td>
                   <td className="td11">{product.Quentity}</td>
                   </tr>
                     );
            })
             
            }
         
            </table>
            </div>
        </div>
        
    )    
    
}

