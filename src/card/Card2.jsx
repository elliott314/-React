import React, { Component } from 'react';
import Card from '../card/Card';
import img3 from '../images/kidney.jpg'
import img1 from '../images/g6.jpg';
import img2 from '../images/g4.jpg'
class Card2 extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img3} link="Login" btn="Become A Member" title="What is Kidney Transplantation?" text="Kidney transplantation or renal transplantation is the organ transplant of a kidney into a patient with end-stage kidney disease. Kidney transplantation is 
                        typically classified as a living-donor transplantation depending on the source of the donor organ.In a living-donor kidney transplant,
                         one of the donor's healthy kidneys is surgically removed and placed into a recipient whose kidneys no longer function properly.
                          Unless the recipient's own kidneys are causing complications, they are left in place"/>
                    </div>
                    <div className="col-md-4"><Card imgsrc={img1} link="Patient" btn="Want to Know About us?" title="What is living Kidney Donor?" text="Most of us are born with two kidneys. 
                        However, a healthy person can live a normal, healthy life
               with just one kidney. This means that a healthy person can give (donate) a kidney to someone 
               whose kidneys aren’t working. This gift is living kidney donation.To donate a kidney, you must
               be in good physical and mental health.As a general rule, you should be 18 years or older. You
               must also have normal kidney function and some medical conditions that could prevent you from 
               being a living donor. A person who donates a kidney to someone in need is called a “living
               donor,” and a person who needs a kidney is called a“transplant candidate.”"/></div>
                    <div className="col-md-4"><Card imgsrc={img2} btn="Our Mission" link="What" title="Risks and Benefits" text="Benefits:Saving the life of another person.
                                                             Giving a renewed, and improved quality of life.
                                                             Greater understanding of your own health or health conditions.                 


                                                             Risks:On average, donors have 25-35% permanent loss of kidney function after surgery
                                                             It is important to recognize that there are risks with any type of surgery, which the
                                                              transplant team will explain to you in detail. Some of these include:
                                                               Pain, feeling tired, hernia, blood clots, pneumonia, nerve injury, bowel obstruction "/></div>
                </div>
            </div>

        );
    }
}
export default Card2;