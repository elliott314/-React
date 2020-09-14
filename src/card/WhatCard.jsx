import React, { Component } from 'react';
import CardforWhat from '../card/CardforWhat';


class WhatCard  extends Component{
    render(){
         return(
              
        
      
        
        <div className="row">
        
        <h4 className="card-title">
            <CardforWhat title="Our Mission" text="The main mission of kidney donation is not only transplantation but also to give proper dedication to save and
                improve the life of kidney failure patients by increasing the probability of getting kidney from living donors who wish to donate and earn their trust by maintaining 
                the privacy policy to keep all the donor’s information more secured.
                to increase the donors to provide kidney to the people facing the kidney failure problem by establishing a communication between donor and a recipient through this application."/>
        </h4> 
                    <h4 className="card-title">
            <CardforWhat title=" Objectives" text="To increase the availability of living donor easily though internet
To provide knowledge about transplantation and its necessity. To help the kidney diseases patient with friendly interface and easy registration process to save time during emergency. To store and manage the data and information about kidney diseases patients and donors which could be helpful in future use. To allow the patients search and find a matched donors and request for a kidney 6. To encourage living donors for their support in transplantation activities

"/>
        </h4> 
        <h4 className="card-title">
            <CardforWhat title="Awareness" text="Nepal Kidney Foundation has been organizing awareness programs related to Kidney diseases all over the country. We are not privileged to be getting the world class treatment facilities. So that makes it very important to be in the safe side for which all we need to do is avoid the changes of having kidney related problems and thereby avoid the problem of curing it.From Mechi in the east to the Mahakali in the far west,KD has organized many events programs that helped people to make aware people on how to avoid and be safe against the numerous kidney diseases."/>
        </h4> 
           
                </div>
            

       

    

    
       
    )
    
    }
}
   

export default WhatCard;


