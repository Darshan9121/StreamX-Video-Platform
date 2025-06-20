import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#231010]">
      <div className="flex flex-1 items-center justify-center w-full">
        <form className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 space-y-6 mx-auto">
          <h2 className="text-white text-2xl font-semibold text-center mb-6">Authentication Section</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded border border-red-900 bg-transparent text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded border border-red-900 bg-transparent text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className="flex items-center mt-2">
            <label className="text-white text-sm mr-2" htmlFor="remember">Remember me</label>
            <input
              id="remember"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-red-500 border-red-900 bg-transparent focus:ring-red-500"
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span></span>
            <a href="#" className="text-xs text-white hover:underline">Forgot password?</a>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium shadow transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <footer className="flex justify-center items-center mb-4 w-full">
        <span className="text-white text-sm flex items-center gap-1">
          <svg width="16" height="16" fill="currentColor" className="inline-block"><path d="M2 13l2-2 3 3 7-7-2-2-5 5-3-3-2 2z"/></svg>
          StreamX
        </span>
      </footer>
    </div>
  );
};

export default Login;
