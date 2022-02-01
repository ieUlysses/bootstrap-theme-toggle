import React from 'react';



function Card() {
    return (
        <>
            <div className='card card-main' style={{ width: "18rem" }}>
                <h1 className='header-2'>card-main</h1>
            </div>
            <div className='card  bg-primary' style={{ width: "18rem" }}>
                <h1 className='header-2'>bg-primary</h1>
            </div>
        </>
    )
}

export default Card;
