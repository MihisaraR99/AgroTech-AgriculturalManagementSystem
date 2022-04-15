import React,{useState} from "react";
import img6 from "../images/img11.jpg";
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
     <div style={{  backgroundImage: `url(${img6})`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', }}>
   
     

    
 
  <div class="container "  style={{ 
                    //backgroundColor: "#5b665a",
                    //backgroundImage: "url(img1.png)",
                    //backgroundImage: "url(../images/img5.jpg)",
                    marginLeft: "1%",
                    color:"white",
                    width:"1100px",
                    marginRight:"80%", 
                    padding: "50px 50px 20px 50px"}}>
                      
                    

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    
  <form class="form-horizontal" onSubmit={sendData}  style={{ 
                  
                    //backgroundColor: "black",
                    width:"600px",
                    padding: "50px 50px 20px 50px",
                    //borderRadius: "30px",
                    //border:"2px solid #3fd921",
                    color:"black"
                   }}>
    <h2 style={{color:"white" , fontSize:"50px" }}>Add Products</h2>

    <div class="form-group" >
       <div >
        <input type="text" class="form-control" id="SId" placeholder="Supplier ID" name="sid" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"6px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)"}} 
         onChange={(e)=>{
              setsid(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <div >          
        <input type="text" class="form-control" id="SEmail" placeholder="Supplier Email" name="semail" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)"}}  onChage={(e)=>{
             setsEmail(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <div >
        <input type="text" class="form-control" id="ScontactNo" placeholder="Supplier Contact" name="scontact" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)"}}  onChange={(e)=>{
              setcono(e.target.value);
        }}/>
      </div>
    </div>
    
    <div class="form-group">
     <div>          
        <input type="text" class="form-control" id="PId" placeholder="Product ID" name="pid" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)"}}  onChange={(e)=>{
              setpid(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <div >          
        <input type="text" class="form-control" id="PName" placeholder="Product Name" name="pname" style={{ backgroundColor: " white", width:"500px", padding:"10px",marginTop:"5px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)"}} onChange={(e)=>{
              setpname(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <div >          
        <input type="text" class="form-control" id="Quentity" placeholder="Quantity" name="Quentity" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",boxShadow: " 4px 2px 2px rgba(63, 217, 33)"}} onChange={(e)=>{
              setQno(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10" >
        <button type="submit"  class="btn btn-success"  style={{width:"200px",}}>Submit</button>
      </div>
    </div>

  </form>
  </div>
</div>

</center>
    )
}