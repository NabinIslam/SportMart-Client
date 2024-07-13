import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa6';
import { FaBarsStaggered } from 'react-icons/fa6';
import Drawer from 'react-modern-drawer';
import { useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemAmount = useAppSelector(state => state.cart.items);

  return (
    <header className="py-3 shadow sticky top-0 z-50 bg-white">
      <nav className="container flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img
              className="w-[150px] md:w-52"
              src="/logo.png"
              alt="SportMart Logo"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-5">
            <li>
              <Link
                className="font-semibold text-sm hover:text-primary duration-200"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-sm hover:text-primary duration-200"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <FaOpencart className="relative text-2xl" />
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[9px] font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                {cartItemAmount.length}
              </div>
            </Link>

            <FaBarsStaggered
              className="text-[25px] hover:bg-primary hover:text-white cursor-pointer p-1 rounded-md duration-200"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="left"
        className="bla bla bla"
        size={300}
      >
        <div className="p-4 flex flex-col justify-between h-screen">
          <div>
            <img className="w-[200px]" src="/logo.png" alt="" />

            <ul className="flex flex-col items-start mt-10 gap-5">
              <li>
                <Link
                  className="font-semibold text-sm hover:text-primary duration-200"
                  to="/manage-products"
                  onClick={() => setIsOpen(false)}
                >
                  Manage Products
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-sm hover:text-primary duration-200"
                  to="/products"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-sm hover:text-primary duration-200"
                  to="/about-us"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5 text-2xl">
            <FaFacebook className="hover:text-primary cursor-pointer duration-300" />
            <FaInstagram className="hover:text-primary cursor-pointer duration-300" />
            <FaTwitter className="hover:text-primary cursor-pointer duration-300" />
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
