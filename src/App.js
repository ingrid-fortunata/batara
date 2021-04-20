import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  //NavLink,
  Nav,
  Form,
  Input,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Screen/Home";
import Pokedex from "./Screen/UserPokedex";
import Modal from "react-modal";
import ContentModal from "./Screen/ContentModal";

//Untuk Modals
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      pokemons: [],
      searchField: "",
      showModal: false,
      pokeData: {},
      caughtPokemon: [],
      navPosition: "Home",
    };
  }

  handler(pokeData) {
    this.setState({
      pokemons: this.state.pokemons.concat(pokeData),
    });
  }

  gethandler = () => {
    return this.state.pokemons;
  };

  openModal = (pokeData, index) => {
    this.setState({
      showModal: true,
      pokeModal: [pokeData, index],
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  catchPokemon = (pokeData) => {
    this.setState({ caughtPokemon: this.state.caughtPokemon.concat(pokeData) });
  };

  changingPosition = (position) => {
    this.setState({ navPosition: position });
  };
  deletePokemon = (index) => {
    this.state.caughtPokemon.splice(index, 1);
    //this.setState({ caughtPokemon:  });
  };

  render() {
    const { pokemons, searchField, caughtPokemon, navPosition } = this.state;
    const filteredPokemons =
      navPosition === "Home"
        ? pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchField.toLowerCase())
          )
        : caughtPokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchField.toLowerCase())
          );

    return (
      <Router>
        <Navbar style={{ backgroundColor: "white" }} expand="md" fixed="top">
          <Nav className="mr-auto">
            <NavItem>
              <NavLink
                to="/"
                className="main-nav"
                activeClassName="main-nav-active"
                onClick={() => this.changingPosition("Home")}
              >
                Home
              </NavLink>
              <NavLink
                to="/Pokedex"
                className="main-nav"
                activeClassName="main-nav-active"
                onClick={() => this.changingPosition("Pokedex")}
              >
                User Pokemon
              </NavLink>
            </NavItem>
          </Nav>
          <Form inline>
            <Input
              type="search"
              placeholder="Search Pokemon"
              className="mr-sm-2"
              onChange={(e) => this.setState({ searchField: e.target.value })}
            />
          </Form>
        </Navbar>

        <Switch>
          <Route
            //component={Home}
            render={
              (/*props*/) => (
                <Home
                  //{...props}
                  handler={this.handler}
                  gethandler={this.gethandler}
                  pokemons={
                    searchField ? filteredPokemons : this.state.pokemons
                  }
                  openModal={this.openModal}
                />
              )
            }
            path="/"
            exact={true}
          />
          <Route
            render={() => (
              <Pokedex
                pokemons={
                  searchField ? filteredPokemons : this.state.caughtPokemon
                }
                openModal={this.openModal}
              />
            )}
            path="/Pokedex"
          />
        </Switch>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <ContentModal
            pokeModal={this.state.pokeModal}
            catchPokemon={this.catchPokemon}
            closeModal={this.closeModal}
            caughtPokemon={this.state.caughtPokemon}
            navPosition={this.state.navPosition}
            deletePokemon={this.deletePokemon}
          />
        </Modal>
      </Router>
    );
  }
}

export default App;
