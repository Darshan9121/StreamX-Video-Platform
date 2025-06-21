import React from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you use React Router for navigation

const Navbar = ({ isAuthenticated = false, isAdmin = false }) => {
  const commonLinks = [{ name: 'Home', path: '/' }];
  const clientLinks = [
    ...commonLinks,
    { name: 'Browse', path: '/browse' },
    { name: 'My Videos', path: '/my-videos' },
    { name: 'Profile', path: '/profile' },
  ];
  const adminLinks = [
    ...commonLinks,
    { name: 'Content Review', path: '/admin/content-review' },
    { name: 'Users', path: '/admin/users' },
  ];

  const links = isAuthenticated ? (isAdmin ? adminLinks : clientLinks) : [];

  return (
    <nav className="bg-[#231010] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>StreamX</span>
            </NavLink>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-red-400 ${
                      isActive ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Search and Auth */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#3a2525] text-white rounded-full py-1.5 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 w-48"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Auth Buttons / Profile */}
            {isAuthenticated ? (
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
                {/* User Avatar - can be an img tag */}
                <span className="text-lg font-bold">{isAdmin ? 'A' : 'U'}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <NavLink
                  to="/register"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 