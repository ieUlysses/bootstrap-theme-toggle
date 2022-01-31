import React from 'react';

function Button() {

    const click = () => {

        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')
            document.body.classList.add("light")
        } else {
            document.body.classList.remove('light')
            document.body.classList.add("dark")
        }
    };


    return (
        <>
            <button onClick={click} className="btn btn-toggle /* btn-primary */ /*  btn-custom */ ">Secondary</button>

        </>
    )
}

export default Button;
