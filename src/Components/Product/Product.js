import React from 'react';
import './Product.css';
import Button from 'react-bootstrap/Button';

const Product = (props) => {
    const {name,By,price,img} = props.products;
    return (
        <div className="product">
            <div className="img">
                <img src={img} alt=""/>
            </div>
             <div className="discription">
                    <h3>{name}</h3>
                    <p>By-{By}</p>
                    <h4>Price:$ {price}</h4>
                    <Button onClick={() => props.handleClickEnroll(props.products)} variant="danger">Enroll Now</Button>
             </div>
           
         </div>
    );
};

export default Product;