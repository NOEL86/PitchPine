// client/src/components/ProductList.js
import React, { Component } from 'react';
// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import products from '../products.json';
// import "./Nav.css";
import { Col, Row, Form } from "react-bootstrap";

class ProductList extends Component {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/products')
    //         .then(response => setProducts(response.data))
    //         .catch(error => console.error('Error fetching products:', error));
    // }, []);

    state = {
        products: []
        
    }
    componentDidMount() {
        // Fetch products or use static data
        this.setState({ products });
    }

    handleClick = (id) => {

        let productClicked = this.state.products.find(product => product.id === id);
        console.log("I Clicked", productClicked);
    }

render() {
    return (

        <Row className='ProductListContent'>
                {this.state.products.map(product => (
                    <Col 
                        key={product.id}
                        lg={2}  // 5 cards per row on large screens (12/5 = 2.4)
                        md={3}  // 3 cards per row on medium screens (12/4 = 3)
                        sm={12} // 1 card per row on small screens (12/1 = 12)
                        className="mb-2" // Margin-bottom for spacing between rows
                    >
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            handleClick={this.handleClick}
                        />
                    </Col>
                ))}
            </Row>
    );
    };
};

export default ProductList;