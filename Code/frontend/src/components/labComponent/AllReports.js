import React ,{Component} from 'react';
import axios from 'axios';
import Pulse from 'react-reveal/Pulse';
import './labStyles.css';

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

onDelete = (id) =>{
    axios.delete(`http://localhost:8000/api/lab/delete/${id}`).then((res) => {
         alert("Delete Successfull");
        this.retrieveReports();
    })
}

filterData(reports,searchKey){
    const result = reports && reports.filter((report) =>{ 
    return report.cName.includes(searchKey)
    })

    this.setState({reports:result})
}




handleSearchArea = (e) =>{
   const searchKey = e.target.value ;
   axios.get('http://localhost:8000/api/lab/all').then((res) =>{
    if(res.data.success){
    this.filterData(res.data.reports,searchKey)
    }       
});

}

    render(){
        return(
            <div className='background1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 mt-2 mb-2'>
                            <h4 style={{color:'white'}}>All Reports</h4>
                        </div>
                        <div className='col-lg-3 mt-2 mb-2'>
                            <input 
                            className='form-control'
                            type='search'
                            placeholder='Search'
                            name='searchQuery'
                            onChange={this.handleSearchArea}>                      
                            </input>
                        </div>
  
                  </div>
                  <Pulse>
            <div className='div2'>
                 <table className ="table table-hover" style={{marginTop:'40px'}}>
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
                         {this.state.reports &&
                         this.state.reports.map((reports,index)=>(
                            <tr key={index}>
                                <th scope ="row">{index+1}</th>
                                <td>
                                     <a href={`/rep/${reports._id}`} style ={{textDecoration:'none'}} >
                                    {reports.cName}
                                    </a>
                                </td>
                                <td>{reports.cEmail}</td>
                                <td>{reports.about}</td>
                                <td>{reports.labId}</td>
                                <td>{reports.reportStatus}</td>
                                <td>
                                    <a className ="btn btn-warning" href={`/edit/${reports._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp;EDIT
                                    </a>
                                    <br></br>
                                    &nbsp; 
                                    <a className ="btn btn-danger" href="#" onClick={() => this.onDelete(reports._id)}>
                                        <i className="far fa-trash-alt"></i>&nbsp;DELETE
                                    </a>
                                </td>
                            </tr> 
                         ))}
                     </tbody>
                 </table>

                 </div>
                 </Pulse>
                 <br></br>
                 <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>
            </div>
            </div>  
        )
    }
}

 
