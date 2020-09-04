import styled from 'styled-components';

export const Container = styled.div`
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
`;

export const SVG = styled.svg`
  fill: var(--text);
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-body);
  color: var(--text);
  border: none;
  font-size: 0.9rem;
  padding-top: 0.5rem;
  & span {
    padding: 5px;
    font-size: 0.7rem;
  }
  &.tab-active {
    color: var(--highlight);
    background-color: transparent;
    text-decoration: none;
    font-weight: bold;
    box-shadow: none;
    outline: 2px dotted transparent;
  }
`;
