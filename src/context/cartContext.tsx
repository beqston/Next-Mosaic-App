"use client"

import { Product } from "@/types/product";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"


type CartItem = {
    product:Product,
    quantity:number
}

type CardContextType={
    cartArray:CartItem[],
    setCartArray:Dispatch<SetStateAction<CartItem[]>>,
    addToCart:(product:Product, quantity:number)=>void,
    isCartShow:boolean,
    setIsCartShow:Dispatch<SetStateAction<boolean>>,
    showCartList:()=>void
}


const CartContext = createContext<CardContextType | null>(null);

export function CartContextProvider({children}:{children:React.ReactNode}){
    const [cartArray, setCartArray] = useState<CartItem[]>([]);
    const[isCartShow, setIsCartShow] = useState(false);

    function addToCart(product:Product, quantity:number){
        setCartArray(prev=>{
            const exists = prev.find(item=> item.product.id == product.id);
            if(exists){
                return prev.map(item=>
                    item.product.id ==product.id
                    ?{...item, quantity:quantity }
                    : item
                )
            }
            return [...prev, { product, quantity }];
        })
    }

    function showCartList(){
        setIsCartShow(prev=>!prev)
    }

    return(
        <CartContext.Provider value={{cartArray, setCartArray, addToCart, isCartShow, setIsCartShow, showCartList}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext(){
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCardContext must be used within a CardContextProvider");
    }
    return context
}