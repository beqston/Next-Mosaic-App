"use client"

import { useCartContext } from "@/context/cartContext"
import { Product } from "@/types/product";
import { useState } from "react";

export default function AddCardProduct({product}:{product:Product}){
    const [count, setCount] = useState<number>(1)
    const {addToCart} = useCartContext();
    
    function decrease(){
        setCount(prev=> prev==1?1:prev-1)
        console.log("cou", count)
    }

    function increase(){
        setCount(prev=> prev==10?10:prev+1)
    }

    return(
        <div className="flex gap-2">
            <div className="flex">
                <button onClick={decrease} className="text-4xl cursor-pointer text-spark-violet-200">-</button>
                <input className="w-8 text-center bg-spark-grey-20 text-spark-lightblue-100" type="number" value={count} readOnly />
                <button onClick={increase} className="text-4xl cursor-pointer text-spark-violet-200">+</button>
            </div>
            <button onClick={()=>addToCart(product, count)} className="p-4 bg-gray-200 cursor-pointer  rounded-xl hover:bg-sky-200 duration-1000 ">Add Cart</button>
        </div>
    )
}