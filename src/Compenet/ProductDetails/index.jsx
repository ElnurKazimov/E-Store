import React from 'react'
import './productDetails.css'
import { useParams } from 'react-router-dom'
const productDetails = () => {
    const { id } = useParams();

    return (
        <div>
            ProductDetails {id}
            <h1>salam</h1>
        </div>
    )
}

export default productDetails