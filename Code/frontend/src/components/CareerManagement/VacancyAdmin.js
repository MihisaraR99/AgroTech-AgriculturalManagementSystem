import react,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 

function VacancyAdmin(){
    const [vacancy, setVacancy] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/AddVacancies/all").then(res => {
           setVacancy(res.data);
           console.log(res.data);
        })		
        }, []) 

    return(
    <body class="adminbody">
<div class="container-xl">
<div class="h1 text-center text-dark" id="pageHeaderTitle">Vacancies Admin Dashboard</div>

    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6"><h2><b>Manage </b><b>Vacancies</b></h2></div>
                <div>
                    <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-plus"></i> <span>Add New Vacancies</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>VacancyNo&nbsp;</th>
                        <th>Job Title</th>
                        <th>Job Description&nbsp;</th>
                        <th>Image</th>
                        <th>PublishedDate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                {vacancy && vacancy.map((vaca, i) => (
                             <tr data-status="active">
                                <td>{vaca._id}</td>
                                <td>{vaca.jobTitle}</td>
                                <td><span class="label label-success">{vaca.jobDescription}</span></td>
                                <td>{vaca.jobImage}</td>
                                <td>{vaca.publishedDate}</td>
                                <td><button class="btn btn-sm manage"> Delete</button></td>
                                <td><button class="btn btn-sm manage"  > <Link to={`/UpdateVacancy/${vaca._id}`} > Update </Link>  </button></td>
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
export default VacancyAdmin;