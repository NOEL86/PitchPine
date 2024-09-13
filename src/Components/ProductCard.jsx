import React from 'react';


const ProductCard = (props) => {

  return (

    <div className="card" Style="max-width: 15rem;"  
    alt={props.title} 
    id={props.id}
    onClick={() => props.handleClick(props.id)} >
    <img className="card-img-top" src="../images/beCurious.jpeg" alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">{props.title}</p>
  </div>

</div>
  );
};
    
export default ProductCard;

