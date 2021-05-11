import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {

        getGifs( category ) //esto es una promesa
           .then( imgs => {

            setstate({
                data: imgs,
                loading:false
            });    
        })

    }, [category])

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000);

    return state; // { data:[]//es un arreglo, loading: true };

}