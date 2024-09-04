import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';
import './Nav.css'


const Footer = () => (
    <div className="card footer fixed-bottom">
    <div className="card-header">
        Featured
    </div>
    <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to="#" className="btn btn-secondary">Contact Us</Link>
</div>
</div>

);

export default Footer;