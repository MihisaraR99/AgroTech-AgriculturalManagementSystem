import React,{useState} from "react";
import img2 from "../images/img16.jpg";
import img1 from "../images/img22.png";
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
        <div>
          <div className="maindiv1" style={{/*border:"1px solid black",*/ margin:"20px"}} >
             
            <div class="container12" >

                  <div className="container11" style={{  backgroundColor:"white"}}>
                  <section class = "div11" id="sec2">
		                  <h1>
                         <img src={img1} alt=""   style={{ width: "100%", height: "480px",borderBlockColor: "black",marginTop:"110px",paddingLeft:"4px",paddingRight:"4px"}}/> 
	                  	</h1>
	                 </section>
                  </div>

 <div className="container11" >
    <section class = "div11" id="sec2">
       <form class="form-horizontal11" onSubmit={sendcompanyData}>

<h2 style={{fontFamily:"courier",marginTop:"20px"}}>Request Product</h2>

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
    setqueantity(e.target.value)}}/>
  </div>
</div>


<div class="form-group">        
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