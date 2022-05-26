import { useState } from "react";
import "./Contacto.module.scss";
import Edificio2 from '../../assets/images/edificio2.png';
import style from './Contacto.module.scss';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className={style.contact} id="contacto">
      <div className={style.left}>
        <img src={Edificio2} alt="" />
      </div>
      <div className={style.right}>
        <h2>Email</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Enviar</button>
          {message && <span>Gracias! Estaremos en contacto!</span>}
        </form>
      </div>
    </div>
  );
}