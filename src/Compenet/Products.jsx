import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Product from './Product/Product.jsx'
import '../App.css'
import { getAllProducts } from '../Redux/slices/productSlice.jsx'



const Products = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    console.log(products)



    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    return (
        <div className='Products'>
            {
                products.map((products) => (
                    <Product products={products} key={products.title} />
                ))
            }
        </div>
    )
}

export default Products