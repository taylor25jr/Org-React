import "./Equipo.css";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid"
import { Colaborador } from "../Colaborador";
import hexToRgba from 'hex-to-rgba'

export const Equipo = ({
  id,
  team,
  cardColor,
  colaborators,
  deleteColaborator,
  handleColor,
  like,
}) => {
 
  return (
    <>
      {colaborators.length > 0 && (
        <section
         className="equipo" 
         style={{backgroundColor:hexToRgba(cardColor, 0.8)}}>
          <input 
          type="color"
           className="input-color" 
           value={{borderColor:cardColor}}
           onChange={(event) => handleColor(event.target.value, id)}
           />
          <h3 style={{ borderColor: cardColor }}>{team}</h3>
          <article className="colaboradores">
            {colaborators.map((colaborador) => (
              <Colaborador
                colaborators={colaborador}
                key={uuid()}
                cardColor={cardColor}
                deleteColaborator={deleteColaborator}
                idCol={colaborador}
                fav={colaborador.fav}
                like={like}
              />
            ))}
          </article>
        </section>
      )}
    </>
  );
};

Equipo.propTypes = {
  id: PropTypes.string,
  team: PropTypes.string,
  cardColor: PropTypes.string,
  colaborators: PropTypes.array,
  deleteColaborator: PropTypes.func,
  handleColor: PropTypes.func,
};
