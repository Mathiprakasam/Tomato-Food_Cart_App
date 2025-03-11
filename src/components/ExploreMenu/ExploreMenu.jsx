import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h2 className="explore-menu-heading">Discover our Menu</h2>
        <p className="explore-menu-text">Dive into our thoughtfully crafted selection of delicious dishes. From hearty meals to delightful treats, find your perfect pick and savor every bite!</p>
        <div className="explore-menu-items">
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className="explore-menu-items-list" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} >
                        <img src={item.menu_image} className={(category===item.menu_name?"active":"")}  alt='' ></img>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
            }
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu