import React, {Component} from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import './labStyles.css';

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
  }

class EditReport extends Component{


    constructor(props){
        super(props);
        this.state={
            cName:"",
            cEmail:"",
            about:"",
            labId:"",
            reportStatus:""

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

       const{cName,cEmail,about,labId,reportStatus} = this.state;

       const data ={
           cName:cName,
           cEmail:cEmail,
           about:about,
           labId:labId,
           reportStatus:reportStatus
       }

       console.log(data)


       axios.put(`http://localhost:8000/api/lab/update/${id}`,data).then((res) => {
           if(res.data.success){
               alert("Post Edited Successfully")
               this.setState(
                   {
                    cName:"",
                    cEmail:"",
                    about:"",
                    labId:"",
                    reportStatus:""
                   }
               )
           }
       })

   }


        componentDidMount() {
            const id = this.props.params.id;

            axios.get(`http://localhost:8000/api/lab/oneR/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    cName:res.data.report.cName,
                    cEmail:res.data.report.cEmail,
                    about:res.data.report.about,
                    labId:res.data.report.labId,
                    reportStatus:res.data.report.reportStatus,
                });
            }
            });
        }


        render(){
            return(
                <div className='col-md-8 mt-4 mx-auto'>
                   <div className='div1'> 
                    <h1 className='h2 mb-2 font-weight-normal' style={{color:'#bfbfbf',background:"#000000",padding:'15px',textAlign:"center",borderRadius:"35px"}}>Edit Lab Report Here!</h1>
                    <from className='need-validation' nonValidate>
                    
                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label className='RepLeble'>Company Name :-</label>
                            <input type="text"
                            className='RepBox2'
                            name='cName'
                            placeholder=' '
                            value={this.state.cName}
                            onChange={this.handleInputChange}></input>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label className='RepLeble'>Company Email:-</label>
                            <input type="email"
                             className='RepBox2'
                            name='cEmail'
                            placeholder=' '
                            value={this.state.cEmail}
                            onChange={this.handleInputChange}></input>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label className='RepLeble'>Lab Report About :-</label>
                            <input type="text"
                             className='RepBox2'
                            name='about'
                            placeholder=' '
                            value={this.state.about}
                            onChange={this.handleInputChange}></input>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label className='RepLeble'>Lab ID :-</label>
                            <input type="text"
                             className='RepBox2'
                            name='labId'
                            placeholder=' '
                            value={this.state.labId}
                            onChange={this.handleInputChange}></input>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label className='RepLeble'>Lab Report Status :-</label>
                            <input type="text"
                             className='RepBox2'
                            name='reportStatus'
                            placeholder=' '
                            value={this.state.reportStatus}
                            onChange={this.handleInputChange}></input>
                        </div>
                <button className='btn btn-success' type="Submit" style={{marginTop:'15px'}} onClick={this.onSubmit} >
                <i className='far fa-check-square'></i>
                &nbsp;UPDATE 
                </button>
                    </from>
                    </div>
                </div>
            )
        }
}
export default withParams(EditReport);