import React from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    const Total = cart.reduce((total,prd)=> total + prd.price,0);

    const tax = (Total/10).toFixed(2);
    const grandTotal = Total + Number(tax);
    
  
    return (
        <div className="cart">
            <h1>Cart Summary</h1>
            <h3>You have {cart.length} items in your cart</h3>
            <p>Product Amount:$-{Total}</p>
            <p>Vat + Tax:$-{tax}</p>
            <h4>Total amount:$-{grandTotal}</h4>
            <Button variant="info">Purchase Here</Button>
        </div>
    );
};

export default Cart;