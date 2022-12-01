import React, { useState,useEffect } from "react"
import Bookmark from "./bookmark"
import "./search.css"
const SearchImageApp=()=>{
    const [filter,setFilter]=useState("")

    const [posts,setPost]=useState([]) 
    
    const [add,setAdd]=useState([])
     useEffect(()=>{
      fetch("https://api.unsplash.com/photos/?client_id=I0jf6bspZZwOYf8GZyzLk4t6nP3CFCoqCDve1P8-aR0")
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setPost(data)
      })
     },[])

   const handleBookmark=()=>{
     setAdd([...add,{id:new Date()}])
     console.log(add)
   }

    return(
     <>
     <div className="container">
     {console.log(filter)}
     <div className="title">
     <h1>React Photo Search</h1>
     <button className="btn" Link to={<Bookmark bookmark={add}/>} >Bookmarks</button>
     </div>
     <form>
     <input type="text" placeholder="Search from high evolution images" value={filter} onChange={(e)=>setFilter(e.target.value)} ></input>
     <button>Search</button>
     </form>
    {posts.filter(res=>{
        if(filter===""){
            return null
        }else if(res.id.toLowerCase().includes(filter.toLocaleLowerCase())){
            return res
        }
    }).map((post,i)=>{
        return(
            <>
            <div className="card">
            <div className="img-box">
            <img key={i} className="url-image" src={post.urls.full} alt="beauty" width="400px" height="300px"></img>   
            <div className="bookmark"  value={add} onClick={handleBookmark}>BookMark</div>       
            </div>
            </div>
            </>
        )
    })}
     </div>
    
     </>
    )
}
export default SearchImageApp