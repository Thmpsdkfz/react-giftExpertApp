import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading</p> }

            <div className="card-grid">
                    { 
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}

//GifGrid receives the category as param and uses the custom hook named useFetchGifs to search the the gifs based on the category, 
//also is composed of another component named GifGridItem that receives the data returned by the custom hook useFetchGifs