import React,{useContext} from 'react'
import './FoodDisplay.css'
import { storeContext } from '../Context/storeContext'
import FoodItem from '../FoodItem/FoodItem'
import { motion } from 'framer-motion'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(storeContext);
    
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="All"||category===item.category)
                {
                    const rowIndex=Math.floor(index/4);
                return (<motion.div key={item._id} initial={{opacity:0,x:rowIndex%2===0?-600:600}} animate={{opacity:1,x:0}} transition={{duration:3}}>
                <FoodItem  key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} rating={item.rating}/>
                </motion.div>)
                }
            })}
        </div>
    </div>
  );
};

export default FoodDisplay;