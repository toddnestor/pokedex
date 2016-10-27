import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h5>{item.name}</h5>
      <h6>Happiness: {item.happiness}</h6>
      <h6>Price: ${item.price}</h6>
    </div>
  );
};

export default ItemDetail;
