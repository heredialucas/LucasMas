import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 70,
      strings: ["Lucas Mas", "Diseñador UI/UX", "Arquitecto Jr."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <h1>
            Hola! Cómo estás?
            <br /> Soy <span ref={textRef}></span>
          </h1>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Acerca de mi</h2>
          <p>
            Soy un estudiante avanzado de arquitectura, muy apasionado por el diseño y la innovación!<br/> Con mucha emoción de aplicar mis conocimientos y experiencia en el mundo del desarrollo de aplicaciones web y móviles.
          </p>
        </div>
      </div>
    </div>
  );
}
