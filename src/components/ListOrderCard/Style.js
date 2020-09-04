import styled from 'styled-components';

const Card = styled.div`
  padding: 1.5rem;
  margin-bottom: 0.7rem;
  margin-top: 0.7rem;
  box-shadow: 0.5px 1px 2px 1px var(--secondary-body);
  font-weight: 600;

  & h4 {
    text-decoration: underline;
  }
`;

export const CardWrapper = styled(Card)`
  background-color: var(--secondary-body);
  color: var(--text);
`;

export const TitleH4 = styled.h4`
  justify-self: center;
  font-size: 1.2rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const OrderTime = styled.b`
  padding-top: 0.5rem;
  font-weight: 700;
`;
export const OrderVariables = styled.strong`
  color: ${(props) =>
    props.expires ? 'var(--highlight-warning)' : 'var(--highlight)'};
`;
export const UL = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
`;
export const LI = styled.li`
  list-style-type: none;
  font-size: 1rem;
  line-height: 1.8rem;
`;
