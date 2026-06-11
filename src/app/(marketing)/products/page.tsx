import { Product } from "@/types/product";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title:"Products Page"
}
export default async function ProductsPage(){
    const baseUrl = process.env.HOST_URL
    const res = await fetch(baseUrl+'/api/products');
    const products:Product[] = await res.json();

    return(
        <main className="grid md:grid-cols-2 lg:grid-cols-3 bg-[#F0F0F0]">
            {
                products.map((prod)=>{
                    return(
                        <Link className="flex relative items-stretch" key={prod.id} href={`/products/${prod.id.toString()}`} >
                            <div  className="m-2 border-2 border-spark-violet-200 p-4  flex flex-col justify-between">
                                <div className="relative w-full h-40 lg:p-20">
                                    <Image fill src={prod.image} alt="product-image" className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="text-spark-black-80 font-bold mt-2 text-center">{prod.title}</h2>
                                    <p className="text-spark-grey-20 ">{prod.description}</p>
                                </div>
                                <p className=""><span className="text-xl text-green-400">rating:</span> {prod.rating.rate} <span>(count:{prod.rating.count})</span></p>
                            </div>
                            <span className="absolute top-4 text-spark-gold-100 right-8">{prod.price}$</span>
                        </Link>
                    )
                })
            }
        </main>
    )
}