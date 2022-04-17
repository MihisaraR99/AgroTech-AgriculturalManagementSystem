import React, { Component } from "react";
import axios from "axios";
import './labStyles.css';
import { useParams } from "react-router";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col} from "react-bootstrap";
import { Button } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class ReportDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: {},
    };
  }

  componentDidMount() {
    const id = this.props.params.id;

    axios.get(`http://localhost:8000/api/lab/oneR/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          report:res.data.report,
        });
      }
    });
  }

  render() {
    return (
     <div className="wrapper-2"> 
        {this.state.report && (

          
                <div className='col-md-7 mt-5 mx-auto'>
          <div className="box-2" > 
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
                <Form className >
                <Zoom left>
                 <div className='text-wrapper-2'>
                    <h1 className='h3 mb-3 font-weight-normal ' style={{color:'White' ,fontSize:'30px', fontFamily:'AvenirNextCondensed-Italic',fontWeight:'bolder' ,textDecorationLine:'underline'}}> {this.state.report.cName} Lab Report Details</h1>
                 
                <br></br>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{color:'white' , fontFamily:'Georgia, serif',fontSize:'20px',fontWeight:'bolder'}}>Company Name</Form.Label>
                      <Form.Control value={this.state.report.cName}    readonly/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label style={{color:'white', fontFamily:'Georgia, serif',fontSize:'20px',fontWeight:'bolder'}}>Company Email</Form.Label>
                      <Form.Control  value={this.state.report.cEmail}   readonly />
                    </Form.Group>
                  </Row>
                  <br></br>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label style={{color:'white', fontFamily:'Georgia, serif',fontSize:'20px',fontWeight:'bolder'}}>Lab Report About</Form.Label>
                    <Form.Control as="textarea" rows="3" value={this.state.report.about}   readonly />
                  </Form.Group>
                  <br></br>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label style={{color:'white', fontFamily:'Georgia, serif',fontSize:'20px',fontWeight:'bolder'}}>Lab ID</Form.Label>
                      <Form.Control  value={this.state.report.labId}   readonly/>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label style={{color:'white',fontFamily:'Georgia, serif',fontSize:'20px',fontWeight:'bolder'}}>Lab Report Status</Form.Label>
                      <Form.Control value={this.state.report.reportStatus}   readonly/>
                    </Form.Group>
                  </Row>
<br></br>
                  <Button variant="primary" type="submit" style={{color:'White' , backgroundColor:'green' , paddingLeft:'50px' , paddingRight:'50px' , fontSize:'15px' ,borderBlockColor:'white'}} >
                    Ok
                  </Button>
                  </div>
                  </Zoom>
                </Form>
                <br></br>
            </div>
             
        )}
      </div>
    );
  }
}

export default withParams(ReportDetails);
