import React, {Component} from 'react'
import axios from 'axios';
import { useParams } from "react-router";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
  }
  

class EditReport extends Component{


    constructor(props){
        super(props);
        this.state={
            type:"",
            town:"",
            AgentRef:"",
            heading:"",
            description:"",
            priceRate:"",
            sizeOfArea:"",
            contactName:"",
            email:"",
            phone:"",
            img:""

        }
   }
  
   handleInputChange = (e) =>{
       const {name,value} = e.target;

       this.setState({
        ...this.state,
        [name]:value
       })
   }


   onSubmit = (e) =>{
       e.preventDefault();
       const id = this.props.params.id;

       const{town,AgentRef,heading,description,priceRate,sizeOfArea,contactName,email,phone,img} = this.state;

       const data ={
       
        town:town,
        AgentRef:AgentRef,
        heading:heading,
        description:description,
        priceRate:priceRate,
        sizeOfArea:sizeOfArea,
        contactName:contactName,
        email:email,
        phone:phone,
        img:img




       }

       console.log(data)


       axios.put(`http://localhost:8000/api/Ads/${id}`,data).then((res) => {
           if(res.data.success){
               alert("Post Edited Successfully")
               this.setState(
                   {
                    
                    town:"",
                    AgentRef:"",
                    heading:"",
                    description:"",
                    priceRate:"",
                    sizeOfArea:"",
                    contactName:"",
                    email:"",
                    phone:"",
                    img:""
                   }
               )
           }
       })



   }



    
        componentDidMount() {
            const id = this.props.params.id;

            axios.get(`http://localhost:8000/api/Ads/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    
                    town:res.data.Ads.town,
                    AgentRef:res.data.Ads.AgentRef,
                    heading:res.data.Ads.heading,
                    description:res.data.Ads.description,
                    priceRate:res.data.Ads.priceRate,
                    sizeOfArea:res.data.Ads.sizeOfArea,
                    contactName:res.data.Ads.contactName,
                    email:res.data.Ads.email,
                    phone:res.data.Ads.phone,
                    img:res.data.Ads.img,
                });
            }
            });
            
        }

        render(){
            return(
                <div className='col-md-8 mt-4 mx-auto'style = {{fontWeight:"bold"}}>
                <h1>Advertiser Form</h1>
                <br/>
               <form>
                <br/>
              
              <div className="row mb-3">
                <label  class="col-sm-2 col-form-label">Town</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputEmail3" name='town' value={this.state.town}
                    onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">AgentRef</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputEmail3" name='AgentRef' value={this.state.AgentRef}
                    onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Heading</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputEmail3" name='heading' value={this.state.heading}
                    onChange={this.handleInputChange}/>
                </div> 
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputEmail3" name='description' value={this.state.description}
                    onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Size of Area</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputEmail3" name='sizeOfArea' value={this.state.sizeOfArea}
                    onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Price Rate</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputEmail3" name='priceRate' value={this.state.priceRate}
                    onChange={this.handleInputChange}/>
                </div>
              </div>
              
              <div className="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Contact Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputEmail3" name='contactName' value={this.state.contactName}
                    onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" name='email' value={this.state.email}
                    onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputEmail3" name='phone' value={this.state.phone}
                    onChange={this.handleInputChange}/>
                </div>
              </div>
              <br/>
              <div className="form-group my-4">
                        <label className="my-1">Image</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Image"
                          name='img' value={this.state.img}
                    onChange={this.handleInputChange}
                        />
                      </div>
              
                      <button className='btn btn-success' type="Submit" style={{marginTop:'15px'}} onClick={this.onSubmit} >
                <i className='far fa-check-square'></i>
                &nbsp;UPDATE 
                </button>
              
            </form>
            </div>
            )
        }
}
export default withParams(EditReport);