import { TProduct } from '@/types';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { CgDetailsMore } from 'react-icons/cg';

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="border shadow p-4 rounded-lg flex flex-col justify-between gap-2">
      <div className="space-y-4">
        <div className="w-full h-[250px] mb-2">
          <img className="size-full rounded-xl" src={product.image} alt="" />
        </div>
        <Link to={`/products/${product.slug}`}>
          <h4 className="font-bold text-xl">{product.name}</h4>
        </Link>
      </div>
      <div className="space-y-4">
        <p className="line-clamp-2 text-sm">{product.description}</p>
        <h6 className='text-center font-bold text-primary text-xl'>${product.price}</h6>
        <div className="flex items-center justify-center">
          <Link to={`/products/${product.slug}`}>
            <Button className="bg-transparent border-primary border-2 text-primary hover:text-white">
              <CgDetailsMore className="text-2xl mr-2" />
              See Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
