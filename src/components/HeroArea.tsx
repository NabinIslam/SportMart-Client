import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import DiscountHeroSlide from './DiscountHeroSlide';
import MainHeroSlide from './MainHeroSlide';
import Autoplay from 'embla-carousel-autoplay';

const HeroArea = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="min-h-[90vh] pl-0">
          <DiscountHeroSlide />
        </CarouselItem>
        <CarouselItem className="min-h-[90vh] pl-0">
          <MainHeroSlide />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default HeroArea;
