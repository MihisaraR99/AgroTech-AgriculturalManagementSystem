import React from "react";
import {Link} from "react-router-dom";

function CareerHome(){
    return (
     <div>
          <div class="career"> 
            <div>
            <div class="h1 text-center text-dark" id="pageHeaderTitle">Careers</div>
            </div>
            <section class="features-icons bg-light text-center">
           
                <div class="rowa">
                <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-window m-auto text-primary"></i></div>
                            <h3>Career Opportunities</h3>
                            <p class="lead mb-0">You can build your future Career with us.</p>
                            <button  class="btn btn-success" data-toggle="modal"  > <Link to={`/VacancyDisplay/`} > Find Out More </Link>  </button>
                        </div>
                </div>
                    
                    <div class="col-lg-5">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-layers m-auto text-primary"></i></div>
                            <h3>Career Guidance Programs</h3>
                            <p class="lead mb-0">You can get more experiences by go through our Career Guidance Events</p>
                            <button  class="btn btn-success" data-toggle="modal"  > <Link to={`/GuidanceDisplay/`} > Find Out More</Link>  </button>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-terminal m-auto text-primary"></i></div>
                            <h3>Register as a Candidate</h3>
                            <p class="lead mb-0">You can register as a job Candidate. If we have a vacancy for you, then we will call for you.</p>
                            <button  class="btn btn-success" data-toggle="modal"  > <Link to={`/CandidateRegister/`} > Register Now </Link>  </button>
                        </div>
                    </div>
                </div>
            
        </section>
     </div>
     </div>
    );
}
export default CareerHome;