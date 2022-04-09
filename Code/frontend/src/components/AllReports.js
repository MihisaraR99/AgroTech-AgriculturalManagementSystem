
import React ,{Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
export default class AllRepports extends Component {

constructor(props){
    super(props);
    this.state={
        reports:[]
    };
}

componentDidMount(){
    this.retrieveReports();
}

//method
retrieveReports(){
  axios.get('http://localhost:8000/api/lab/all').then(res =>{
      if(res.data.success){
          this.setState({
            reports:res.data.reports
          });
      }
console.log(this.state.reports);
  });
}

    render(){
        return(
            <div className="container" >
                <p>All Reports</p>
                 <table className ="table">
                     <thead>
                         <tr>
                           <th scope ="col">#</th>  
                           <th scope ="col">Company Name</th>  
                           <th scope ="col">Company Email</th>  
                           <th scope ="col">Report About</th>  
                           <th scope ="col">Lab ID</th>  
                           <th scope ="col">Report Status</th>
                           <th scope ="col">Action</th>    
                         </tr>
                     </thead>
                     <tbody>
                         {this.state.reports.map((reports,index)=>(
                            <tr key={index}>
                                <th scope ="row">{index+1}</th>
                                <td>
                                    <Link to={`/rep/${reports._id}`}>
                                    {reports.cName}
                                    </Link>
                                </td>
                                <td>{reports.cEmail}</td>
                                <td>{reports.about}</td>
                                <td>{reports.labId}</td>
                                <td>{reports.reportStatus}</td>
                                <td>
                                    <a className ="btn btn-warning" href="#">
                                        <i className="fas fa-edit"></i>&nbsp;EDIT
                                    </a>
                                    &nbsp; 
                                    <a className ="btn btn-danger" href="#">
                                        <i className="far fa-trash-alt"></i>&nbsp;DELETE
                                    </a>
                                </td>
                            </tr> 
                         ))}
                     </tbody>
                 </table>

                 <button className="btn btn-success"><a href="/add" style={{textDecoration:'noon',color:'white'}}>Create New Post</a></button>
            </div>
        )
    }
}

 
