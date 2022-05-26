import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contacto from "./components/contacto/Contacto";
import Casas from "./components/casas/Casas";
import Caricaturas from "./components/caricaturas/Caricaturas";
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
        <Caricaturas />
        <Casas />
        <Contacto />
      </div>
    </div>
  );
}

export default App;
