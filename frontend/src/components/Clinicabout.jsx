import React from 'react'

export default function Clinicabout() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Our Pet Clinic</h1>
          <p className="text-gray-600 text-lg mb-4">
            Welcome to Paws & Care Pet Clinic, where we provide exceptional care for your beloved pets.
            Our dedicated team of veterinarians and staff are committed to ensuring the health and happiness
            of your furry friends.
          </p>
          <p className="text-gray-600 text-lg">
            We offer a wide range of services, from regular check-ups and vaccinations to advanced treatments.
            Your pet's well-being is our top priority!
          </p>
        </div>
      </div>
    );
  }
  