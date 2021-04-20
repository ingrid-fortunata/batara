import React from "react";
//import { BeatLoader } from "react-spinners";
import "./card.styles.css";

export const Card = (props) => {
  let picture = `https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`;
  return (
    <div
      className="card-container"
      onClick={() => props.openModal(props.pokemon, props.index)}
    >
      <img alt="pokemon" src={picture} className="pokeimg" />
      <h3> {props.pokemon.name}</h3>
      {/* index = {props.index} */}
    </div>
  );
};
