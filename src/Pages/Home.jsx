
import React, { Component } from 'react';
import ProductList from '../Components/ProductList';
import { Col, Row, Form } from "react-bootstrap";
import './Home.css';
import Footer from '../Components/Footer.jsx';

class Home extends Component {

    // handleClick = (id) => {

    //     let productClicked = this.productClicked(this.state.product);
    
    //     console.log(productClicked);
    //   }


    render() {

        return (
            <div className='homePage'>
            <Row>
                <h1 className='intro d-flex justify-content-center'>Welcome to <span className='titleMain'>Pitch Pine</span> Company</h1>
            </Row>
            <ProductList /> 
            {/* Need a Feature List  instead of Product List*/}
            <Footer/>

 
  

            </div>
        )
    

    };
};

export default Home;
