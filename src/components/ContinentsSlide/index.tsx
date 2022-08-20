import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

import { Slider } from './Slider';
import { SlideButton } from './SlideButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ContinentsSlide() {
  return (
    <Swiper
      style={{ height: '450px', width: '1240px', position: 'relative' }}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      <SlideButton
        aria-label='Next slide'
        icon={<FcNext />}
        action='next'
        top='50%'
        right='10'
      />
      <SlideButton
        aria-label='Previous slide'
        icon={<FcPrevious />}
        action='prev'
        top='50%'
        left='10'
      />
      <SwiperSlide>
        <Slider title="América do Sul" description='A maior quantidade de vulcões em todo o mundo' imagePath='america-sul.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <Slider title="América do Norte" description='A maior quantidade de lagos de água doce do planeta.' imagePath='america-norte.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <Slider title="Europa" description='O continente mais antigo.' imagePath='europa.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <Slider title="Ásia" description='O pico mais alto do planeta.' imagePath='asia.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <Slider title="África" description='Onde tudo começou.' imagePath='africa.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <Slider title="Oceania" description='O menor continente.' imagePath='oceania.jpg' />
      </SwiperSlide>
    </Swiper>
  );
}