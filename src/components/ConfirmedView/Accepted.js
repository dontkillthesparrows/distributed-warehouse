import React from 'react';

import { Grid, Svg, Text, Back, HR } from './Style';
import {
  SmallButtonContainer,
  AcceptBigBtn,
  DeclineBigBtn,
} from '../Buttons/Style';

const Accepted = ({ handleButtonClick, history }) => {
  return (
    <>
      <Grid>
        <Back />
        <Svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"></path>
        </Svg>
        <Text>
          <h1>Orderen er akseptert</h1>
          <HR />
          <p>
            Orderen må plukkes og bekreftelse sendes til kunden. Du har fortsatt
            mulighet å avvise orderen.
          </p>
        </Text>
        <SmallButtonContainer>
          <AcceptBigBtn onClick={() => handleButtonClick('packed')}>
            Plukk order
          </AcceptBigBtn>
          <DeclineBigBtn onClick={() => history.push(`/new`)}>
            Tilbake til oversikt
          </DeclineBigBtn>
        </SmallButtonContainer>
      </Grid>
    </>
  );
};
export default Accepted;
