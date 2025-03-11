import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { storeContext } from '../Context/storeContext'



const FoodItem = ({id,name,image,price,description,rating}) => {

    const {cartItems,addCartItems,removeCartItems}=useContext(storeContext)

  return (
    <div className='food-item'>
        <div className="food-img-container">
            <img className='food-item-img' src={image} alt=""></img>
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <div className="food-item-rating-content">
                <img src={assets.star_icon}></img>
                <p>{rating.toFixed(1)}</p>
                </div>
            </div>
            <p className="food-item-desc">{description}</p>
            
            <div className="counter">
                <p className="food-item-price">₹{price}</p>
                {(!cartItems[id]?
                    <img className='add' onClick={()=>{addCartItems(id)}} src={assets.add_icon_white}></img>
                    :<div className='food-item-counter'>
                        <img onClick={()=>removeCartItems(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>{addCartItems(id)}} src={assets.add_icon_green} alt=""/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default FoodItem