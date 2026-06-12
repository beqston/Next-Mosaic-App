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
}


const CardContext = createContext<CardContextType | null>(null);

export function CardContextProvider({children}:{children:React.ReactNode}){
    const [cartArray, setCartArray] = useState<CartItem[]>([]);

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
            console.log(prev)
            return [...prev, { product, quantity }];
        })
    }
    console.log(cartArray)


    return(
        <CardContext.Provider value={{cartArray, setCartArray, addToCart}}>
            {children}
        </CardContext.Provider>
    )
}

export function useCardContext(){
    const context = useContext(CardContext)
    if(!context){
        throw new Error("useCardContext must be used within a CardContextProvider");
    }
    return context
}