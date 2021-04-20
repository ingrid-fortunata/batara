import React from "react";
import "../App.css";
import { CardList } from "../components/card-list/card-list.component";

class Home extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     pokemons: [],
  //   };
  // }

  componentDidMount(props) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((allPokemon) => {
        allPokemon.results.forEach((pokemon) => {
          let url = pokemon.url; // <--- this is saving the pokemon url to a variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
          fetch(url)
            .then((response) => response.json())
            .then((pokeData) => this.props.handler(pokeData));
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <CardList
          pokemons={this.props.pokemons}
          openModal={this.props.openModal}
        />
      </div>
    );
  }
}

export default Home;
