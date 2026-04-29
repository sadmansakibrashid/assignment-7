
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Suspense } from 'react';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense
        fallback={
          <div className="flex justify-center items-center h-[60vh]">
            <span className="loading loading-spinner loading-lg text-green-600"></span>
          </div>
        }
      >
        <Outlet />
      </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;