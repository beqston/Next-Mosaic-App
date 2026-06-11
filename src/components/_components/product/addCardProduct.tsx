"use client"

import { useCardContext } from "@/context/cardContext"

export default function AddCardProduct(){
    const {productCount, setProductCount} = useCardContext();
    function decrease(){
        setProductCount(prev=> prev==1?1:prev-1)
    }

    function increase(){
        setProductCount(prev=> prev==10?10:prev+1)
    }
    return(
        <div className="flex gap-2">
            <div className="flex">
                <button onClick={decrease} className="text-4xl cursor-pointer text-spark-violet-200">-</button>
                <input className="w-8 text-center bg-spark-grey-20 text-spark-lightblue-100" type="number" value={productCount} />
                <button onClick={increase} className="text-4xl cursor-pointer text-spark-violet-200">+</button>
            </div>
            <button className="p-4 bg-gray-200 cursor-pointer  rounded-xl hover:bg-sky-200 duration-1000 ">Add Card</button>
        </div>
    )
}