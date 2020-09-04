import styled from 'styled-components';

export const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 4rem auto;
  grid-template-areas:
    'header'
    'info'
    'main'
    'footer';
  background-color: var(--body);
`;

export const Header = styled.header`
  grid-area: header;
  background-color: var(--secondary-body);
  display: grid;
  grid-template-columns: 15% 85%;
  padding-top: 0.8rem;
  padding-bottom: 0.6rem;
  position: sticky;
  top: 0;
  box-shadow: 0.5px 0.5px 2px 1px var(--body);
`;

export const HeaderInfo = styled.strong`
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
  line-height: 1.2rem;
  text-align: center;
  color: var(--text);
  font-weight: 600;
  padding-right: 0.5rem;
`;

export const Highlight = styled(HeaderInfo)`
  color: var(--highlight);
  padding-right: 3rem;
`;

export const InfoCard = styled.div`
  grid-area: info;
  padding: 1rem;
  background: var(--body);
  color: var(--text);
  font-size: 1.2rem;

  & h4 {
    font-size: 1.5rem;
    margin: 1rem;
  }

  & li {
    font-size: 1rem;
    margin-left: 1rem;
  }
`;

export const Main = styled.div`
  grid-area: main;
  height: 100%;
  background-color: var(--body);
`;
