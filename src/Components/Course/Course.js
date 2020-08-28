import React from 'react';
import Courses from '../../FakeData/Courses';
import { useState } from 'react';
import Product from '../Product/Product';
import './Course.css'
import Cart from '../Cart/Cart';


const Course = () => {
   const item = Courses;
    const [product,setProduct]=useState(item);
    const [cart,setCart]=useState([])

    const handleClickEnroll = (products) =>{
        console.log("clicked",products);
        const newCart =[...cart,products];
        setCart(newCart);
    }
    
    return (
        <div className="course">
        <div className="course-item">
             {
                 product.map(products =><Product handleClickEnroll={handleClickEnroll} products={products}></Product>)
             }
        </div>
        <div className="cart">

            <Cart cart={cart}></Cart>

        </div>
    </div>
    );
};

export default Course;