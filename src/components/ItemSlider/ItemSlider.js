import Item from "../Item/Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const ItemSlider = ({ items }) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      freeMode={true}
      modules={[Autoplay, FreeMode]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      className="mySwiper"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <Item p={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ItemSlider;
