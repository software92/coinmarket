import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
