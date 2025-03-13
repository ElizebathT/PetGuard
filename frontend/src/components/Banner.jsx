import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-blue-500 text-white text-center py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">Welcome to PAW GUARDIAN</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Your ultimate solution for keeping your pets safe and secure with smart tracking and monitoring.
        </p>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <img 
          src="public/dog.jpg" 
          alt="Happy pet with tracking collar" 
          className="rounded-lg shadow-lg w-1/3"
        />
        <img 
          src="public/cats.jpg" 
          alt="Pet playing in the park" 
          className="rounded-lg shadow-lg w-1/3"
        />
        <img 
          src="public/dogcat.jpg" 
          alt="Owner with pet enjoying outdoors" 
          className="rounded-lg shadow-lg w-1/3"
        />
      </div>
    </section>
  );
};

export default Banner;
