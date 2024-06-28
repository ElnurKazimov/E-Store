import React, { useState } from 'react'
import './header.css'



const index = () => {




  return (


    <div>
      <div className="navbar">
        <div className="logo">E-STORE </div>
        <input type="text" placeholder='Type the product,category or brand you are looking for' />
        <i className="fa-solid fa-magnifying-glass searchIcon"></i>

        <div className="actions">
          <a href="#"><i className="fa-solid fa-user"></i> Login</a>
          <a href="#"><i className="fa-solid fa-heart "></i> my favorities</a>
          <a href="#"><i className="fa-solid fa-cart-shopping"></i> my cart</a>

        </div>
      </div>
    </div>
  )
}

export default index