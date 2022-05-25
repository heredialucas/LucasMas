import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { CaricaturasData } from "../../data";
import style from "./Caricaturas.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";

export default function Caricaturas() {
  return (
    <>
      <div className={style.container} id="caricaturas">
        <div className={style.left}>
          <h2>Caricaturas</h2>
          <p>Explicación de caricaturas</p>
        </div>
        <div className={style.right}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className={style.swiper}
          >
            {CaricaturasData.map((Caricatura) => (
              <SwiperSlide className={style.cariCard} key={Caricatura.id}>
                <img src={Caricatura.img} alt={Caricatura.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
