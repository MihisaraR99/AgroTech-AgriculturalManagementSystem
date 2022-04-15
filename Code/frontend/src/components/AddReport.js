import React ,{useState} from "react"
import axios from "axios";


export default function AddReport(){

const[cName,setcName]   = useState("");
const[cEmail,setcEmail] = useState("");
const[about,setabout]   = useState("");
const[labId,setlabId]   = useState("");
const[reportStatus,setreportStatus] = useState("");

function sentData(e){
    e.preventDefault();
    const newReport ={
        cName,
        cEmail,
        about,
        labId,
        reportStatus
    }
    
    axios.post("http://localhost:8000/reports/add",newReport).then(() => {
        alert("Student added")
    }).catch((err)=>{
        alert(err)
    })

}

    return(

        <div className="container">
            <form onSubmit={sentData}>

            <div class="mb-3">

                <label for="cName" class="form-label">Company name</label>
                <input type="text" class="form-control" id="cName" placeholder="Enter Company Name" 
                onChange={(e)=>{
                    setcName(e.target.value);
                }
                }/>
            </div>

                            
            <div class="mb-3">
                <label for="cEmail" class="form-label">Company e-mail</label>
                <input type="email" class="form-control" id="cEmail" placeholder="Enter Company email"
                onChange={(e)=>{
                    setcEmail(e.target.value);
                }}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

                            
            <div class="mb-3">

                <label for="about" class="form-label">About</label>
                <input type="text" class="form-control" id="about" placeholder="Enter what report about"
                onChange={(e)=>{
                    setabout(e.target.value);
                }
            }/>
            </div>

                            
            <div class="mb-3">
                <label for="labId" class="form-label">Lab ID</label>
                <input type="text" class="form-control" id="labId" placeholder="Lab ID"
                onChange={(e)=>{
                    setlabId(e.target.value);
                }}/>
            </div>

                            
            <div class="mb-3">
                <label for="reportStatus" class="form-label">Report Status</label>
                <input type="text" class="form-control" id="reportStatus" placeholder="Enter Report Status"
                     onChange={(e)=>{
                        setreportStatus(e.target.value);
                    }}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}