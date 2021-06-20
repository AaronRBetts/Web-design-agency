import React from 'react'
import './Contact.scss'
// import Contactbg from '../../images/contactbg.png'

const Contact = () => {
    return (
        <div id="contact">
            {/* <div id="bg-container">
                <img id="contact-bg" src={Contactbg} />
            </div> */}
            <div className="card header" >
                <h1>Contact us</h1>
                <div className="contactContainer">
                    <label>Name</label>
                    <textarea placeholder="Aaron Smith" rows="1"/>
                    <label>email</label>
                    <textarea placeholder="AaronSmith@gmail.com" rows="1" />
                    <label>phone</label>
                    <textarea placeholder="044 123 4567" rows="1" />
                    <label>message</label>
                    <textarea placeholder="AaronSmith@gmail.com" rows="5" />
                </div>
            </div>
            
        </div>
    )
}

export default Contact
