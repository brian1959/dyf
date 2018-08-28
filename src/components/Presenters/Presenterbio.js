import React from 'react';


export default function Speaker(props){

    return(
        <div className="presenter_info_container">
            <div className='pimage'>
                <img src={`../images/${props.pimage}`} alt={`${props.pfirstname} ${props.plastname}`}/>
            </div>
            <div className="presenter_info">
                <h2>{`${props.pfirstname} ${props.plastname}`}</h2>
                <h3>{props.pbio}</h3>    
            </div>
        </div>

    )


}