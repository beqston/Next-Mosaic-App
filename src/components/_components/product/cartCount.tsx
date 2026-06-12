"use client"
import { useCartContext } from "@/context/cartContext"

export default function CartCount(){
    const {cartArray, showCartList,}= useCartContext()

    return  <span onClick={showCartList} className="absolute z-10 text-xl text-white -top-1 -translate-x-2">{cartArray.length}</span>
}
