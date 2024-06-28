import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from '../Compenet/ProductDetails'


const RouterConfig = () => {
    return (
        <Routes>
            <Route path='/product-details/:id' element={<ProductDetails />} />


        </Routes>
    )
}

export default RouterConfig