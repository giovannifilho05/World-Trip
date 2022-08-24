import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";


import { Slider } from './Slider';
import { SlideButton } from './SlideButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Continent {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export function ContinentsSlide() {
  return (
    <Box w='100%' maxW={1240} h='450px'>
      <Swiper
        style={{ height: '100%', width: '100%', position: 'relative' }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
      >
        <SlideButton
          aria-label='Next slide'
          icon={<FcNext />}
          action='next'
          top='50%'
          right={{ base: '1', lg: '10' }}
        />
        <SlideButton
          aria-label='Previous slide'
          icon={<FcPrevious />}
          action='prev'
          top='50%'
          left={{ base: '1', lg: '10' }}
        />


        <SwiperSlide>
          <Slider
            href='Continents/america-do-sul'
            title="América do Sul"
            description='A maior quantidade de vulcões em todo o mundo'
            imagePath='america-sul.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            href='Continents/america-norte'
            title="América do Norte"
            description='A maior quantidade de lagos de água doce do planeta.'
            imagePath='america-norte.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            href='Continents/europa'
            title="Europa"
            description='O continente mais antigo.'
            imagePath='europa.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            href='Continents/asia'
            title="Ásia"
            description='O pico mais alto do planeta.'
            imagePath='asia.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            href='Continents/africa'
            title="África"
            description='Onde tudo começou.'
            imagePath='africa.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            href='Continents/oceania'
            title="Oceania"
            description='O menor continente.' imagePath='oceania.jpg'
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}