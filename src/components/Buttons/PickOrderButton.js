import React from 'react';
import { AcceptSmallBtn } from './Style';

const PickOrderButton = ({ handleClick, productId, pickedProducts }) => {
  return (
    <AcceptSmallBtn
      className={pickedProducts.includes(productId) && '-active'}
      onClick={() => {
        handleClick(productId);
      }}
    >
      {pickedProducts.includes(productId) ? 'Plukket' : 'Marker som plukket'}
    </AcceptSmallBtn>
  );
};

export default PickOrderButton;
