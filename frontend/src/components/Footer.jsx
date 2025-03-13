import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-gray-900 text-white text-center py-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Us Section */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold">About Us</h3>
            <p className="mt-4 text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className="mt-2 text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <Link
              to="/single"
              className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
            >
              Read More
            </Link>
          </div>

          {/* Get In Touch Section */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <p className="mt-4 text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} All Rights Reserved. Design by{" "}
            <a href="http://w3layouts.com/" className="text-blue-400 hover:underline">
            </a>
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
