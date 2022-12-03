import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import "./Style/Contact.scss"


const Contact = () => {
    return (
        <div className='contact'>
            <div className='arrow-home'>
                <Link to="/"><ArrowBackIcon className='arrow' /></Link>
            </div>

            <form>
            <label>Your Name</label>
                <input type="text" placeholder='Enter Your Name'/>
                <label>Email</label>
                <input type="text" placeholder='Enter your Email' required/>
                <label>About You</label>
                <input type="text" placeholder='e.g a Developer'/>
                <label>Message</label>
                <textarea placeholder='e.g Hello' id="" cols="50" rows="7" required></textarea>

                <button>Send</button>
            </form>
            
        </div>
    );
};

export default Contact;