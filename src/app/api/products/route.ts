import { NextResponse } from "next/server"

export async function GET(request:Request){
    try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) {
        return NextResponse.json(
            { error: `Product not found` }, 
            { status: res.status }
        );
        }
        const products = await res.json() 
        return NextResponse.json(products)
    } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    );
    }
}