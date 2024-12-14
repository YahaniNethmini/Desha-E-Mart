import { Outlet } from 'react-router-dom';
import '../../index.css';

function AuthLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen lg:flex-row">
      {/* Left Section - Hidden on small screens */}
      <div
        className="items-center justify-center w-full px-6 md:flex md:w-1/2 lg:px-12"
        style={{ backgroundColor: '#301848' }}
      >
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Welcome to Desha E-Mart
          </h1>
        </div>
      </div>

      {/* Right Section - Always visible */}
      <div className="flex items-center justify-center flex-1 px-4 py-8 bg-background sm:px-8 lg:px-16">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
