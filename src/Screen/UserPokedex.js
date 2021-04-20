import React from "react";
import { CardList } from "../components/card-list/card-list.component";

export default function Pokedex(props) {
  return (
    <div>
      <h1>My Pokedex</h1>
      <CardList pokemons={props.pokemons} openModal={props.openModal} />
    </div>
  );
}
