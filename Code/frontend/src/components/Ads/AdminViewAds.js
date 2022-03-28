import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminViewAds = () => {




    const [adsr, setAdsr] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Ads/all`)
      .then((res) => {
        setAdsr(res.data);
      });

    console.log(adsr);
  }, []);


  return (
    <div className='col-md-8 mt-4 mx-auto'>
<table className='table table-hover' style={{marginTop:'40px'}}>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Type</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Size(Purches)</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
              {adsr &&
          adsr.map((adr,index) =>(
                  <tr key={index}>
                    <th scope='row'>{index+1}</th>
                    <td>
                        <Link to={`/Ads/${adsr._id}`} style={{textDecoration:'none'}}>
                        {adr.type}
                        </Link>
                        </td>
                    <td>{adr.priceRate}</td>
                    <td>{adr.sizeOfArea}</td>
                    <td>
                      <Link className='btn btn-warning' to={`/edit/${adsr._id}`}>
                        <i className='fas fa-edit'></i>&nbsp;Edit
                        </Link>
                        &nbsp;
                        <Link className='btn btn-danger' to='#' onClick={() => this.onDelete(adsr._id)}>
                          <i className='far fa-trash-alt'></i>&nbsp;Delete
                        </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
    
            </table>
    
            <button className='btn btn-success'> <Link to="/adform" style={{extDecoration:'none',color:'white'}}>Create New Advertisment</Link></button>
            
          </div>
  );
}
export default AdminViewAds;