  import React, { useContext,  useState } from 'react'
  import { Link, useLocation } from 'react-router-dom'
  import { assets } from '../../assets/assets'
  import { storeContext } from '../Context/storeContext'
  import './NavBar.css'
  

  const NavBar = () => {


    const {cartItems}=useContext(storeContext)

    const location=useLocation();

    const isHomeActive= location.pathname==='/';
    const isCartActive= location.pathname==='/cart';




    return (
      <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="Logo" className='logo'></img></Link>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <Link to='/'><li className={isHomeActive?"active":""}>Home</li></Link>
            <Link to="/cart"><li  className={isCartActive?"active":""}>Cart</li></Link>
            <p className='cart-count'>{Object.keys(cartItems).length}</p>
          </ul>
        </div>
        </div>
    )
  }

  export default NavBar