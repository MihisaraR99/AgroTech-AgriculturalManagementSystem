import React,{useState} from "react";
import axios from "axios";

export default function CompanyRequest(){


      /*create state*/
const [Company_Id,setcompanyid] = useState("");
const [Contact_Name,setcontactname] = useState("");
const [Company_Email,setcompanymail] = useState("");
const [Company_contactNo,setcontactno] = useState("");
const [Product_Id,setproductid] = useState("");
const [Product_Name,setproname] = useState("");
const [Quentity,setqueantity] = useState("");

function sendcompanyData(e){
    e.preventDefault();
    alert("Going to add new product");

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
      alert("Product Added");

     
    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}



    return(
        <center>
        <div class="container ">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
       <h2>.....Company Request.....</h2>
        <form class="form-horizontal" onSubmit={sendcompanyData}>
      
          <div class="form-group">
            <label class="control-label col-sm-2" for="sid"> Company Id,:</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="SId" placeholder="" name="sid" onChange={(e)=>{
                    setcompanyid(e.target.value);
              }}/>
            </div>
          </div>
      
          <div class="form-group">
            <label class="control-label col-sm-2" for="Contact_Name">Contact Name:</label>
            <div class="col-sm-5">          
              <input type="text" class="form-control" id="Contact_Name" placeholder="" name="Contact_Name" onChage={(e)=>{
                   setcontactname(e.target.value);
              }}/>
            </div>
          </div>
      
          <div class="form-group">
            <label class="control-label col-sm-2" for="Company_Email"> Company_Email</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="Company_Email" placeholder="" name="Company_Email" onChange={(e)=>{
                    setcompanymail(e.target.value);
              }}/>
            </div>
          </div>
          
          <div class="form-group">
            <label class="control-label col-sm-2" for="contactNo"> Company contactNo:</label>
            <div class="col-sm-5">          
              <input type="text" class="form-control" id="contactNo" placeholder="" name="contactNo" onChange={(e)=>{
                    setcontactno(e.target.value);
              }}/>
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="PId">Product ID:</label>
            <div class="col-sm-5">          
              <input type="text" class="form-control" id="PId" placeholder="" name="PID" onChange={(e)=>{
                    setproductid(e.target.value);
              }}/>
            </div>
          </div>
      
      
          <div class="form-group">
            <label class="control-label col-sm-2" for="Product_Name">Product_Name:</label>
            <div class="col-sm-5">          
              <input type="text" class="form-control" id="Product_Name" placeholder="" name=" Product_Name" onChange={(e)=>{
                    setproname(e.target.value);
              }}/>
            </div>
          </div>

          

      
          <div class="form-group">
            <label class="control-label col-sm-2" for="Quentity">Quentity:</label>
            <div class="col-sm-5">          
              <input type="text" class="form-control" id="Quentity" placeholder="" name="Quentity" onChange={(e)=>{
                    setqueantity(e.target.value);
              }}/>
            </div>
          </div>
      
      
      
      
          <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit"  class="btn btn-success">Submit</button>
            </div>
          </div>
      
        </form>
      </div>
      </center>
          )
}