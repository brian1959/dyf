import React, {Component} from 'react';
import axios from 'axios';
import Schedule from './Schedule';

class Courses extends Component {
    constructor(props){
        super(props)

        this.state= {
            coursesToDisplay:[],
            scheduleid:'',
            coursename:'',
            coursesummary:'',
            presenter:'',
            company:'',
            day:'',
            time:'',
            explevel:''
        }

    }
    componentDidMount(){
        axios
        .get('/api/schedule')
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
                       <Schedule key={course.scheduleid}
                       coursename={course.coursename}
                       coursesummary={course.coursesummary}
                       presenter={course.presenter}
                       company={course.company}
                       day={course.day}
                       time={course.time}
                       explevel={course.explevel} />
                   )) 
                }
            </div>
        )
    }

}

export default Courses