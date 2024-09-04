// // client/src/components/CheckoutButton.js
// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('your-stripe-public-key');

// const CheckoutButton = ({ sessionId }) => {
//     const handleClick = async (event) => {
//         const stripe = await stripePromise;
//         const { error } = await stripe.redirectToCheckout({ sessionId });

//         if (error) {
//             console.error('Stripe checkout error:', error);
//         }
//     };

// return (
       
