import React from 'react';



export default function Myschedule(props){



    return(
        <div className='my-schedule-container'>
        <div className="my-schedule-field header-day">
        {props.sday}</div>
        <div className="my-schedule-field header-time">{props.stime}</div>
        <div className="my-schedule-field header-class">{props.coursetitle}</div>
        <div className="my-schedule-field header-presenter">{props.presenter}</div>
        <button onClick={()=> props.deleteClass(props.asid)}>Delete Class</button>
        
        </div>


    )
}