import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { v4 as uuid } from "uuid"
import { Formulario } from "./components/Formulario";
import { MiOrg } from "./components/MiOrg";
import { Equipo } from "./components/Equipo";
import { Footer } from "./components/Footer";


function App() {
  const [showForm, setShowForm] = useState(false);
  const [colaborators, setColaborators] = useState([
    {
      id: uuid(),
      team: "Frontend",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      area: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/genesysrm.png",
      name: "Genesys Rondon",
      area: "Desarrolladora de software e instructora",
      fav:false,

    },
    {
      id: uuid(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      area: "Instructora en Alura Latam",
      fav:false,
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      area: "Head de Alura e Instructor",
      fav:false,
    },
    {
      id: uuid(),
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      area: "Dev FullStack",
      fav:false,
    },
  ]);
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      id: uuid(),
      title: "Frontend",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]);


  const showChange = () => {
    setShowForm(!showForm);
  };

  const handleRegister = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    setColaborators([...colaborators, colaborador]);
  };

  const handleDelete = (id) => {
    const newColaborators = colaborators.filter(
      (colaborator) => colaborator.id !== id);
    console.log(newColaborators)
    setColaborators(newColaborators);
  };

  const handleColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  const createTeam = (newTeam) => {

   setTeams([...teams, {...newTeam,id: uuid()}])
}

const like = (id) => {

  const updatedColaborators = colaborators.map((colaborator) => {
    if(colaborator.id === id){
      colaborator.fav = !colaborator.fav;
    }
    return colaborator
  })
  setColaborators(updatedColaborators)
}

  return (
    <>
      <Header />
      {showForm && (
        <Formulario arrayTeam={teams} registerColaborator={handleRegister} createTeam={createTeam}/>
      )}
      <MiOrg showChange={showChange} />
      {teams.map((equipo) => (
        <Equipo
          key={equipo.id}
          team={equipo.title}
          cardColor={equipo.primaryColor}
          deleteColaborator={handleDelete}
          colaborators={colaborators.filter(
            (colaborador) => colaborador.team === equipo.title
          )}
          handleColor={handleColor}
          id={equipo.id}
          like={like}
          />
          ))}
      <Footer />
    </>
  );
}

export default App;
