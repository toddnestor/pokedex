import React from 'react';

class PokemonForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.defaultState();
  }

  defaultState() {
    return {
      name: "",
      image_url: "",
      poke_type: this.pokeTypes()[0],
      attack: "",
      defense: "",
      moves: ["", ""]
    };
  }

  pokeTypes(){
    return [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];
  }

  update(property) {
    return (e) => {
      let updates = {};
      updates[property] = e.currentTarget.value;
      this.setState(updates);
    };
  }

  updateMove(i) {
    return (e) => {
      let moves = _.merge([], this.state.moves);
      moves[i] = e.currentTarget.value;
      this.setState({ moves });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon(this.state);
    this.setState(this.defaultState());
  }

  render() {
    let { name, image_url, poke_type, attack, defense, moves } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Name" onChange={this.update('name').bind(this)} value={name} />
        <input type="text" placeholder="Image Url" onChange={this.update('image_url').bind(this)} value={image_url} />
        <select onChange={this.update('poke_type').bind(this)}>
          {
            this.pokeTypes().map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))
          }
        </select>
        <input type="number" placeholder="Attack" onChange={this.update('attack').bind(this)} value={attack} />
        <input type="number" placeholder="Defense" onChange={this.update('defense').bind(this)} value={defense} />
        <input type="text" placeholder="Move 1" onChange={this.updateMove(0).bind(this)} value={moves[0]} />
        <input type="text" placeholder="Move 2" onChange={this.updateMove(1).bind(this)} value={moves[1]} />
        <button>Create Pokemon</button>
      </form>
    );
  }
}

export default PokemonForm;
