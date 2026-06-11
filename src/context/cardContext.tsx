"use client"

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

type CardContextType={
    productCount:number,
    setProductCount: Dispatch<SetStateAction<number>>;
}

const CardContext = createContext<CardContextType | null>(null);

export function CardContextProvider({children}:{children:React.ReactNode}){
    const [productCount, setProductCount] = useState(1)
    return(
        <CardContext.Provider value={{productCount, setProductCount}}>
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