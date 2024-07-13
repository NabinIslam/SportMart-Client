import { Button } from '@/components/ui/button';
import { addItemToCart } from '@/redux/features/cart/cartSlice';
import { useGetASingleProductBySlugQuery } from '@/redux/features/product/productApi';
import { useAppDispatch } from '@/redux/hooks';
import { FaOpencart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { slug } = useParams();

  const { data } = useGetASingleProductBySlugQuery(slug);
  const dispatch = useAppDispatch();

  const product = data?.data;

  console.log(data);

  return (
    <main className="py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-52">
          <div className="basis-full md:basis-1/2">
            <img className="w-full" src={product?.image} alt={product?.name} />
          </div>
          <div className="basis-full md:basis-1/2 space-y-6">
            <h4 className="font-bold text-2xl">{product?.name}</h4>
            <div className="space-x-2">
              <span className="bg-primary text-white px-4 py-2 rounded-full">
                Price:
                <span className="font-semibold"> ${product?.price}</span>
              </span>
              <span className="bg-primary text-white px-4 py-2 rounded-full">
                Category:
                <span className="font-semibold">
                  {' '}
                  {product?.category?.name}
                </span>
              </span>
              <span className="bg-primary text-white px-4 py-2 rounded-full">
                Brand:
                <span className="font-semibold"> {product?.brand?.name}</span>
              </span>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-lg">Description</h5>
              <p className="text-sm">{product?.description}</p>
            </div>
            <Button
              onClick={() => dispatch(addItemToCart({ product, quantity: 1 }))}
            >
              <FaOpencart className="text-2xl mr-2" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
