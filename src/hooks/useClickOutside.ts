import { useCartContext } from "@/context/cartContext";
import { useEffect, useRef } from "react";

export function useClickOutside() {
    // use ref for div element control
    const ref = useRef<HTMLDivElement>(null);
    const { showCartList, isCartShow } = useCartContext();

    useEffect(() => {
        //handle cart container
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (
                isCartShow && 
                ref.current && 
                !ref.current.contains(event.target as Node)
            ) {
                showCartList();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isCartShow, showCartList]); 
    
    return ref;
}