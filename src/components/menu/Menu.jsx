import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
      </ul>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#diseños">Diseños UI/UX</a>
        </li>
      </ul>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#proyectos">Renderizados</a>
        </li>
      </ul>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#caricaturas">Caricaturas</a>
        </li>
      </ul>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contacto">Email</a>
        </li>
      </ul>
    </div>
  );
}
