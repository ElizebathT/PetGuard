import React from "react";

const Adoption = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">AdoptMe</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="/pet" className="text-gray-700 hover:text-blue-600">Adopt</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
          <li><a href="/medical" className="text-gray-700 hover:text-blue-600">MedicalRecord</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Find Your New Best Friend</h1>
        <p className="mt-2 text-lg">Adopt a pet and give them a loving home.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Browse Pets
        </button>
      </section>
    
    </div>
  );
};

export default Adoption;
