import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* Styles principaux */
  * {
    font-family: 'Roboto', Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: white;
  }
  .bloc_page {
    max-width: 1240px;
    margin: auto;
    padding: 2.25rem 6.25rem 3rem;  
    @include respond-to(small-screen) {
      padding: 1.25rem;  
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .sr-only {
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border:0
  }
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`
