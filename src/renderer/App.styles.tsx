import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  clear: both;
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

body {
  font-family: 'San Francisco Display Thin';
  font-weight: 600;
  min-height: 100px;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  margin: 0 auto;
  background: #29343e;
  border-radius: 4px;
  padding: 0px 0px 0px 0px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  -webkit-app-region: drag;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: rgb(52, 62, 72);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fbd159;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
`;

export default GlobalStyle;
