import React from 'react';
import {
  FormattedDeadline,
  TimeText,
  GetPacking,
} from '../../utils/listOrderCardFunc';
import { getTotalOrderQuantity } from '../../utils/getTotalOrderQuantity';
import { getFormattedDate } from '../../utils/getFormattedDate';

import { TitleH4, OrderTime, OrderVariables, UL, LI } from './Style';

const ListOrderCard = ({ order, cardTitle, now, orderView }) => {
  let formattedDeadLine = FormattedDeadline(order, now);
  let timeText = TimeText(order);
  let getPacking = GetPacking(order, now);

  return (
    <React.Fragment key={order.orderNumber}>
      <TitleH4>{cardTitle}</TitleH4>
      {orderView ? (
        ``
      ) : (
        <>
          {order.order_status !== 'in-process' && (
            <OrderTime>
              {timeText}
              <OrderVariables expires={getPacking}>
                {formattedDeadLine}
              </OrderVariables>
            </OrderTime>
          )}
        </>
      )}

      <UL>
        <LI>Antall varer: {getTotalOrderQuantity(order.order_lines)}</LI>
        <LI>Bestillingsdato: {getFormattedDate(order.created_in_app_at)} </LI>
        {order.order_status !== 'delivered' &&
          order.order_status !== 'rejected' && (
            <>
              <LI data-hj-suppress>Kunde: {order.customer_name}</LI>
              <LI>Telefon: {order.customer_phone}</LI>
            </>
          )}
      </UL>
    </React.Fragment>
  );
};
export default ListOrderCard;
