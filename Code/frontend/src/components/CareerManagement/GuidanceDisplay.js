import react from "react";
import {link} from "react-router-dom"
function GuidanceDisplay(){
    return(
        <div>
	<div class="container py-2">
		<div class="h1 text-center text-dark" id="pageHeaderTitle">Career Guidance Programs</div>

		<article class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="http://jungleworks.com/wp-content/uploads/2020/12/shutterstock_700890880.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">Product Development Training Program</a></h1>
				<div class="postcard__subtitle small">
						<i class="fas fa-calendar-alt mr-2"></i> Wed, April 13th 2022
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Product Development Training Programs is conduct for develop your skills and get many experiences in development stratergies. You can follow this program to develop your knowledege on product development.</div>
                <button type="button" class="btn btn-primary btn-sm">Register to Program </button>
			</div>
		</article>
		<article class="postcard light green">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://www.limg.lk/resources/30/banner.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title green"><a href="#">Analytical Chemist Training Program</a></h1>
				<div class="postcard__subtitle small">
						<i class="fas fa-calendar-alt mr-2"></i> Fri, April 15th 2020
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">This program is conduct for improve analytical skills of the people who are working in analytical feilds. You can get many experiences by following this program and you can develop your analytical skills. We provide the best training for you.</div>
                <button type="button" class="btn btn-primary btn-sm">Register to Program </button>
			</div>
		</article>
		<article class="postcard light yellow">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://image.made-in-china.com/202f0j00JiLUsrqwwCby/Zoomlion-Agriculture-Machinery-Rice-Combine-Harvester.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title yellow"><a href="#">Heavy Machinery Training Program</a></h1>
				<div class="postcard__subtitle small">	
						<i class="fas fa-calendar-alt mr-2"></i> Sat, April 16th 2022
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">We are plan to conduct Heavy Machinery Training Program in collaboration of HI-TEC Lanka Heavy Machinery Training Accademy. This will be a promotional program and fully discounted training program. Conditions Apply.</div>
	            <button type="button" class="btn btn-primary btn-sm">Register to Program </button>
			</div>
		</article>
	</div>
 </div>
    );
    }
export default GuidanceDisplay;