import React from 'react';
import ProductList from '../Components/ProductList';
import { Col, Row, Form } from "react-bootstrap";
import './Home.css';
import Footer from '../Components/Footer.jsx';

const Home = () => (
    <div className='homePage'>
        <Row>
        <h1 className='intro d-flex justify-content-center'>Welcome to <span className='titleMain'>Pitch Pine</span> Company</h1>
        </Row>
        <Row>
        <Col>
        <ProductList /> 
        {/* Need a Feature List  instead of Product List*/}
        </Col>

        </Row>
     <Row>
  
        <Footer/>

     </Row>
  

    </div>
);

export default Home;
