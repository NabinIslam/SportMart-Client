import { MdOutlineShoppingBag } from 'react-icons/md';
import { Button } from './ui/button';

const MainHeroSlide = () => {
  return (
    <div className="relative min-h-[90vh] bg-hero-bg bg-cover bg-no-repeat bg-center bg-blend-overlay">
      <div className="absolute bg-black bg-opacity-20 z-20 h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-white font-extrabold text-center text-[70px] lg:text-9xl">
          SportMart
        </h1>
        <p className="text-white mt-7 text-2xl lg:text-3xl">
          Play Hard, Shop Smart"
        </p>
        <Button
          className="bg-transparent border-t-2 border-b-2 border-white hover:border-primary hover:bg-primary text-white hover:text-white text-xl px-10 py-6 mt-10"
          variant="outline"
        >
          <MdOutlineShoppingBag className="mr-2 text-2xl" />
          Shop Now!
        </Button>
      </div>
    </div>
  );
};

export default MainHeroSlide;
