import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 128px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 110px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;


export const Red = styled.span`
  color: ${props => props.theme.color.secondary};
`;

export const BoxLink = styled.div`
  a {
    text-transform: uppercase;
    background-color: ${props => props.theme.color.darkgrey};
    text-decoration: none;
    display: inline-block;
    font-family: ${props => props.theme.font.primary};
    margin: 35px 0;
    padding: 16px 20px;
    font-size: 2em;
  }

  a:hover {
    color: ${props => props.theme.color.secondary};
  }
`;