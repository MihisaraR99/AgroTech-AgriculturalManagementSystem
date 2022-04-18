import react,{useState, useEffect} from "react";
import {link} from "react-router-dom";
import axios from "axios";

function VacancyDisplay(){
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		axios.get("	http://localhost:8000/api/AddVacancies/all").then(res => {
			setArticles(res.data);
			console.log(res.data);
		})		
		}, [])

 return(
  <div>
	<div class="container py-2 vacancycontainer" >
		<div class="h1 text-center text-dark" id="pageHeaderTitle">Career Vacancies</div>


		{articles && articles.map((article, i) => (
        <article key={i} class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={article.jobImage} alt="Image Title" />
			</a>
	
  		<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">{article.jobTitle}</a></h1>
				<div class="postcard__subtitle small">
						<i class="fas fa-calendar-alt mr-2"></i> {article.publishedDate}
			</div>
	
  	<div class="postcard__bar"></div>
		<div class="postcard__preview-txt">{article.jobDescription}</div>
           <button type="button" class="btn btn-primary btn-sm">Apply Now</button><br></br>
		   <button type="button" class="btns">Save Job </button> 
	</div>
</article>
))}


	</div>
 </div>
    );
    }

export default VacancyDisplay;