import React from "react";


const Card=({id,name,email})=>{
    return (
        <div className='tc bg-light-blue dib br2 pa2 ma2 grow bw2 shadow-5'>
            <img alt="robot" src= {`https://robohash.org/${id}`}/>;
            <div>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;