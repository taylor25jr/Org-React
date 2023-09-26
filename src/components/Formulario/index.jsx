import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid"
import "./Formulario.css"
import { Campo } from '../Campo'
import { ListaOpciones } from '../ListaOpciones'
import { Boton } from '../Boton'


export const Formulario = ({arrayTeam,registerColaborator,createTeam}) => {

  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  //Team formState

  const [title, setTitle] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");


  const handleSend = (event) => {
    event.preventDefault();
    console.log("Manejar envio");
    let dataToSend = 
    {
      id: uuid(),
      name,
      area,
      photo,
      team,
    }
    registerColaborator(dataToSend)
  }

  const handleNewTeam = (event) => {
    event.preventDefault();
    createTeam({ title, primaryColor });
  }

  return (
    <section className="formulario">
      <form onSubmit={handleSend}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          label="Nombre"
          name="nombre"
          placeholder="Ingresar nombre"
          value={name}
          setInputValue={setName}
          required
        />
        <Campo
          label="Puesto"
          name="puesto"
          placeholder="Ingresar puesto"
          value={area}
          setInputValue={setArea}
          required
        />
        <Campo
          label="Foto"
          name="foto"
          placeholder="Ingresar enlace de foto"
          value={photo}
          setInputValue={setPhoto}
          required
        />
        <ListaOpciones value={team} setTeam={setTeam} arrayTeam={arrayTeam} />
        <Boton>Crear colaborador</Boton>
      </form>
      <form onSubmit={handleNewTeam} className='teamForm'>
        <h2>Rellena el formulario para crear el Equipo.</h2>
        <Campo
          label="Titulo"
          name="nombre"
          placeholder="Ingresar el Titulo"
          value={title}
          setInputValue={setTitle}
          required
        />
        <Campo
          label="Color"
          type="color"
          name="puesto"
          placeholder="Ingresar Color"
          value={primaryColor}
          setInputValue={setPrimaryColor}
          required
        />
        <Boton>Registra equipo</Boton>
        </form>
    </section>
  );
}

Formulario.propTypes = {
  createTeam: PropTypes.func,
  arrayTeam: PropTypes.array,
  registerColaborator: PropTypes.func,
}