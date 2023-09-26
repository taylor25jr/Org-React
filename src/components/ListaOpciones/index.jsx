import React from 'react'
import "./ListaOpciones.css"
import PropTypes from 'prop-types';


export const ListaOpciones = ({arrayTeam,setTeam}) => {

  const handleSelect = (event) => {
    setTeam(event.target.value);
    //console.log(event.target.value);
  };


  return (
    <div className="lista-opciones">
      <label htmlFor="team">Equipos</label>
      <select name="equipo" id="team" defaultValue="default" onChange={handleSelect}>
        <option value="default" >
          Seleccionar Equipo
        </option>
        {arrayTeam.map((options) => (
          <option key={options.id} value={options.title} >{options.title}</option>
        ))} 
      </select>
    </div>
  );
}

ListaOpciones.propTypes = {
  setTeam: PropTypes.func,
  arrayTeam: PropTypes.array,
}
