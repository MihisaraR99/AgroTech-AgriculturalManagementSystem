import React from 'react'
import './addevents.css';

const Addevent = () => {
  return (
    <div class="backgroundevent">


<div>

<div class="regform"><h1>Event Registration </h1></div>

</div>

<div class="main">
  <form>

<div id="event_id">
<h2 class="eve1">Event_Id</h2>
<input class="event_id" type="text" name="Event_Id"></input><br></br>
<laybel class="firstlaybel">Event Id</laybel>

</div>
<div>
<h2 class="name">Event Name</h2>
<input class="evename" type="text" name="Event_Name"></input><br></br>
<laybel class="secondlaybel">Event Name</laybel>

</div>

<h2 class="category1">Category</h2>
<select class="option" name="Category">
<option disabled="disabled" selected="selected">Choose category</option>
<option>Agricultural event</option>
<option>Animal farm</option>

</select>

<h2 class="name">StartDate/Time</h2>
<input class="startdate" type="text" name="Start_Date"></input><br></br>
<laybel class="seconddlaybel">Start Date</laybel>
<input class="starttime" type="text" name="Start_Time"></input><br></br>
<laybel class="thirdlaybel" >Start time</laybel>

<h2 class="name">End Date/Time</h2>
<input class="enddate" type="text" name="End_Date"></input><br></br>
<laybel class="fourthlaybel">End Date</laybel>
<input class="endtime" type="text" name="End_Time"></input><br></br>
<laybel class="fifthlaybel" >End time</laybel>


<h2 class="eventq">All Day Event?</h2>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    YES
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    NO
  </label>
  
</div>
<h2 class="eventq">Virtual Event?</h2>
<div class="form-check2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-labe2" for="flexRadioDefault2">
    YES
  </label>
</div>
<div class="form-check2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-labe2" for="flexRadioDefault2">
    NO
  </label>
  
</div>


<h2 class="venue1">Venue</h2>
<input class="venue" type="text" name="venue"></input><br></br>

<span class="intro">Today, there are many industry events promoted and advertised out there. And it’s getting more and more challenging for people to decide what event to attend and what event to skip.
   If you want to grab the attention of prospective attendees, you should explain how they can personally benefit from participating in your event.</span>

   <div class="row py-4">
        <div class="col-lg-6 mx-auto">

           
            <div class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                <input id="upload" type="file" onchange="readURL(this);" class="form-control border-0"/>
                <label id="upload-label" for="upload" class="font-weight-light text-muted">Choose file</label>
                <div class="input-group-append">
                    <label for="upload" class="btn btn-light m-0 rounded-pill px-4"> <i class="fa fa-cloud-upload mr-2 text-muted"></i><small class="text-uppercase font-weight-bold text-muted">Choose file</small></label>
                </div>
            </div>

           
            <p class="font-italic text-white text-center">The image uploaded will be rendered inside the box below.</p>
            <div class="image-area mt-4"><img id="imageResult" src="#" alt="" class="img-fluid rounded shadow-sm mx-auto d-block"/></div>

        </div>
    </div>

    <button class="submitbutton" type="submit">Register</button>

  </form>

  

		         
            </div>
	</div>


	


 


  
  
    
  );
}

export default Addevent