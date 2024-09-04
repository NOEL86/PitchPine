// client/src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import productList from '../products.json';

import { Col, Row, Form } from "react-bootstrap";
//This will be a list of featured items list for the Home Page to Display

const FeatureList = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/products')
    //         .then(response => setProducts(response.data))
    //         .catch(error => console.error('Error fetching products:', error));
    // }, []);

   

    return (
        // <Row >
        // <Col lg={4} m={4} sm={1} >
        
        <div className='card-group'> 
            {/* {productList.map(product => (
                <ProductCard key={product._id} product={product} />
            ))} */}
                 {productList.map(product => (
                    
                <ProductCard key={product._id} product={product} />
                ))}
      
            
        </div>
        // </Col>
        // </Row>
    );
};

export default FeatureList;