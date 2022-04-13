import react from "react";
import {link} from "react-router-dom"
function VacancyAdmin(){
    return(
       <body class="adminbody">
<div class="container-xl">
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
                    <tr data-status="active">
                        <td>1</td>
                        <td>Vegetable Supplier</td>
                        <td><span class="label label-success">We are looking for a fresh Vegetable Suppliers. We are collect vegetables for our priducts and online store. The suppliers should be able to supply vegetables for our requiremenets. This opportunity is yours. Apply Quickly. Condtions apply.</span></td>
                        <td>"https://www.simonbaynes.net/assets/template/images/york_fruit_and_veg.jpg"</td>
                        <td>Wed, April 11th 2022</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a> </td>
                       
                    </tr>
                    <tr data-status="inactive">
                        <td>2</td>
                        <td>Fruit Supplier</td>
                        <td><span class="label label-success">We are looking for a fresh Fruit Suppliers. We are collect fruits for our priducts and online store. The suppliers should be able to supply fruits for our requiremenets. This opportunity is yours. Apply Quickly. Condtions apply.</span></td>
                        <td>"https://static.toiimg.com/photo/84969948.cms"</td>
                        <td>Wed, April 11th 2022</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a> </td>
                       
                    </tr>
                    <tr data-status="active">
                        <td>3</td>
                        <td>Veterinarian</td>
                        <td><span class="label label-success">We are Looking for a Qualified and Experinced Veterinarian for our Animal Health Care Department. Two Vacancies are here. Apply now for the valuable opportunity to work with a us.</span></td>
                        <td>"https://www.indiaeducation.net/imagesvr_ce/8982/iStock_000009819502Small.jpg"</td>
                        <td>Wed, April 11th 2022</td>
                        <td><a href="#" class="btn btn-sm manage">Manage</a> </td>
                       
                        
                    </tr>
                    <tr data-status="expired">
                        <td>4</td>
                        <td>Warehouse Manager</td>
                        <td><span class="label label-success">We are looking for an Experinced and Qualified Warehouse Manager for our Negombo Plant. Apply Now for work with us.</span></td>
                        <td>"https://www.autotrainingcentre.com/wp-content/uploads/2017/03/The-Skills-Grads-of-Auto-Service-College-Should-Have-to-be-a-Warehouse-Manager.jpg" alt="Image Title"</td>
                        <td>Wed, April 11th 2022</td>
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
export default VacancyAdmin;