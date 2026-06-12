import Image from "next/image";
import Link from "next/link";

export default function Header(){
    
    return(
        <header className="bg-spark-blue-20 grid grid-cols-[3fr_1fr]">
           <div className="text-xl flex gap-2 p-4 ">
                <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/products">Products</Link>
                <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/posts">Posts</Link>
                <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/cars">Cars</Link>
           </div>

           <div className="flex justify-end items-center cursor-pointer pr-4 md:pr-12">
                <span className="absolute z-10 text-xl text-white -top-1 -translate-x-2">2</span>
                <Image width={32} height={32} src={"/images/cart.png"} alt="cart" />
           </div>

        </header>
    )
}