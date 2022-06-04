import { createGlobalStyle } from 'styled-components';

export const colorPallete = {
  primary: '#292929',
  secondary: '#1D1D1D',

  icon: '#676767',
  icon_hover: '#D1D1D1',

  scrollbar: '#676767',

  text_primary: '#676767',
  text_primary_hover: '#D1D1D1',

  button: '#000000',
  button_hover: '#1D1D1D',

  shadow: 'rgba(0, 0, 0, 0.3)',
  shadow2: 'rgba(0, 0, 0, 0.5)',
};

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

html {
  user-select: none;
  -webkit-app-region: drag;
}

body {
  height: 100vh;
  min-height: 100px;
  font-family: 'San Francisco Display Thin';
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto;
  background: ${colorPallete.primary};
  border-radius: 4px;
  padding: 0px 0px 0px 0px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}

#root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px ${colorPallete.shadow};
  border-radius: 10px;
  background-color: ${colorPallete.button_hover};
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: ${colorPallete.button};
  box-shadow: inset 0 0 6px ${colorPallete.shadow2};
}


  .app-icon {
    path {
      stroke: ${colorPallete.icon};
    }
  }

  .app-icon:hover, .active .app-icon {
      path {
        stroke: ${colorPallete.icon_hover};
      }
  }
`;

export default GlobalStyle;
