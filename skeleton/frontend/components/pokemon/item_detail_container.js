import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';


const mapStateToProps = (state, { params: { itemId } }) => ({
  item: selectPokemonItem(state, itemId)
});

export default connect (
  mapStateToProps
)(ItemDetail);
