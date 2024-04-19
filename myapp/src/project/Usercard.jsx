import { useState } from "react"

function Usercard(props)
{
    const [data,setdata]=useState(true)
    return(
        <div>
            <img 
            src={props.avatar}
            alt=""
            />
            <h2>{props.name}</h2>
            <p>{props.address}</p>
            <h3>Post</h3>
            <p>{props.post}</p>
            <h3>Followers</h3>
            <p>{props.followers}</p>
            <button onClick={()=>setdata(!data)}>{data ? "follow" : "following"}</button>
        </div>
    )
}
export default Usercard