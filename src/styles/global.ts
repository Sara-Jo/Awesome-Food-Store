import { createGlobalStyle } from "styled-components";
import { Noto_Sans_KR, Rowdies } from "@next/font/google";

const noto_sans_KR = Noto_Sans_KR({ weight: "400", preload: false });
const rowdies = Rowdies({ weight: "700", subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${noto_sans_KR.style.fontFamily};
  }
  h1, h2, h3 {
    font-family: ${rowdies.style.fontFamily};
  }
`;

export default GlobalStyle;
