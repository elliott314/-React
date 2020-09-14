import React from 'react';
import '../card/card-style.css'

const CardforWhat =props =>{
    return(
            
            <div className="card-bod">
            <div className="card-size">
            <h4 className ="card-title">
            {props.title}
            </h4>
            <p className="card-text text-secondary">{props.text}</p>
               
               </div>
            </div>
        
        
        
    );
}
export default CardforWhat;