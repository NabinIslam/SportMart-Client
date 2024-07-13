import { Button } from '@/components/ui/button';
import {
  clearCart,
  removeItemFromCart,
  updateItemQuantity,
} from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { CiTrash } from 'react-icons/ci';

import { toast } from 'sonner';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';

const CartPage = () => {
  const { items, totalAmount } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  return (
    <main>
      <div className="container">
        <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                    Cart
                  </h2>
                  <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                    {items.length} Items
                  </h2>
                </div>

                {items.map(item => (
                  <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-10 py-6  border-b border-gray-200 group">
                    <div className="w-full md:max-w-[126px]">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="mx-auto"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div className="md:col-span-2">
                        <div className="flex flex-col max-[500px]:items-center gap-3">
                          <h6 className="font-semibold text-base leading-7 text-black">
                            {item.product.name}
                          </h6>
                          <h6 className="font-normal text-base leading-7 text-gray-500">
                            {item.product.category.name}
                          </h6>
                          <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-primary">
                            ${item.product.price}
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                        <div className="flex items-center h-full">
                          <button
                            className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300 cursor-pointer"
                            onClick={() =>
                              dispatch(
                                updateItemQuantity({
                                  id: item.product._id,
                                  quantity: item.quantity - 1,
                                })
                              )
                            }
                          >
                            <FiMinus />
                          </button>
                          <input
                            type="text"
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold  w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                            placeholder={item.quantity.toString()}
                          />
                          <button
                            className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300 cursor-pointer"
                            onClick={() =>
                              dispatch(
                                updateItemQuantity({
                                  id: item.product._id,
                                  quantity: item.quantity + 1,
                                })
                              )
                            }
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                        <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-primary">
                          ${(item.quantity * item.product.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      onClick={() =>
                        dispatch(removeItemFromCart({ id: item.product._id }))
                      }
                    >
                      <FaRegTrashAlt />
                    </Button>
                  </div>
                ))}

                <div className="flex items-center justify-end mt-8">
                  <Button
                    className=""
                    variant="destructive"
                    onClick={() => {
                      dispatch(clearCart());
                      toast.success(`Cart cleared successfully`);
                    }}
                  >
                    <CiTrash className="text-2xl" />
                    Clear Cart
                  </Button>
                </div>
              </div>
              <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                  Order Summary
                </h2>
                <div className="mt-8">
                  <div className="flex items-center justify-between pb-6">
                    <p className="font-normal text-lg leading-8 text-black">
                      3 Items
                    </p>
                    <p className="font-medium text-lg leading-8 text-black">
                      ${totalAmount.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="font-normal text-lg leading-8 text-black">
                      Vat
                    </p>
                    <p className="font-medium text-lg leading-8 text-black">
                      15%
                    </p>
                  </div>

                  <div className="flex items-center justify-between py-8">
                    <p className="font-medium text-xl leading-8 text-black">
                      Total
                    </p>
                    <p className="font-semibold text-xl leading-8 text-primary">
                      ${(totalAmount + totalAmount * 0.15).toFixed(2)}
                    </p>
                  </div>

                  <button className="w-full text-center bg-primary rounded-xl py-3 px-6 font-semibold text-lg text-white hover:text-primary transition-all duration-500 hover:bg-transparent border hover:border hover:border-primary">
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CartPage;