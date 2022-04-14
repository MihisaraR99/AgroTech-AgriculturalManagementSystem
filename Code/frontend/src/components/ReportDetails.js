import React,{Component, component} from 'react';
import axios from 'axios';

export default class ReportDetails extends Component{
constructor(props){
    super(props);

    this.state={
        report:{}
    };
}


componentDidMount(){
const id = this.props.match.params.id;

axios.get('http://localhost:8000/api/lab/repD/${id}').then((res)=>{
    if(res.data.success){
        this.setState({
            reports:res.data.report
        });
        console.log(this.state.report);
    }
});

}


    render(){
        return(
            <div>
                Post Details
            </div>
        )
    }
}