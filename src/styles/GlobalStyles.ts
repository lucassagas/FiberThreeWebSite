import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@font-face {
  font-family: "Futura PT Light";
  src: url('/fonts/Futura PT Light.otf');
  font-weight: 300;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "Futura PT Book";
  src: url('/fonts/Futura PT Book.otf');
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "Futura PT Medium";
  src: url('/fonts/Futura PT Medium.otf');
  font-weight: 500;
  font-display: swap;
  font-style: medium;
}

@font-face {
  font-family: "Futura PT Demi";
  src: url('/fonts/Futura PT Demi.otf');
  font-weight: 600;
  font-display: swap;
  font-style: medium;
}

@font-face {
  font-family: "Futura PT Heavy";
  src: url('/fonts/Futura PT Heavy.otf');
  font-weight: 700;
  font-display: swap;
  font-style: bold;
}

@font-face {
  font-family: "Futura PT Bold";
  src: url('/fonts/Futura PT Bold.otf');
  font-weight: 800;
  font-display: swap;
  font-style: bold;
}

@font-face {
  font-family: "Futura PT Extra Bold";
  src: url('/fonts/Futura PT Extra Bold.otf');
  font-weight: 900;
  font-display: swap;
  font-style: bold;
}

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

#nprogress .peg {
  display: none !important;
}

#nprogress .bar {
  background: ${({ theme }) => theme.colors.secondary};
  height: 3px;
  box-shadow: none;
}

::-webkit-scrollbar {
    width: 5px;

  }


  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
  }

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 720px) {
    font-size: 87.5%;
  }

  @media(max-width: 430px) {
    font-size: 81.25%
  }
}

body {
  background: ${({ theme }) => theme.colors.primary};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

}

body, input, textarea, button {
  font-family: Futura PT Book, sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.default};
}

h1, h2, h3, h4 {
  font-family: Futura PT Heavy, sans-serif;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed
}
`
