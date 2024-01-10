

import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGitfs = (category) => {

    // *Los custom hook pueden tener su propio estado independiente como pueden usar otros hook dentro de ellos
    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async ()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(()=>{
    
        getImages()

    },[]);


    return{
        images,
        isLoading,
    }
}


