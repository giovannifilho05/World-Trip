import { useSwiper } from 'swiper/react';
import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface SlideButtonBaseProps extends IconButtonProps {
  action: 'prev' | 'next';
}

const SlideButtonBase: ForwardRefRenderFunction<HTMLButtonElement, SlideButtonBaseProps> = ({ action, ...rest }, ref) => {
  const swiper = useSwiper()
  return (
    <IconButton
      ref={ref}
      position='absolute'
      variant='unstyled'
      fontSize={{ base: '2xl', lg: '5xl' }}
      zIndex='20'
      onClick={() => action === 'prev' ? swiper.slidePrev() : swiper.slideNext()}
      {...rest}
    />
  );
}

export const SlideButton = forwardRef(SlideButtonBase);