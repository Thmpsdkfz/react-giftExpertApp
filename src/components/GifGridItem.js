import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

//This component receives the data from the custom hook and display it.
// animations from https://animate.style/