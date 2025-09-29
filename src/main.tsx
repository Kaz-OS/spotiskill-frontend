import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Signup from "./components/signup";
import "./components/styles/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <body>
      <main>
        <section id="start">
          <h1>Bienvenue sur Spotiskill.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet maiores architecto blanditiis nisi voluptatum
            illum sed ab, magnam, porro natus doloremque modi. Incidunt doloremque illum quasi dolorem nobis modi error.
          </p>
        </section>
        <Signup />
      </main>
    </body>
  </StrictMode>
);
