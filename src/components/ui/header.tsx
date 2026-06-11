import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-spark-blue-20 text-xl flex gap-2 p-4 ">
            <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/products">Products</Link>
            <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/posts">Posts</Link>
            <Link className="text-spark-violet-200 font-bold hover:text-spark-lightgreen-100" href="/cars">Cars</Link>
        </header>
    )
}