import { Button } from './ui/button';
import { MdOutlineShoppingBag } from 'react-icons/md';
import discountImg from '@/assets/images/discount_img.png';

const DiscountHeroSlide = () => {
  return (
    <div className="min-h-[90vh] lg:px-40 flex flex-col lg:flex-row items-center justify-between text-primary border-2 border-primary border-dashed text-center">
      <div>
        <h1 className="font-extrabold text-[100px] lg:text-[300px] lg:mt-[-100px]">
          40%
        </h1>
        <p className="text-3xl mt-[-20px]">Off on your favorite sports item</p>
        <Button
          className="bg-transparent border-t-2 border-b-2 border-primary hover:bg-primary hover:text-white text-xl px-10 py-6 mt-10"
          variant="outline"
        >
          <MdOutlineShoppingBag className="mr-2 text-2xl" />
          Shop Now!
        </Button>
      </div>
      <div className="px-4 lg:px-0">
        <img src={discountImg} alt="" />
      </div>
    </div>
  );
};

export default DiscountHeroSlide;
