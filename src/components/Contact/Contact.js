import React from 'react'
import './Contact.scss'
import Contactbg from '../../images/contactbg.png'

const Contact = () => {
    return (
        <div id="contact">
            {/* <div id="bg-container">
                <img id="contact-bg" src={Contactbg} />
            </div> */}
            <div className="card header" >
                <h2>Contact us</h2>
                <div className="contactContainer">
                    <label>Name</label>
                    <textarea />
                    <label>email</label>
                    <textarea />
                    <label>message</label>
                    <textarea />
                </div>
            </div>
        </div>
    )
}

export default Contact
