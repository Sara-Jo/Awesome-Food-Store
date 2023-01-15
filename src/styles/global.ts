import { createGlobalStyle } from "styled-components";
import { Inter, Rowdies } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const rowdies = Rowdies({ weight: "700", subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${inter.style.fontFamily};
  }
  h1, h2, h3 {
    font-family: ${rowdies.style.fontFamily};
  }
`;

export default GlobalStyle;
