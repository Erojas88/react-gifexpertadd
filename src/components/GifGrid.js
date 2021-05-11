import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import '../index.css';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category }) => {

    //const [count, setCount] = useState(0);
    //const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );

    //useEffect( () => {
    //    getGifs( category )
    //        .then( setImages );
    //}, [ category ])


    // getGifs();

    return (
        <>
        <h3 className="animate__animated animate__bounce animate__fadeIn">{ category }</h3>
        { loading && <p className="animate__animated animate__bounce animate__flash">Loading</p>}
        {/* { loading ? 'Cargando....' : 'Data cargada'} */}
            <div className="card-grid animate__animated animate__bounce animate__fadeIn">
                {
                    images.map( img => (
                        <GifGridItem
                        key={ img.id }
                        { ...img } 
                        />
                    ) )
                }
            </div> 
        </>
    )   
}

 {/*<ol>
                {
                images.map( ({ id, title }) => (
                <li key={ id }>{ title }</li>
                ))
                }
            </ol>*/}
