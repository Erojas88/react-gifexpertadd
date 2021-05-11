


export const getGifs = async( category ) => {

    // Petición HTTP en JavaScritp actual 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=5sTg6dsl86iiMlI77RZJfWNUkw8jLaP6`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
} 