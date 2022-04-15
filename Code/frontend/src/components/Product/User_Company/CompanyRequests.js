import React,{useState} from "react";
import img2 from "../images/img2.jpg";
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
      <div style={{ backgroundColor: "#badec6" }}>
      <div className="upper-images max-vh-100 row gx-3" >
        <img style={{ width: "100%" ,height:"500px" }}
          src={img2}
          className="image" 
        />
      
     

      <div class="container "  style={{ 
                        //backgroundColor: "#5b665a",
                        //backgroundImage: "url(img1.png)",
                        marginLeft: "15%",
                        marginTop: "30px",
                        color:"white",
                        width:"1100px",
                        padding: "40px 40px 10px 40px"}}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    
      <form class="form-horizontal" onSubmit={sendcompanyData}  style={{ 
                      
                        //backgroundColor: "black",
                        width:"600px",
                        margin:"10px",
                        padding: "50px 50px 20px 50px",
                        borderRadius: "30px",
                        //border:"2px solid #3fd921",
                        color:"black"
                       }}>
        <h2 style={{fontFamily:"courier"}}>Request Product</h2>
        <div class="form-group" >
          
          <div >
            <input type="text" class="form-control" id="SId" placeholder="Company ID" name="sid" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"6px",borderTop:"2px solid #3fd921"}} 
             onChange={(e)=>{
              setcompanyid(e.target.value);
            }}/>
          </div>
        </div>

        <div class="form-group">
          
          <div >          
            <input type="text" class="form-control" id="SEmail" placeholder="Company Contact Number" name="semail" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",borderTop:"2px solid #3fd921"}}  onChage={(e)=>{
                 setcontactname(e.target.value);
            }}/>
          </div>
        </div>
    
        <div class="form-group">
          
          <div >          
            <input type="text" class="form-control" id="SEmail" placeholder="Company Email" name="semail" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",borderTop:"2px solid #3fd921"}}  onChage={(e)=>{
                 setcompanyEmail(e.target.value);
            }}/>
          </div>
        </div>
    
        <div class="form-group">
          <div >
            <input type="text" class="form-control" id="ScontactNo" placeholder=" Contact Number" name="scontact" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",borderTop:"2px solid #3fd921"}}  onChange={(e)=>{
                  setcontactno(e.target.value);
            }}/>
          </div>
        </div>
        
        <div class="form-group">
         
          <div>          
            <input type="text" class="form-control" id="PId" placeholder="Product ID" name="pid" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",borderTop:"2px solid #3fd921"}}  onChange={(e)=>{
                  setproductid(e.target.value);
            }}/>
          </div>
        </div>
    
        <div class="form-group">
          <div >          
            <input type="text" class="form-control" id="PName" placeholder="Product Name" name="pname" style={{ backgroundColor: " white", width:"500px", padding:"10px",marginTop:"5px",borderTop:"2px solid #3fd921"}} onChange={(e)=>{
                  setproname(e.target.value);
            }}/>
          </div>
        </div>
    
        <div class="form-group">
          
          <div >          
            <input type="text" class="form-control" id="Quentity" placeholder="Quantity" name="Quentity" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",borderTop:"2px solid #3fd921"}} onChange={(e)=>{
                  <div class="form-group">
          
                  <div >          
                    <input type="text" class="form-control" id="SEmail" placeholder="Supplier Email" name="semail" style={{ backgroundColor: " white", width:"500px",padding:"10px",marginTop:"5px",borderTop:"2px solid #3fd921"}}  onChage={(e)=>{
                         setqueantity(e.target.value);
                    }}/>
                  </div>
                </div>
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
    </div>
    </center>
          )
}