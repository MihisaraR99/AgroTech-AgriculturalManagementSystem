import React from 'react'
import './eventAdmin.css';

const EventAdmin = () => {
return (

<>

<body class="adminbody">
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6"><h2><b>Manage   </b><b>Events</b></h2></div>
                <div>
                    <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-plus"></i> <span>Add New Events</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Event ID&nbsp;</th>
                        <th>Event Name</th>
                        <th>Category&nbsp;</th>
                        <th>Start_Date&nbsp;</th>
                        <th>Start_Time</th>
                        <th>Venue</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr data-status="active">
                        <td>1</td>
                        <td>Crop protection</td>
                        <td>Agriculture</td>
                        <td><span class="label label-success">22th jan 2022</span></td>
                        <td>8:30 a.m</td>
                        <td>Colombo</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                       
                    </tr>
                    <tr data-status="inactive">
                        <td>2</td>
                        <td>Animal Health</td>
                        <td>Animal farm</td>
                        <td><span class="label label-warning">4th april 2023</span></td>
                        <td>10:30 a.m</td>
                        <td>Kandy</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                    </tr>
                    <tr data-status="active">
                        <td>3</td>
                        <td>Agropex</td>
                        <td>agriculture</td>
                        <td><span class="label label-success">31st March 2023</span></td>
                        <td>10:30 a.m</td>
                        <td>Canada</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                    </tr>
                    <tr data-status="expired">
                        <td>4</td>
                        <td>Best crops</td>
                        <td>Agriculture</td>
                        <td><span class="label label-danger">5th March</span></td>
                        <td>8:30 a.m</td>
                        <td>India</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                    </tr>
                    <tr data-status="inactive">
                        <td>5</td>
                        <td>Greeny Stand</td>
                        <td>Agrculture</td>
                        <td><span class="label label-warning">21st Dec 2022</span></td>
                        <td>10:45 a.m</td>
                        <td>USA</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>   
</div> 
</body>














</>



    );
}
export default EventAdmin