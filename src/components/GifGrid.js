import React from 'react'
import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);

  // este hook permite que se dispare la peticion solo cuando nosotros querramos
  // el primer callback es lo que se quiere que se haga, y el segundo parametro es la repeticion
  // useEffect( () => {
  //   getGifs( category )
  //     .then( img => setImages( img ) )
  //   // si el prop cambia se llamara de nuevo la peticion  
  // }, [ category ]);  

  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3> { category } </h3> 
      { loading && <p>Cargando...</p> }
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
