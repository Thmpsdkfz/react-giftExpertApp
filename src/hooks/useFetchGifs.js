import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
        
    }, [category])

    return state; //{data: [], loading: true}

}

//This is a custom hook that receives the category and send it to the getGifs helper that requests the gifs,
//also uses useEffect hook to trigger render the gifs only when the category changes, refer to this documentation (https://dmitripavlutin.com/react-useeffect-explanation/)