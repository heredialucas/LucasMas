import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Carousel.scss";
import { Projects } from "../../data";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Projects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="carousel__item">
            <img src={project.img} alt={project.title} />
            <div className="carousel__item__title">{project.title}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
