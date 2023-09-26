import React from 'react'
import "./MiOrg.css"

export const MiOrg = ({showChange}) => {



  return (
    <section className='orgsection'>
        <h3 className='title'>Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={showChange} />
    </section>
  )
}
