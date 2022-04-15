import PropTypes from 'prop-types'
import React,{useState} from "react";
import axios from "axios";


export default function UpdateProducts() {
  
  /*create state*/
const [PId,setpid] = useState("");
const [PName,setpname] = useState("");
const [Quentity,setQno] = useState("");

function sendData(e){
    e.preventDefault();
   
     const id = this.props.match.params.id;

    const newProduct = {
     
      PId,
      PName,
      Quentity
    }
   
    axios.put(`http://localhost:8000/api/wholesale/update/:id`,newProduct).then(()=>{
      alert("Product Updated");

     
    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}
    return(
    <div>
      
      <center>
  <div class="container "  style={{ 
                   
                    //backgroundImage: "url(img1.png)",
                    marginLeft: "25%",
                    
                    marginTop: "20px",
                    color:"white",
                    width:"1100px",
                    margin:" 20px",
                    padding: "50px 50px 20px 50px"}}>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
 <h2>Add Products</h2>

  <form class="form-horizontal" onSubmit={sendData}  style={{ 
                  
                    backgroundColor: "black",
                    width:"600px",
                    margin:" 20px",
                    padding: "50px 50px 20px 50px",
                    boxShadow: " 5px 10px #c5ebd8"
                   }}>

   


    
    <div class="form-group">
      <label  for="PId">Product ID:</label>
      <div>          
        <input type="text" class="form-control" id="PId" placeholder="" name="pid" style={{ backgroundColor: " white", width:"500px"}}  onChange={(e)=>{
              setpid(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <label  for="PName">Product Name:</label>
      <div >          
        <input type="text" class="form-control" id="PName" placeholder="" name="pname" style={{ backgroundColor: " white", width:"500px"}} onChange={(e)=>{
              setpname(e.target.value);
        }}/>
      </div>
    </div>

    <div class="form-group">
      <label for="Quentity">Quentity:</label>
      <div >          
        <input type="text" class="form-control" id="Quentity" placeholder="" name="Quentity" style={{ backgroundColor: " white", width:"500px"}} onChange={(e)=>{
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
</center>
    </div>
    )  
  
}

