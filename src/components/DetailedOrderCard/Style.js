import styled from 'styled-components';

// Prod card

const Card = styled.div`
  display: grid;
  grid-template-rows: auto;
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  color: var(--text);
  background: var(--secondary-body);
`;

export const ErrorCardWrapper = styled(Card)`
  text-align: center;

  & h5 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1rem;
  }
`;

export const CardWrapper = styled(Card)`
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'title title'
    'image info'
    'button button';
`;
export const Title = styled.h4`
  grid-area: title;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;
export const ProductImage = styled.div`
  grid-area: image;
  margin: 1rem;
`;

export const UL = styled.ul`
  grid-area: info;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
`;
export const LI = styled.li`
  list-style-type: none;
  margin: 0.4em;
  font-size: 1.2rem;

  & span {
    font-weight: bold;
    color: var(--highlight);
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  justify-self: center;
  width: 80%;
  padding: 1rem;
`;
