import  { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html{
    direction: ${({dir}) => dir};
  }
`