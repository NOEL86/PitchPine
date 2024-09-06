import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';
import './Nav.css'


const Footer = () => (
    <div className="card footer fixed-bottom text-center">
    <div className="card-header">
       Pitch Pine Co Custom Orders
    </div>
    <div className="card-body">
    <h2 className="card-title">Looking for a Custom Order?</h2>
    {/* <p className="card-text">Click the link below and contact us!</p> */}
    <Link to="mailto:pitchpineco@gmail.com?subject=Order Request" className="btn btn-dark btn-lg text-white">Contact Us</Link>
    <p>2025 PitchPineCompany, LLC</p>
    {/*social media icons*/}
</div>
</div>

);

export default Footer;