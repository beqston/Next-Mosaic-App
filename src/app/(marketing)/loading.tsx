export default function LoadingProduct(){
    return(
        <div className="w-full h-screen grid place-items-center">
            <div className="flex justify-center items-center relative w-40 h-40 duration-700 animate-spin border-4 border-gray-200 border-t-spark-lightblue-100 rounded-full "></div>
            <p className="absolute text-spark-lightgreen-100 animate-pulse duration-300">Loading...</p>
        </div>
    )
}

