import "./topbar.scss";
import { LinkedIn, AssignmentInd } from "@material-ui/icons";

// exportando el useState en unas props
export default function Topbar({ menuOpen, setMenuOpen }) {
  const _blank = "target";
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <h1>Contacto</h1>

          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/maslucas/"
              target={_blank}
            >
              <LinkedIn className="icon" />
              <p>LinkedIn</p>
            </a>
          </div>
          {/* <div className="itemContainer">
            <a href="https://github.com/heredialucas" target={_blank}>
              <GitHub className="icon" />
              <p>GitHub</p>
            </a>
          </div> */}
          <div className="itemContainer">
            <a
              href="a"
              target={_blank}
            >
              <AssignmentInd className="icon" />
              <p>C V</p>
            </a>
          </div>
        </div>
        <div className="right">
          {/* onclick haga lo contrario del estado actual */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
