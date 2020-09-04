import styled from 'styled-components';

export const Container = styled.div`
  width: 100wv;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 4rem auto 2rem;
  background-color: var(--body);

  & .dropdown {
    grid-template-rows: 7rem 4rem auto 2rem;
  }
`;

export const MainContent = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 0.8rem;
`;

export const Label = styled.label`
  position: relative;
`;

export const InputField = styled.input`
  margin: 1rem;
  justify-content: center;
  padding: 0.4em 1.6rem;
  width: 70vw;
  padding-left: 1rem;
  border: 0;
  background: var(--secondary-body);
  border-radius: 2px;
  color: var(--text);
  line-height: 29px;
  height: 29px;
  font-size: 1rem;
  &:focus {
    border: 1px solid var(--highlight);
    box-shadow: 0 0 5px var(--highlight);
  }
`;
