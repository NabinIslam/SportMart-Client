import { createBrowserRouter } from 'react-router-dom';
import Root from '@/Layouts/Root';
import CartPage from '@/pages/CartPage';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import SingleProduct from '@/pages/SingleProduct';
import Products from '@/pages/Products';
import AboutUs from '@/pages/AboutUs';
import ManageProducts from '@/pages/ManageProducts';
import Checkout from '@/pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:slug',
        element: <SingleProduct />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/manage-products',
        element: <ManageProducts />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
