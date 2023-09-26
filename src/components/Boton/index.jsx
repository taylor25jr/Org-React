import React from 'react'
import "./Boton.css"
import PropTypes from 'prop-types';



export const Boton = ({children}) => {
  return (
    <button className='boton'>{children}</button>
  )
}

Boton.propTypes = {
  children: PropTypes.string,
}