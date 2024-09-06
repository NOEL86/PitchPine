// client/src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import productList from '../products.json';

import { Col, Row, Form } from "react-bootstrap";

const ProductList = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/products')
    //         .then(response => setProducts(response.data))
    //         .catch(error => console.error('Error fetching products:', error));
    // }, []);

   

    return (
        // <Row >
        // <Col lg={4} m={4} sm={1} >
        <div>
            <Row>
                <Col >
            <div className='card-group'> 

            {/* {productList.map(product => (
                <ProductCard key={product._id} product={product} />
            ))} */}
                 {productList.map(product => (
                    
                <ProductCard key={product._id} product={product} />
                ))}
      
            
            </div>
            </Col>
            </Row>
        </div>
    );
};

export default ProductList;