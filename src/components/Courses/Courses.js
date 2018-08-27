import React, {Component} from 'react';
import axios from 'axios';
import Coursesummary from './Coursesummary';

class Courses extends Component {
    constructor(props){
        super(props)

        this.state= {
            coursesToDisplay:[],
            cname:'',
            csummary:'',
            pfirstname:'',
            plastname:'',
            elevel:''
        }

    }
    componentDidMount(){
        axios
        .get('/api/courses')
        .then(response => {
            console.log(response)
            this.setState({coursesToDisplay:response.data})
        })
    }
    
    render() {
        const {coursesToDisplay} =this.state;

        return(
            <div>
                {
                   coursesToDisplay.map(course => (
                       <Coursesummary key={course.courseid}
                       cname={course.cname}
                       csummary={course.csummary}
                       pfirstname={course.pfirstname}
                       plastname={course.plastname}
                       elevel={course.elevel} />
                   )) 
                }
            </div>
        )
    }

}

export default Courses