import React from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'




const Product = ({ products: { id, title, price, image } }) => {

    const navigate = useNavigate();

    return (
        <div className='card'>

            <img src={image} alt="" />
            <div className='title'>
                <p >{title}</p>
            </div>
            <span>{price} $</span>
            <button className='cartBtn' onClick={() => navigate("/product-details/" + id)}>Details</button>
            <i className="fa-solid fa-heart heartBtn" ></i>
        </div>
    )
}

export default Product