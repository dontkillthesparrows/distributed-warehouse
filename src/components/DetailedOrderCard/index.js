import PickOrderButton from '../Buttons/PickOrderButton';
import React from 'react';
import {
  CardWrapper,
  Title,
  ProductImage,
  UL,
  LI,
  ButtonContainer,
  ErrorCardWrapper,
} from './Style';

const DetailedOrderCard = ({
  cardTitle,
  showButton,
  handleClick,
  pickedProducts,
  size,
  color,
  orderQuantity,
  imgUrl,
  productId,
}) => {
  if (cardTitle === undefined) {
    return (
      <ErrorCardWrapper>
        <h5>Her har det skedd en feil!</h5>
        <p>:-(</p>
        <p>Informasjon om dette produktet mangler dessverre.</p>
        <p>Avvis denne ordren.</p>
      </ErrorCardWrapper>
    );
  }
  return (
    <CardWrapper>
      <Title>{cardTitle}</Title>
      <ProductImage>
        <img src={imgUrl} width={'100%'} alt={'Inget bilde'} />
      </ProductImage>
      <UL>
        <LI>Str: {size} </LI>
        <LI>Farge: {color}</LI>
        <LI>Antall: {orderQuantity}</LI>
        <LI>SKU: {productId}</LI>
        {orderQuantity > 1 && (
          <LI>
            <span>Noter antall varer!</span>
          </LI>
        )}
      </UL>

      {showButton ? (
        <ButtonContainer>
          <PickOrderButton
            handleClick={handleClick}
            productId={productId}
            pickedProducts={pickedProducts}
          />
        </ButtonContainer>
      ) : (
        <React.Fragment />
      )}
    </CardWrapper>
  );
};

export default DetailedOrderCard;
