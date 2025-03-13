import React from 'react'

const Clinicfooter = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold">Paws & Care Pet Clinic</h2>
          <p className="text-sm mt-2">Caring for your furry friends with love and expertise.</p>
          
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
          
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Paws & Care Pet Clinic. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
 
  
export default Clinicfooter