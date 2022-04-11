import React from "react";
import { Link } from "react-router-dom";

function Courseadmin(){
    return(

       <body class="adminbody">
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6"><h2><b>Manage   </b><b>Courses</b></h2></div>
                <div>
                    <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-plus"></i> <span>Add New Course</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Course ID&nbsp;</th>
                        <th>Course Name</th>
                        <th>Category&nbsp;</th>
                        <th>Institute&nbsp;</th>
                        <th>Enrolements</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-status="active">
                        <td>1</td>
                        <td>Soil Science</td>
                        <td>Soil</td>
                        <td><span class="label label-success">Hemas Agro</span></td>
                        <td>800</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                       
                    </tr>
                    <tr data-status="inactive">
                        <td>2</td>
                        <td>Animal Health</td>
                        <td>Animal</td>
                        <td><span class="label label-warning">Ceylon agro</span></td>
                        <td>300</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                    </tr>
                    <tr data-status="active">
                        <td>3</td>
                        <td>Seed Science</td>
                        <td>Seed</td>
                        <td><span class="label label-success">Agro Tech</span></td>
                        <td>500</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                    </tr>
                    <tr data-status="expired">
                        <td>4</td>
                        <td>Fertilizer Science</td>
                        <td>Fertilizer</td>
                        <td><span class="label label-danger">Baurs</span></td>
                        <td>200</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                    </tr>
                    <tr data-status="inactive">
                        <td>5</td>
                        <td>Crop Science</td>
                        <td>Crop</td>
                        <td><span class="label label-warning">CIC Agro</span></td>
                        <td>100</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>   
</div> 
</body>
    );

    }

export default Courseadmin;