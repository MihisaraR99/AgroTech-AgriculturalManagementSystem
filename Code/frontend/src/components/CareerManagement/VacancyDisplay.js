import react from "react";
import {link} from "react-router-dom"

function VacancyDisplay(){
 return(
  <div>
	<div class="container py-2">
		<div class="h1 text-center text-dark" id="pageHeaderTitle">Career Vacancies</div>

		<article class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://www.simonbaynes.net/assets/template/images/york_fruit_and_veg.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">Vegetable Supplier</a></h1>
				<div class="postcard__subtitle small">
						<i class="fas fa-calendar-alt mr-2"></i> Wed, April 11th 2022
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">We are looking for a fresh Vegetable Suppliers. We are collect vegetables for our priducts and online store. The suppliers should be able to supply vegetables for our requiremenets. This opportunity is yours. Apply Quickly. Condtions apply. </div>
               <button type="button" class="btn btn-primary btn-sm">Apply Now </button><br></br>
                <button type="button" class="btns">Save Job </button> 

			</div>
		</article>
		<article class="postcard light green">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://static.toiimg.com/photo/84969948.cms" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title green"><a href="#">Fruit Supplier</a></h1>
				<div class="postcard__subtitle small">
						<i class="fas fa-calendar-alt mr-2"></i> Fri, April 12th 2022
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">We are looking for a fresh Fruits Suppliers. We are collect fruits for our priducts and online store. The suppliers should be able to supply fruits for our requiremenets. This opportunity is yours. Apply Quickly. Condtions apply.</div>
                <button type="button" class="btn btn-primary btn-sm">Apply Now </button><br></br>
                <button type="button" class="btns">Save Job </button> 
			</div>
		</article>
		<article class="postcard light yellow">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://www.indiaeducation.net/imagesvr_ce/8982/iStock_000009819502Small.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title yellow"><a href="#">Veterinarian</a></h1>
				<div class="postcard__subtitle small">	
						<i class="fas fa-calendar-alt mr-2"></i> Sat, April 16th 2022
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">We are Looking for a Qualified and Experinced Veterinarian for our Animal Health Care Department. Two Vacancies are here. Apply now for the valuable opportunity to work with a us.  </div>
                <button type="button" class="btn btn-primary btn-sm">Apply Now </button><br></br>
                <button type="button" class="btns">Save Job </button> 
			</div>
		</article>

    <article class="postcard light yellow">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://www.autotrainingcentre.com/wp-content/uploads/2017/03/The-Skills-Grads-of-Auto-Service-College-Should-Have-to-be-a-Warehouse-Manager.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title yellow"><a href="#">Warehouse Manager</a></h1>
				<div class="postcard__subtitle small">	
						<i class="fas fa-calendar-alt mr-2"></i> Fri, April 15th 2022
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">We are looking for an Experinced and Qualified Warehouse Manager for our Negombo Plant. Apply Now for work with us.  </div>
                <button type="button" class="btn btn-primary btn-sm">Apply Now </button><br></br>
                <button type="button" class="btns">Save Job </button> 
			</div>
		</article>
	</div>
 </div>
    );
    }

export default VacancyDisplay;