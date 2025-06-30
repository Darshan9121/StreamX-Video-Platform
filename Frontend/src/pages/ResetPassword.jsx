import React from 'react';
import Footer from '../components/Footer';

const ResetPassword = () => {
  return (
    <div className="min-h-screen  md:w-full flex flex-col justify-between bg-transparent ">
      <div className="flex flex-1 items-center justify-center ">
        <form className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 space-y-6 mx-auto flex justify-center items-center flex-col sm:px-4">
          <h2 className="text-white text-2xl font-semibold text-center mb-6">Password Reset Modal</h2>
          <input
            type="email"
            placeholder="Email"
            className=" w-full  px-4 py-3 rounded border border-red-900 bg-transparent text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium shadow transition-colors"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ResetPassword; 