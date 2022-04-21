import  React, {useState, useEffect} from "react";

import {useParams} from 'react-router-dom'

export default function CustomerInvoice(){

  const [CustomerName,setCustomerName] = useState("");
  const [NIC,setNIC] = useState("");
  const [AnimalType,setAnimalType] = useState("");
  const [ContactNo,setContactNo] = useState("");
  const [Address,setAddress] = useState("");
  const [date,setDate] = useState("");
  const [Time,setTime] = useState("");

  const params = useParams();

  useEffect(() => {
    setCustomerName(params.CustomerName);
    setNIC(params.NIC);
    setAnimalType(params.AnimalType);
    setContactNo(params.ContactNo);
    setAddress(params.Address);
    setDate(params.date);
    setTime(params.Time);
  }, [params])

    return(
        <div >
            <center>
        <div >
   
        <div class="container" style={{padding:"20px"}}>  
        <form class="HealthFormInvoice" style={{marginLeft:"100px", marginBottom:"20px",boxShadow: " 1px 5px 5px green", padding:"50px", width:"700px"}}>
            <h2 className="h2topic22" style={{color:"black" , fontSize:"50px", marginLeft:"60px" }}>Invoice</h2>

            
              <div class="form-group">
                <div >
                  <label style={{color:"black"}}>Name-</label>  
                  <input 
                    value={CustomerName} 
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                    }} 
                    type="text" class="hinvoice" style={{ backgroundColor: " white", width:"300px",padding:"10px",margin:"20px",marginLeft:"60px",border:"none",borderBottom:"3px solid #56f74a"}} 
                  />
              </div>
        </div>

          <div class="form-group">
            <div>  
              <label style={{color:"black"}}>NIC-</label>          
              <input 
                value={NIC} 
                onChange={(e) => {
                  setNIC(e.target.value);
                }} 
              type="text" class="hinvoice" style={{ backgroundColor: " white", width:"300px",padding:"10px",margin:"10px",marginLeft:"70px",border:"none",borderBottom:"3px solid #56f74a"}} />
            </div>
          </div>

          <div class="form-group">
            <div >
            <label style={{color:"black"}}>Animal Type-</label>  
              <input 
                value={AnimalType} 
                onChange={(e) => {
                  setAnimalType(e.target.value);
                }} 
                type="text" class="hinvoice" style={{ backgroundColor: " white", width:"300px",padding:"10px",margin:"10px",marginLeft:"15px",border:"none",borderBottom:"3px solid #56f74a"}}  />
            </div>
          </div>
    
          <div class="form-group">
            <div>  
            <label style={{color:"black"}}>ContactNo-</label>          
              <input                
                value={ContactNo} 
                onChange={(e) => {
                  setContactNo(e.target.value);
                }}  
                type="text" class="hinvoice" style={{ backgroundColor: " white", width:"300px",padding:"10px",margin:"10px",marginLeft:"30px",border:"none",borderBottom:"3px solid 56f74a"}}  />
            </div>
          </div>

          <div class="form-group">
            <div >   
            <label style={{color:"black"}}>Address-</label>         
              <input
              value={Address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              type="text" class="hinvoice" style={{ backgroundColor: " white", width:"300px", padding:"10px",margin:"10px",marginLeft:"40px",border:"none",borderBottom:"3px solid #56f74a"}}/>
            </div>
          </div>

          <div class="form-group">
            <div >   
            <label style={{color:"black"}}>Address-</label>         
              <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
              }}
              type="text" class="hinvoice" style={{ backgroundColor: " white", width:"300px", padding:"10px",margin:"10px",marginLeft:"40px",border:"none",borderBottom:"3px solid #56f74a"}}/>
            </div>
          </div>

          <div class="form-group">
            <div > 
            <label style={{color:"black"}}>Name-</label>           
              <input 
              value={Time} 
              onChange={(e) => {
                setTime(e.target.value)
              }} type="text" class="hinvoice" style={{ backgroundColor: " white", width:"300px",padding:"10px",margin:"10px",marginLeft:"60px",border:"none",borderBottom:"3px solid #56f74a"}}/>
            </div>
          </div>
        </form>
      </div>
    </div>
    </center>
    </div>
  )
}
 
