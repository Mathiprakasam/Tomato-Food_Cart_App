import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";


export const storeContext =createContext(null)

const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState({})

    const addCartItems=(itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeCartItems=(itemId)=>{
        setCartItems((prev)=>{
            if(prev[itemId]>1)
                {
                    return {...prev,[itemId]:prev[itemId]-1}
                }
            else
                {
                    const updatedCart={...prev};
                    delete updatedCart[itemId];
                    return updatedCart;
                }
        })
    }

    const deleteCartItem=(itemId)=>{
        setCartItems((prev)=>{
            const updatedCart={...prev};
            delete updatedCart[itemId];
            return updatedCart;
        })
    }

    const [totalPrice,setTotalPrice]=useState(0);
    const [deliveryFee,setDeliveryFee]=useState(0);


    useEffect(()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemAmount=food_list.find((product)=>product._id===item)
                totalAmount+=itemAmount.price*cartItems[item];
            }
        }
        setTotalPrice(totalAmount);
        setDeliveryFee(totalAmount>0?50:0)

    },[cartItems]);

    const finalPrice=totalPrice+deliveryFee;
    

    const contextValue={food_list,cartItems,setCartItems,addCartItems,removeCartItems,deleteCartItem,totalPrice,deliveryFee,finalPrice}

    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )

}


export default StoreContextProvider;