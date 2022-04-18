import react,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 

function GuidanceAdmin(){
    const [guidance, setGuidance] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/AddGuidances/all").then(res => {
           setGuidance(res.data);
           console.log(res.data);
        })		
        }, []) 

    return(
        <body class="adminbody">
        <div class="container-xl">
        <div class="h1 text-center text-dark" id="pageHeaderTitle">Guidance Programs Admin Dashboard</div>

            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6"><h2><b>Manage </b><b>Guidance Programs</b></h2></div>
                        <div>
                            <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-plus"></i> <span>Add New Vacancies</span></a>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ProgramNo&nbsp;</th>
                                <th>Program Name</th>
                                <th>Description&nbsp;</th>
                                <th>Image</th>
                                <th>PublishedDate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {guidance && guidance.map((guide, i) => (
                             <tr data-status="active">
                                <td>{guide._id}</td>
                                <td>{guide.programName}</td>
                                <td><span class="label label-success">{guide.programDescription}</span></td>
                                <td>{guide.programImage}</td>
                                <td>{guide.publishedDate}</td>
                                <td><button class="btn btn-sm manage"> Delete</button></td>
                                <td><button class="btn btn-sm manage"  > <Link to={`/UpdateGuidance/${guide._id}`} > Update </Link>  </button></td>
                             </tr>

                         ))}
                        
                        </tbody>
                    </table>
                </div> 
            </div>   
        </div> 
        </body>
        );
    }
export default GuidanceAdmin;