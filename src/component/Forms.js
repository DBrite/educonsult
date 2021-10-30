// import React from 'react'

import React from 'react'
import './Forms.css'
import { Button } from './Button'

function Forms() {
    return (
        <div className="contact-formgroup">
            <div className="container">
                <div className="contact-form">
                    <h1>Contact Us</h1>    
                </div>
                <div className="contact-form">
                    <label for="name">Name</label> 
                    <input id="name" type="text" placeholder="Your Name" />     
                </div>
                <div className="contact-form">
                    <label for="email">Email</label> 
                    <input id="email" type="email" placeholder="Your email address" />     
                </div>
                <div className="contact-form">
                    <div className="textarea-container">
                        <label className="message-post" for="message">Message</label> 
                        <textarea id="message" placeholder="Your message"></textarea> 
                    </div>       
                </div>
                <div className="button-div">
                    {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn-large' buttonColor='blue'>
                     Submit
                     </Button> */}
                     <button>Submit</button>
                </div>
                
                
                {/* <span>Thank you for your message, we will be in touch in no time!</span> */}
            </div>
           
           
            
            
        </div>
        
    );
};

export default Forms;