import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 text-center text-xl font-bold shadow-md">
      <nav className="flex justify-between items-center px-6">
        <div className="text-2xl font-bold"></div>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/About" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="/profile" className="hover:underline">Portfolio</a></li>
          <li><a href="contact" className="hover:underline">Contact</a></li>
          <li><a href="/Login" className="hover:underline">Login</a></li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

