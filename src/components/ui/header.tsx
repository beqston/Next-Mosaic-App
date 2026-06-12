import Image from "next/image";
import Link from "next/link";
import CartCount from "../_components/product/cartCount";
import CartList from "../_components/product/cartList";

export default function Header(){
    return(
        <header className="bg-spark-blue-20 grid grid-cols-[3fr_1fr] relative">
            {/* menu container */}
           <div className="text-xl flex gap-2 p-4 ">
                <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/products">Products</Link>
                <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/posts">Posts</Link>
                <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/cars">Cars</Link>
           </div>
            {/* cart image and count */}
           <div className="flex justify-end items-center cursor-pointer pr-4 md:pr-12">
                <CartCount />
                <Image width={32} height={32} src={"/images/cart.png"} alt="cart" />
           </div>

           {/* cart list */}
            <CartList />
  
        </header>
    )
}