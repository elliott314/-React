
import React, { Component } from 'react';

import '../card/card-style.css'

class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="imgg"
                        src="https://careerflite.com/wp-content/uploads/2019/04/contact-banner.jpg" alt="Hello" height="500px" width="900px" />
                </div>
                <div>
                    <h3 >HELP DESK FOR EMERGENCY PLEASE,<br></br>
                 USE THIS NUMBER ONLY IN EMERGENCY <br></br>
                 IF YOU CO-OPERTAE, WE HELP YOU FOR SURE.<br></br>
                    01-5023458 01-2345667</h3>


                </div>
                <div>
                    <a href="https://www.facebook.com/" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/?lang=en" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="https://twitter.com/?lang=en" class="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"><i class="fa fa-google"></i></a>
                    <a href="https://www.instagram.com/" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/"  class="youtube"><i class="fa fa-youtube"></i></a>

                </div>


            </div>
        );
    }
}
export default About;