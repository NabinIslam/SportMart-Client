import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;