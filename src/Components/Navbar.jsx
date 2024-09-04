import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';
import './Nav.css';


const Navbar = () => (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pitch Pine Company</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/">
         Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/shop">
         Shop</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">Cart
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">About Us</a></li>
            <li><a className="dropdown-item" href="#">Things We Support</a></li>
            <li><a className="dropdown-item" href="#">ETC</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

);

export default Navbar;