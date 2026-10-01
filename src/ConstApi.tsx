import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com"

interface post{
    id:number;
    title:string;
}
export default function ConstApi() {
const [posts,setPosts] = useState<post[]>([]);
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState();

 useEffect(()=>{
    const fetchPost = async ()=>{
        setIsLoading(true)
        try{
       const response = await fetch(`${BASE_URL}/posts`);
        const posts = (await response.json()) as post[];
       setPosts(posts)
        }
        catch (e:any){
          setError(e);
        }
        setIsLoading(false);
    };
    fetchPost();

 },[])

   if (isLoading){
    return(
      <div>
        Loading...
      </div>
    )
   }
   if(error){
    return(
      <div>
        Something went wrong please try again later?
      </div>
    )
   }
  return (
    <div className="text-center bg-amber-200">
      <
        h1 className="text-2xl bg-purple-400 algin-center jsutify-center px-3 py-5">
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
