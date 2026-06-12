"use client"

import { useCartContext } from "@/context/cartContext"
import { useClickOutside } from "@/hooks/useClickOutside";
import Image from "next/image"
import { useMemo } from "react"

export default function CartList() {
    const cartRef = useClickOutside();
    const { cartArray, isCartShow } = useCartContext();

    // 1. Memoize the total calculation for better performance
    const cartTotal = useMemo(() => {
        return cartArray.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);
    }, [cartArray]);

    return (
        <div ref={cartRef} className={`${isCartShow ? "block" : "hidden"} fixed w-100 z-20 min-h-80 max-h-120 right-4 top-8 bg-spark-violet-200 p-4 overflow-y-auto rounded-2xl scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 dark:scrollbar-thumb-slate-700`}>
            {cartArray.map(item => {
                // Pre-calculating line item price for cleaner JSX
                const itemTotal = item.quantity * item.product.price;

                return (
                    <div className="p-4 m-4 bg-indigo-200" key={item.product.id}>
                        <div className="flex justify-between">
                            <h2>{item.product.title}</h2>
                            <Image width={20} height={20} src={item.product.image} alt={item.product.title} />
                        </div>
                        <div className="flex justify-between">
                            <span>Quantity: {item.quantity}</span>
                            <span>Price: ${itemTotal.toFixed(2)}</span>
                        </div>
                    </div>
                )
            })}
            
            {/* 2. Display the total formatted to 2 decimal places (standard for currency) */}
            <div className="mt-4 pt-4 border-t border-spark-violet-300 flex justify-between items-center">
                <span className="font-bold text-white">Total:</span>
                <p className="text-xl font-bold text-white">${cartTotal.toFixed(2)}</p>
            </div>
        </div>
    )
}