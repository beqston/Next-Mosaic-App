import { Product } from "@/types/product";
import Image from "next/image";

export default async function ProductsPage(){
    const res = await fetch('https://fakestoreapi.com/products');
    const products:Product[] = await res.json();
    
    return(
        <div>
            {
                products.map((prod)=>{
                    return(
                        <div key={prod.id}>
                            <h2>{prod.title}</h2>
                            <p>{prod.description}</p>
                            <div>
                                <Image width={200} height={200} src={prod.image} alt="product-image" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}