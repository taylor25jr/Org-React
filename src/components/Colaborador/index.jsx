import React from 'react'
import "./Colaborador.css"
import PropTypes from 'prop-types';
import { FaRegCircleXmark,FaHeart,FaRegHeart } from "react-icons/fa6";




export const Colaborador = ({colaborators,cardColor,deleteColaborator,idCol,fav,like}) => {

  const {id} = idCol
  return (
    <article className='colaborador'>
        <FaRegCircleXmark onClick={() => deleteColaborator(id)} className='delete'/>
            <div className="encabezado" style={{backgroundColor:cardColor}}>
                <img src={colaborators.photo} alt="taylor" />
            </div>
            <div className="info">
                <h4>{colaborators.name}</h4>
                <h5>{colaborators.area}</h5>
               {fav ? <FaHeart color='red' onClick={() => like(id)} /> : <FaRegHeart onClick={() => like(id)}/>}
            </div>
    </article>
  )
}

Colaborador.propTypes = {
  idCol: PropTypes.object,
  fav: PropTypes.bool,
  colaborators: PropTypes.object,
  cardColor: PropTypes.string,
  deleteColaborator: PropTypes.func,
}