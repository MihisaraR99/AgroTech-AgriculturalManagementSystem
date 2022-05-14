import React,{useState} from "react";
import img1 from "../images/financial.png";
import './Company.css';
import axios from "axios";
import swal from "sweetalert";
import Popup from "./Popup";

export default function CompanyRequest(){


      /*create state*/
const [Company_Id,setcompanyid] = useState("");
const [Contact_Name,setcontactname] = useState("");
const [Company_Email,setcompanyEmail] = useState("");
const [Company_contactNo,setcontactno] = useState("");
const [Product_Id,setproductid] = useState("");
const [Product_Name,setproname] = useState("");
const [Quentity,setqueantity] = useState("");

const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


function sendcompanyData(e){
    e.preventDefault();
    swal ({
      title:"Going to add new Request",
      text:"Do you want to add request?",
      icon:"warning",
      buttons: true,
      dangerMode: true
      
    }).then(Response=>{
      if(Response){
        {
          if( Company_Id=="" || Product_Id=="" || Quentity==""){
           alert("Please fill the required fields")}

          else{
          axios.post("http://localhost:8000/api/companyRequest/add",newProduct).then(()=>{
            swal({text:"Company  Added",
                      icon:"success"
                      });
           
          }).catch((err)=>{
            alert(err)
            console.log(err);
          })}
      }
      }
    })

    const newProduct = {
      Company_Id,
      Contact_Name,
      Company_Email,
      Company_contactNo,
      Product_Id,
      Product_Name,
      Quentity
    }
    
}/* else{
    axios.post("http://localhost:8000/api/companyRequest/add",newProduct).then(()=>{
      swal({text:"Company  Added",
                icon:"success"
                });
     
    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}*/



    return(
      
      <center>
        <div>
          <div className="maindiv111" style={{/*border:"1px solid black",*/ margin:"20px"}} >
             
            <div class="container12" style={{/*border:"1px solid black",*/ }}>

                  <div className="container11" style={{ backgroundColor:"#66ff66"}}>
                  <section class = "div11" id="sec2">
		                  <h1>
                         <img src={img1} alt=""   style={{ width: "90%", height: "480px",borderBlockColor: "black",marginTop:"110px",paddingLeft:"4px",paddingRight:"4px"}}/> 
	                  	</h1>
	                 </section>

                   <button style={{color:"black", border:"none", padding:"10px" , height:"50px",width:"200px"}}  onClick={togglePopup}>Conditions</button>
                   {isOpen && <Popup 
                     content={<>
                      <b style={{color:"black"}}>Design your Popup</b>
                      <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <button style={{color:"black", border:"none", padding:"10px" , height:"50px",width:"200px"}}  onClick={togglePopup} href="#">Test button</button>
                    </>}
                    handleClose={togglePopup}
                   
                   ></Popup> }
                  </div>

 <div className="container11" >
    <section class = "div11" id="sec2">
       <form class="form-horizontal11" onSubmit={sendcompanyData}>

<h2 style={{fontFamily:"courier",marginTop:"20px"}}>Request Product</h2>

<div class="form-group1111" >
   <div >
    <input type="text" class="form-control11" id="SId" style={{color:"black"}} placeholder="Company ID" name="sid" onChange={(e)=>{
      setcompanyid(e.target.value);
    }}/>
  </div>
</div>

<div class="form-group1111">
    <div >          
    <input type="text" class="form-control11" id="Cname" style={{color:"black"}} placeholder="Company Contact Name" name="sname"  onChage={(e)=>{
         setcontactname(e.target.value);
    }}/>
  </div>
</div>

<div class="form-group">
    <div >          
    <input type="text" class="form-control11" id="SEmail" style={{color:"black"}} placeholder="Company Email" name="semail"   onChage={(e)=>{
         setcompanyEmail(e.target.value);
    }}/>
  </div>
</div>

<div class="form-group1111">
  <div >
    <input type="text" class="form-control11" id="ScontactNo" style={{color:"black"}}  placeholder=" Contact Number" name="scontact"   onChange={(e)=>{
          setcontactno(e.target.value);
    }}/>
  </div>
</div>

<div class="form-group1111">
  <div>          
    <input type="text" class="form-control11" id="PId" style={{color:"black"}} placeholder="Product ID" name="pid"  onChange={(e)=>{
          setproductid(e.target.value);
    }}/>
  </div>
</div>

<div class="form-group1111">
  <div >          
    <input type="text" class="form-control11" id="PName" style={{color:"black"}} placeholder="Product Name" name="pname" onChange={(e)=>{
          setproname(e.target.value);
    }}/>
  </div>
</div>

<div class="form-group1111">
   <div >          
      <input type="text" class="form-control11" id="Quentity" style={{color:"black"}}  placeholder="Quantity" name="Quentity"  onChange={(e)=>{ 
    setqueantity(e.target.value)}}/>
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