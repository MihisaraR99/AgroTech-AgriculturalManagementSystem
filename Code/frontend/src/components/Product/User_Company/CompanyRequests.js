import React,{useState} from "react";
import img2 from "../images/img16.jpg";
import img1 from "../images/img1.jpg";
import './Company.css';
import axios from "axios";

export default function CompanyRequest(){


      /*create state*/
const [Company_Id,setcompanyid] = useState("");
const [Contact_Name,setcontactname] = useState("");
const [Company_Email,setcompanyEmail] = useState("");
const [Company_contactNo,setcontactno] = useState("");
const [Product_Id,setproductid] = useState("");
const [Product_Name,setproname] = useState("");
const [Quentity,setqueantity] = useState("");

function sendcompanyData(e){
    e.preventDefault();
    alert("Going to add company request ");

    const newProduct = {
      Company_Id,
      Contact_Name,
      Company_Email,
      Company_contactNo,
      Product_Id,
      Product_Name,
      Quentity
    }
   
    axios.post("http://localhost:8000/api/companyRequest/add",newProduct).then(()=>{
      alert("Compny Reques Added");

     
    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}



    return(
      
      <center>

      <div className="maindiv1" style={{  backgroundImage: `url(${img2})`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', }}>
    
     

      <div class="container11 ">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    
      <form class="form-horizontal11" onSubmit={sendcompanyData}>
        <h2 style={{fontFamily:"courier"}}>Request Product</h2>
        <div class="form-group" >
          
          <div >
            <input type="text" class="form-control11" id="SId" placeholder="Company ID" name="sid" onChange={(e)=>{
              setcompanyid(e.target.value);
            }}/>
          </div>
        </div>

        <div class="form-group">
          
          <div >          
            <input type="text" class="form-control11" id="SEmail" placeholder="Company Contact Name" name="semail"  onChage={(e)=>{
                 setcontactname(e.target.value);
            }}/>
          </div>
        </div>
    
        <div class="form-group">
          
          <div >          
            <input type="text" class="form-control11" id="SEmail" placeholder="Company Email" name="semail"   onChage={(e)=>{
                 setcompanyEmail(e.target.value);
            }}/>
          </div>
        </div>
    
        <div class="form-group">
          <div >
            <input type="text" class="form-control11" id="ScontactNo" placeholder=" Contact Number" name="scontact"   onChange={(e)=>{
                  setcontactno(e.target.value);
            }}/>
          </div>
        </div>
        
        <div class="form-group">
         
          <div>          
            <input type="text" class="form-control11" id="PId" placeholder="Product ID" name="pid"  onChange={(e)=>{
                  setproductid(e.target.value);
            }}/>
          </div>
        </div>
    
        <div class="form-group">
          <div >          
            <input type="text" class="form-control11" id="PName" placeholder="Product Name" name="pname" onChange={(e)=>{
                  setproname(e.target.value);
            }}/>
          </div>
        </div>
    
        <div class="form-group">
           <div >          
            <input type="text" class="form-control11" id="Quentity" placeholder="Quantity" name="Quentity"  onChange={(e)=>{
                  <div class="form-group">
          
                  <div >          
                    <input type="text" class="form-control11" id="SEmail" placeholder="Supplier Email" name="semail"  onChage={(e)=>{
                         setqueantity(e.target.value);
                    }}/>
                  </div>
                </div>
            }}/>
          </div>
        </div>
    
    
    
    
        <div class="form-group">        
          <div class="col-sm-offset-2 col-sm-10" >
            <button  type="submit"  class="btn btn-success"  style={{width:"200px",}}>Submit</button>
          </div>
        </div>
    
      </form>
    </div>
    </div>
  
    </center>
          )
}