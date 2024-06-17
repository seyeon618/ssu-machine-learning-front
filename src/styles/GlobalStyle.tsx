import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  @font-face {
    font-family: "BMJUA";
    font-weight: normal;
    src: url("../asset/font/BMJUA_otf.otf") format("truetype");
  }
  @font-face {
    font-family: "Meongi";
    font-weight: normal;
    src: url("../asset/font/Cafe24Meongi-W-v1.0.woff") format("truetype");
  }
  @font-face {
    font-family: "Moyamoya";
    font-weight: normal;
    src: url("../asset/font/Cafe24Moyamoya-Face-v1.0.woff") format("truetype");
  }
  @font-face {
    font-family: "Jamsil_light";
    font-weight: normal;
    src: url("../asset/font/The Jamsil 2 Light.ttf") format("truetype");
  }
  @font-face {
    font-family: "Jamsil_Medium";
    font-weight: normal;
    src: url("../asset/font/The Jamsil 4 Medium.ttf") format("truetype");
  }
`;

export default GlobalStyle;
