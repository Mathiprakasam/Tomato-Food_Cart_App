import React, { useContext } from 'react'
import {storeContext} from '../../components/Context/storeContext'
import { assets } from '../../assets/assets'
import './Cart.css'

const Cart = () => {

  const {cartItems,food_list,addCartItems,removeCartItems,deleteCartItem,totalPrice,deliveryFee,finalPrice,setCartItems}=useContext(storeContext)

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>X</p>
        </div>
        <br/>
        <hr/>
        {Object.keys(cartItems).length>0?(
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
              return (
                <div  key={item._id}>
                    <div className="cart-items-title cart-items">
                      <img src={item.image} className='item-image'></img>
                      <p>{item.name}</p>
                      <p>₹{item.price}</p>
                      <div className="qunatity">
                        <img className='add-icon' onClick={()=>removeCartItems(item._id)} src={assets.remove_icon_red} alt="" />
                        <p className='item-quantity'>{cartItems[item._id]}</p>
                        <img className='remove-icon' onClick={()=>{addCartItems(item._id)}} src={assets.add_icon_green} alt=""/>
                      </div>
                      <p>₹{item.price*cartItems[item._id]}</p>
                      <p className='cross' onClick={()=>(deleteCartItem(item._id))}>X</p>
                    </div>
                    <hr/>
                </div>
                )
              };
              return null;
          })
        ):(
          <div>
            <p className='no-items'>No Items In The Cart</p> 
            <hr/>
          </div>
        )
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>₹{totalPrice}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{finalPrice}</b>
            </div>
            <hr/>
            <button className='order-now' onClick={()=>{alert("\nThank You For Ordering!!! \n\nYour Order Placed Successfully and Deliverd Soon"); setCartItems({});}}>PLACE ORDER</button>
          </div>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If You have a PROMO CODE enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='PROMO CODE' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart