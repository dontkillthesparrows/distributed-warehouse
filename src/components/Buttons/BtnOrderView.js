import React from 'react';
import { AcceptBigBtn, SmallButtonContainer, DeclineBigBtn } from './Style';

const BtnOrderView = ({ order, handleChange, pickedProducts }) => {
  return (
    <SmallButtonContainer>
      {order.order_status !== 'in-process' ? (
        <div>
          {order.order_status === 'new' ? (
            <AcceptBigBtn
              accept
              value={'packed'}
              onClick={handleChange.bind(this, 'packed')}
            >
              Godta ordre
            </AcceptBigBtn>
          ) : (
            <AcceptBigBtn
              value={'in-process'}
              disabled={pickedProducts.length !== order.order_lines.length}
              onClick={handleChange.bind(this, 'in-process')}
            >
              Klar til opphenting
            </AcceptBigBtn>
          )}
          <DeclineBigBtn
            value={'rejected'}
            onClick={handleChange.bind(this, 'rejected')}
          >
            Avvis ordre
          </DeclineBigBtn>
        </div>
      ) : (
        <AcceptBigBtn
          value={'delivered'}
          onClick={handleChange.bind(this, 'delivered')}
        >
          Marker som levert !
        </AcceptBigBtn>
      )}
    </SmallButtonContainer>
  );
};
export default BtnOrderView;
