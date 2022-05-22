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
      strings: ["Heredia Lucas", "Full Stack"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <h1>
            Hi! How are you?
            <br /> I'm <span ref={textRef}></span>
          </h1>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>About me</h2>
          <p>
            I'm someone curious and passionate about programming, constantly
            learning and trying to improve one day at a time. I hope you like
            this project and we can be in touch in the future
          </p>
        </div>
      </div>
    </div>
  );
}
