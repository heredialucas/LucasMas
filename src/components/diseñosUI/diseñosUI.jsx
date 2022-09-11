import style from  "./diseñosUI.module.scss";
import { DiseñosData } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Diseños = () => {
  return (
    <div className={style.container} id="diseños">
      <h2>Diseños UI/UX</h2>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={style.swiper1}
      >
        {DiseñosData.map((Diseño) => (
          <SwiperSlide className={style.diseñosTop} key={Diseño.id}>
            <img src={Diseño.img} alt={Diseño.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Diseños;
