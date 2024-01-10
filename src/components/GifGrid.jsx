import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';
import { useFetchGitfs } from "../hooks/useFetchGitfs";

export const GifGrid = ({category}) => {

    
    const {images, isLoading} = useFetchGitfs(category);

    return (
        <>
            <h3 className='titulo'>{category}</h3>
            {
                // * Manera mas corta del condicionante para que ponga cargando...
                isLoading && (<h2>Cargando...</h2>) 
            }
            <div className="card-grid">
                {images.map((image) =>(
                    
                    <GifItem 
                    
                        key={image.id}
                        {... image}

                    />
                ))}
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}