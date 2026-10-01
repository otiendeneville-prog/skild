import { useEffect, useState } from "react";

const BASE_URL = "htttps://jsonplaceholder.typcode.com"

interface post{
    id:number;
    title:string;
}
export default function constApi() {
const [posts,setPosts] = useState<post[]>([])

 useEffect(()=>{
    const fetchPost = async ()=>{
        const response = await fetch(`${BASE_URL}/posts`)
        const posts = await response.json();
    }
 },[])
  return (
    <div className="text-center align-center justify-center bg-amber-200">
      <h1 className="text-2xl bg-purple-400 algin-center jsutify-center px-3 py-5">
        Data Fetching in React!
      </h1>
      <ul>
        {posts.map((post)=>{
            return(
                <li key={post.id}>{post.title}</li>
            )
        })}
      </ul>
    </div>
  )
}
