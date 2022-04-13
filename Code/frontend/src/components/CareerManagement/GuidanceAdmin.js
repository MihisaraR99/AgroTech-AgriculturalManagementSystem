import react from "react";
import {link} from "react-router-dom"
function GuidanceAdmin(){
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
                            <tr data-status="active">
                                <td>1</td>
                                <td>Product Development Training Program</td>
                                <td><span class="label label-success">Product Development Training Programs is conduct for develop your skills and get many experiences in development stratergies. You can follow this program to develop your knowledege on product development.</span></td>
                                <td>"http://jungleworks.com/wp-content/uploads/2020/12/shutterstock_700890880.jpg"</td>
                                <td>Wed, April 13th 2022</td>
                                <td><a href="#" class="btn btn-sm manage">Manage</a> </td>
                               
                            </tr>
                            <tr data-status="inactive">
                                <td>2</td>
                                <td>Analytical Chemist Training Program</td>
                                <td><span class="label label-success">This program is conduct for improve analytical skills of the people who are working in analytical feilds. You can get many experiences by following this program and you can develop your analytical skills. We provide the best training for you.</span></td>
                                <td>"https://www.limg.lk/resources/30/banner.jpg"</td>
                                <td>Fri, April 15th 2020</td>
                                <td><a href="#" class="btn btn-sm manage">Manage</a> </td>
                               
                            </tr>
                            <tr data-status="active">
                                <td>3</td>
                                <td>Heavy Machinery Training Program</td>
                                <td><span class="label label-success">We are plan to conduct Heavy Machinery Training Program in collaboration of HI-TEC Lanka Heavy Machinery Training Accademy. This will be a promotional program and fully discounted training program. Conditions Apply.</span></td>
                                <td>"https://image.made-in-china.com/202f0j00JiLUsrqwwCby/Zoomlion-Agriculture-Machinery-Rice-Combine-Harvester.jpg"</td>
                                <td>Sat, April 16th 2022</td>
                                <td><a href="#" class="btn btn-sm manage">Manage</a> </td>
                                 
                            </tr>
                        
                        </tbody>
                    </table>
                </div> 
            </div>   
        </div> 
        </body>
        );
    }
export default GuidanceAdmin;