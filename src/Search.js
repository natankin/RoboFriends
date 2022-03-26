import React from "react";

const Search=({findRobo})=>{
    return(
        <div >
        <input className='pa3 ba b--blue bg-lightest-blue'
        type='search' placeholder='SearchRobo'
        onChange={findRobo}/>            
        </div>

    )
}

export default Search;