import react,{useState, useEffect} from "react";
import {link} from "react-router-dom"
import axios from "axios";

function GuidanceDisplay(){
	const [articles, setArticles] = useState([]);
	useEffect(() => {

		axios.get("http://localhost:8000/api/AddGuidances/all").then(res => {
			setArticles(res.data);
			console.log(res.data);
		})
		
		}, [])

    return(
        <div>
	<div class="container py-2 vacancycontainer">
		<div class="h1 text-center text-dark" id="pageHeaderTitle">Career Guidance Programs</div>
       
		{articles && articles.map((article, i) => (
        <article key={i} class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={article.programImage} alt="Image Title" />
			</a>
	
  		<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">{article.programName}</a></h1>
				<div class="postcard__subtitle small">
						<i class="fas fa-calendar-alt mr-2"></i> {article.publishedDate}
			</div>
	
  	<div class="postcard__bar"></div>
		<div class="postcard__preview-txt">{article.programDescription}</div>
           <button type="button" class="btn btn-primary btn-sm">Register to Program </button>
	</div>
</article>
))}
	</div>
 </div>
    );
    }
export default GuidanceDisplay;