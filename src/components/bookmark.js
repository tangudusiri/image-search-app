import React from "react";
const Bookmark=({bookmark})=>{
    return(
        <>
        {bookmark.map(mark=>{
            return(
                <h1>{mark.id}</h1>
            )
        })}
        </>
    )
}
export default Bookmark