// client/src/pages/Shop.js
import React from 'react';
// import ProductList from '../Components/ProductList';
import { Col, Row, Form } from "react-bootstrap";
import Footer from '../Components/Footer';
import './Shop.css';

const Shop = () => (
    <div>
        <h1 className='d-flex justify-content-center'>Shop Our Collections</h1>
        <Row>
            <Col>
            <h2 className='productTitle'>Felt Pennants, Banners and Signs</h2>
            {/*Map all felt products here carosel*/}
            </Col>
        </Row>
        <Row>
            <Col>
            <h2 className='productTitle'>Pins</h2>
             {/*Map all pins here carosel*/}
            </Col>
        </Row>
        <Row>
            <Col>
            <h2 className='productTitle'>Glass Etching</h2>
             {/*Map all Glass Etching here carosel*/}
            </Col>
        </Row>
        <Row>
            <Col>
            <h2 className='productTitle'>Leather Items</h2>
             {/*Map all Leather items here carosel*/}
            </Col>
        </Row>
     
        {/* Should Include categories and all products */}
        <Row>
            <Footer/>
        </Row>
    </div>
);

export default Shop;
