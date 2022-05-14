import React,{useState} from "react";
import img44 from "../images/upselling.png";
import axios from "axios";
import swal from "sweetalert"

export default function AddProduct(){

  /*01--create state*/
const [SId,setsid] = useState("");
const [ScontactNo,setcono] = useState("");
const [PId,setpid] = useState("");
const [PName,setpname] = useState("");
const [Quentity,setQno] = useState("");

/*02--add*/
function sendData(e){
    e.preventDefault();
    swal ({
      title:"Going to add new product",
      text:"Do you want to add?",
      icon:"warning",
      buttons: true,
      dangerMode: true
      
    }).then(respuesta=>{
       if(respuesta){
        axios.post("http://localhost:8000/api/wholesale/add",newProduct).then(()=>{
          swal({text:"Product Added",
                icon:"success"
                });
    
         
        }).catch((err)=>{
          alert(err)
          console.log(err);
        })
       }
    })

    const newProduct = {
      SId,
      ScontactNo,
      PId,
      PName,
      Quentity
    }
   
    /*url*/
    /*if( PId=="" || PName=="" || Quentity==""){
            alert("Please fill the required fields")
    }else{
      axios.post("http://localhost:8000/api/wholesale/add",newProduct).then(()=>{
        alert("Product Added");
  
       
      }).catch((err)=>{
        alert(err)
        console.log(err);
      })
  }*/
  
  
    }
 

return(
  <center>
  <div>
    <div className="maindiv111" style={{/*border:"2px solid black",*/ margin:"50px"}} >
       
      <div class="container12" style={{border:"2px solid green",margin:"5px"}}>

            <div className="container11" /*style={{ }}*/ style={{border:"2px solid green", backgroundColor:"white"}}>
            <section class = "div11" id="sec2">
                <h1>
                   <img src={img44} alt=""   style={{ width: "90%", height: "480px",borderBlockColor: "black",marginTop:"110px",paddingLeft:"4px",paddingRight:"4px"}}/> 
                </h1>
             </section>
            </div>

<div className="container11"style={{border:"2px solid green", backgroundColor:"white"}} >
<section class = "div11" id="sec2">
 <form class="form-horizontal11" onSubmit={sendData}>

<h2 style={{fontFamily:"courier",marginTop:"20px"}}>Add Supplier Product Details</h2>

<div class="form-group1111" >
<div >
<input type="text" class="form-control11" id="SId" style={{color:"black"}} placeholder="Supplier ID" name="sid" onChange={(e)=>{
 setsid(e.target.value);
}}/>
</div>
</div>

<div class="form-group1111">
<div >          
<input type="text" class="form-control11" id="Cname" style={{color:"black"}} placeholder="Supplier Contact No" name="sname"  onChage={(e)=>{
   setcono(e.target.value);
}}/>
</div>
</div>

<div class="form-group">
<div >          
<input type="text" class="form-control11" id="SEmail" style={{color:"black"}} placeholder="Product ID" name="semail"   onChage={(e)=>{
    setpid(e.target.value);
}}/>
</div>
</div>

<div class="form-group1111">
<div >
<input type="text" class="form-control11" id="ScontactNo" style={{color:"black"}}  placeholder="Product Name" name="scontact"   onChange={(e)=>{
    setpname(e.target.value);
}}/>
</div>
</div>

<div class="form-group1111">
<div>          
<input type="text" class="form-control11" id="PId" style={{color:"black"}} placeholder="Quantity" name="pid"  onChange={(e)=>{
    setQno(e.target.value);
}}/>
</div>
</div>



<div class="form-group1111">        
<div className="button111" >
<button  type="submit"  class="btn btn-success"  style={{width:"200px"}}>Submit</button>
</div>
</div>

</form>
              </section>
            </div>

      </div>
      </div>
   </div>
</center>
    )
}