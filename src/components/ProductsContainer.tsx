import { TProduct } from '@/types';
import ProductCard from './ProductCard';

const ProductsContainer = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((product: TProduct) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
