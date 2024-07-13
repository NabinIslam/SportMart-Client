import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto py-10 border-t-2">
      <div className="container space-y-5">
        <img className="w-52 mx-auto" src="/logo.png" alt="SportMart Logo" />

        <ul className="flex items-center justify-center gap-5">
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
          <li>
            <Link
              className="font-semibold text-sm hover:text-primary duration-200"
              to="/manage-products"
            >
              Manage Products
            </Link>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-5 text-2xl">
          <FaFacebook className="hover:text-primary cursor-pointer duration-300" />
          <FaInstagram className="hover:text-primary cursor-pointer duration-300" />
          <FaTwitter className="hover:text-primary cursor-pointer duration-300" />
        </div>
      </div>
      <p className="text-white text-sm text-center">
        Copyright © 2024 SportMart
      </p>
    </footer>
  );
};

export default Footer;
