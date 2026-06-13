import Image from "next/image";

interface PostType{
  id: number,
  title: string,
  body: string,
  tags: string [],
  reactions: {
    likes: number,
    dislikes: number
  },
  views: number,
  userId: number
}

export default async function PostsPage(){
    const res = await fetch("https://dummyjson.com/posts");
    const { posts }: { posts: PostType[] } = await res.json();

    return(
        <div className="grid lg:grid-cols-2">
            {
                posts.map((post)=>{
                    return(
                        <div className="border-2 m-4 p-4 flex flex-col justify-between" key={post.id}>
                            <h2 className="text-xl md:text-2xl text-spark-grey-20 text-center font-bold">{post.title}</h2>
                            <p>{post.body}</p>
                            <div className="flex gap-2 mt-4 text-xs md:text-xl ">
                                <div className="flex gap-2 items-center">
                                    <span className="text-spark-gold-100">{post.reactions.likes}</span>
                                    <div className="w-4 h-4 relative md:w-6 md:h-6 ">
                                        <Image className="object-contain" fill src={"/images/like.png"} alt="like" />
                                    </div>
                                </div>
                                
                                {/* like and like coun container */}
                                <div className="flex gap-2 items-center">
                                    <span className="text-spark-gold-100">{post.reactions.dislikes}</span>
                                    <div className="w-4 h-4 relative md:w-6 md:h-6 ">
                                        <Image className="object-contain" fill src={"/images/dislike.png"} alt="dislike" />
                                    </div>
                                </div>
                            </div>

                            {/* bottom section: tags and views */}
                            <div className="flex justify-between items-center mt-2 text-xs md:text-xl ">
                                <div className="flex gap-2 mt-2">
                                    {
                                        post.tags.map(tag=> <button key={tag} className="bg-spark-blue-20 text-white p-2 rounded-xl cursor-pointer ">{tag}</button>)
                                    }
                                </div>

                                <div className="flex items-center gap-2">
                                    <span>{post.views}</span>
                                    <Image width={24} height={24} src={"/images/view.png"} alt="view-icon" />
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}