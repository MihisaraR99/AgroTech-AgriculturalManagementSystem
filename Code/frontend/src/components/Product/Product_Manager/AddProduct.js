import React,{useState} from "react";
import axios from "axios";

export default function AddProduct(){

  /*create state*/
const [SId,setsid] = useState("");
const [SEmail,setsEmail] = useState("");
const [ScontactNo,setcono] = useState("");
const [PId,setpid] = useState("");
const [PName,setpname] = useState("");
const [Quentity,setQno] = useState("");

function sendData(e){
    e.preventDefault();
    alert("Going to add new product");

    const newProduct = {
      SId,
      SEmail,
      ScontactNo,
      PId,
      PName,
      Quentity
    }
   
    axios.post("http://localhost:8000/api/wholesale/add",newProduct).then(()=>{
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
 <h2>Add Products</h2>
  <form class="form-horizontal" onSubmit={sendData}>

    <div class="form-group">
      <label class="control-label col-sm-2" for="sid">Supplier ID:</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" id="SId" placeholder="" name="sid" onChange={(e)=>{
              setsid(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-2" for="SEmail">Supplier Email:</label>
      <div class="col-sm-5">          
        <input type="text" class="form-control" id="SEmail" placeholder="" name="semail" onChage={(e)=>{
             setsEmail(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-2" for="ScontactNo">Supplier Contact No:</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" id="ScontactNo" placeholder="" name="scontact" onChange={(e)=>{
              setcono(e.target.value);
        }}/>
      </div>
    </div>
    
    <div class="form-group">
      <label class="control-label col-sm-2" for="PId">Product ID:</label>
      <div class="col-sm-5">          
        <input type="text" class="form-control" id="PId" placeholder="" name="pid" onChange={(e)=>{
              setpid(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-2" for="PName">Product Name:</label>
      <div class="col-sm-5">          
        <input type="text" class="form-control" id="PName" placeholder="" name="pname" onChange={(e)=>{
              setpname(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-2" for="Quentity">Quentity:</label>
      <div class="col-sm-5">          
        <input type="text" class="form-control" id="Quentity" placeholder="" name="Quentity" onChange={(e)=>{
              setQno(e.target.value);
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