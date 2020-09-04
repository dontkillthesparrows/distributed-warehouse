import styled from 'styled-components';

export const SmallButtonContainer = styled.div`
  background-color: var(--secondary-body);
  grid-area: footer;
  padding: 1rem;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 0;
  font-weight: bold;
`;

export const BigButton = styled(Button)`
  font-size: 1.5rem;
  box-shadow: -0.5px 0.5px 2px 0 var(--body);
`;

export const AcceptBigBtn = styled(BigButton)`
  background: ${(props) =>
    props.accept
      ? '  var(--trigger-accept)'
      : props.disabled
      ? 'var(--trigger-accept-disabled)'
      : 'var(--trigger-accept)'};
  color: ${(props) =>
    props.disabled ? ' var(--text-disabled)' : 'var(--secondary-text)'};
`;

export const DeclineBigBtn = styled(BigButton)`
  background: var(--trigger-decline);
  color: var(--secondary-text);
  box-shadow: -0.5px 0.5px 2px 0 var(--body);
`;

export const MultipleChoiceBtn = styled(Button)`
  background-color: var(--trigger-accept);
  color: var(--text);
  font-size: 1.2rem;
  box-shadow: -1px 1px 3px 0 var(--trigger-accept-disabled);
`;

export const AcceptSmallBtn = styled(Button)`
  background-color: var(--trigger-accept);
  color: var(--secondary-text);
  box-shadow: 1px 1px 0.5px var(--body);
  font-size: 1.2rem;
  border: none;

  &.-active {
    background-color: var(--highlight);
    color: var(--text);
  }
`;

export const BackIcon = styled.svg`
  height: 2rem;
  border-radius: 5px;
  fill: var(--text);
`;

export const BackBtn = styled.button`
  grid-column: 1 / 2;
  background-color: transparent;
  border: none;
`;
