import style from  "./Casas.module.scss";
import {useState} from "react";
import { CasasData } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Casas = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={style.container} id="proyectos">
      <h2>Proyectos</h2>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={style.swiper1}
      >
        {CasasData.map((Casa) => (
          <SwiperSlide className={style.casasTop} key={Casa.id}>
            <img src={Casa.img} alt={Casa.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={style.swiper2}
      >
        {CasasData.map((Casa) => (
          <SwiperSlide className={style.casasBot} key={Casa.id}>
            <img src={Casa.img} alt={Casa.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Casas;
