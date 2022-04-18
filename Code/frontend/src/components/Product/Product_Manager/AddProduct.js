import React,{useState} from "react";
import img6 from "../images/img11.jpg";
import axios from "axios";


export default function AddProduct(){

  /*01--create state*/
const [SId,setsid] = useState("");
const [SEmail,setsEmail] = useState("");
const [ScontactNo,setcono] = useState("");
const [PId,setpid] = useState("");
const [PName,setpname] = useState("");
const [Quentity,setQno] = useState("");

/*02--add*/
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
   
    /*url*/
    axios.post("http://localhost:8000/api/wholesale/add",newProduct).then(()=>{
      alert("Product Added");

     
    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}



return(
  <center>
     <div style={{  backgroundImage: `url(${img6})`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', }}>
   
  <div class="container22">  
<form class="form-horizontal22" onSubmit={sendData} >
    <h2 className="h2topic22" style={{color:"white" , fontSize:"50px" }}>Add Products</h2>

    <div class="form-group" >
       <div >
        <input type="text" class="formcontrol22" id="SId" placeholder="Supplier ID" name="sid" style={{ backgroundColor: " white", width:"500px",padding:"10px",margin:"10px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)",border:"none"}} 
         onChange={(e)=>{
              setsid(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <div >          
        <input type="text" class="formcontrol22" id="SEmail" placeholder="Supplier Email" name="semail" style={{ backgroundColor: " white", width:"500px",padding:"10px",margin:"10px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)",border:"none"}}  onChage={(e)=>{
             setsEmail(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <div >
        <input type="text" class="formcontrol22" id="ScontactNo" placeholder="Supplier Contact" name="scontact" style={{ backgroundColor: " white", width:"500px",padding:"10px",margin:"10px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)",border:"none"}}  onChange={(e)=>{
              setcono(e.target.value);
        }}/>
      </div>
    </div>
    
    <div class="form-group">
     <div>          
        <input type="text" class="formcontrol22" id="PId" placeholder="Product ID" name="pid" style={{ backgroundColor: " white", width:"500px",padding:"10px",margin:"10px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)",border:"none"}}  onChange={(e)=>{
              setpid(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <div >          
        <input type="text" class="formcontrol22" id="PName" placeholder="Product Name" name="pname" style={{ backgroundColor: " white", width:"500px", padding:"10px",margin:"10px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)",border:"none"}} onChange={(e)=>{
              setpname(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <div >          
        <input type="text" class="formcontrol22" id="Quentity" placeholder="Quantity" name="Quentity" style={{ backgroundColor: " white", width:"500px",padding:"10px",margin:"10px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)",border:"none"}} onChange={(e)=>{
              setQno(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10" >
        <button type="submit"  className="btn btn-success"  style={{width:"200px", backgroundColor:"black",marginBottom:"10px",border:"none"}}>Submit</button>
      </div>
    </div>

  </form>
  </div>
</div>

</center>
    )
}