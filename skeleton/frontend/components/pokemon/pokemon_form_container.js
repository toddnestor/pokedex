import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createPokemon, clearErrors } from '../../actions/pokemon_actions';

const mapStatetoProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createPokemon: pokemon => dispatch(createPokemon(pokemon)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PokemonForm);
