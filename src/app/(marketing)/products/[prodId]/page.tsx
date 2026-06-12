import AddCardProduct from "@/components/_components/product/addCardProduct";
import { Product } from "@/types/product";
import { Metadata } from "next"
import Image from "next/image";
import { notFound } from "next/navigation";
type Props = {params:Promise<{prodId:string}>}
export const generateMetadata = async({params}:Props):Promise<Metadata>=>{
    const baseUrl = process.env.HOST_URL
    const id = (await params).prodId;
    const res = await fetch(`${baseUrl}/api/products/${id}`)
    const product = await res.json()
    return{
        title:`${product.title}`
    }
}

export default async function ProductPage({params}:Props){
    const baseUrl = process.env.HOST_URL

    const {prodId} = await params
    const res = await fetch(`${baseUrl}/api/products/${prodId}`)
    const product:Product = await res.json() 

    if(!product){
        notFound()
    }
    return(
        <div className="w-full h-svh bg-spark-grey-20">
            <div className="w-full md:w-1/2 m-auto flex flex-col gap-4 items-center opacity-80 mt-2 p-8 z-10 bg-spark-lightgreen-100 rounded-xl text-black">
                <div className="relative w-80 h-80">
                    <Image src={product.image} fill alt="product-image" className="object-contain"/>
                </div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className="w-full flex items-center bg-red justify-between">
                    <span>{product.price}$</span>
                    
                    <AddCardProduct product={product} />
                </div>
            </div>
        </div>
    )
}