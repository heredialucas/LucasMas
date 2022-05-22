import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Contact from "./components/contact/Contact";
import Carousel from "./components/carousel/Carousel";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import "./app.scss";

function App() {
  // creando el estado del menu principal
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* <Carousel /> */}
        <Tecnologias />
        <Contact />
      </div>
    </div>
  );
}

export default App;
