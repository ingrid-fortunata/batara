import React from "react";
import "./ContentModal.css";

export default function ContentModal(props) {
  let caughtPokemon = "";
  props.caughtPokemon.forEach((x) => {
    {
      caughtPokemon =
        (caughtPokemon.length > 0 ? caughtPokemon + "," : caughtPokemon) +
        x.name;
    }
  });
  return props.navPosition === "Home" ? (
    <div>
      <h3>Your Pokemon:</h3>
      <p>{caughtPokemon}</p>
      <h3>Want to catch {props.pokeModal[0].name} ?</h3>
      <button
        className="modal-button"
        onClick={() => {
          props.catchPokemon(props.pokeModal[0]);
          props.closeModal();
        }}
      >
        Catch it!
      </button>
    </div>
  ) : (
    <div>
      <h3>Your Pokemon:</h3>
      <p>{caughtPokemon}</p>
      <h3>Want to delete {props.pokeModal[0].name} ?</h3>
      <button
        className="modal-button"
        onClick={() => {
          props.deletePokemon(props.pokeModal[1]);
          props.closeModal();
        }}
      >
        Delete
      </button>
    </div>
  );
}
