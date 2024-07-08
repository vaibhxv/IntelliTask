import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-300 to-gray-600 p-10">
      <div className="w-full max-w-3xl px-4 md:px-0">
        <div className="mx-auto max-w-xl overflow-hidden rounded-lg bg-white py-12 px-6 md:px-12 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="mb-8 mx-auto max-w-[250px]">
            <img
              src="/assets/taskunity-logo.png"
              alt="TaskUnity Logo"
              className="w-full"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  );
  
}