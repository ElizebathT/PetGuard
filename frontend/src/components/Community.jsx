import React, { useState } from 'react';

const Community = () => {
  // State to store form data and errors
  const [formData, setFormData] = useState({
    communityName: '',
    location: '',
    description: '',
    contactInfo: '',
  });

  const [errors, setErrors] = useState({
    communityName: '',
    location: '',
    description: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', formData);
      // Reset form after submission
      setFormData({
        communityName: '',
        location: '',
        description: '',
        contactInfo: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center  flex justify-center items-center">
      <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-80 shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Create a New Pet Community</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Community Name */}
          <div className="flex flex-col">
            <label htmlFor="communityName" className="font-medium text-lg text-gray-700">Community Name</label>
            <input
              type="text"
              id="communityName"
              name="communityName"
              value={formData.communityName}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.communityName && <div className="text-red-500 text-sm mt-1">{errors.communityName}</div>}
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="font-medium text-lg text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.location && <div className="text-red-500 text-sm mt-1">{errors.location}</div>}
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="font-medium text-lg text-gray-700">Community Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <label htmlFor="contactInfo" className="font-medium text-lg text-gray-700">Contact Information</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contactInfo && <div className="text-red-500 text-sm mt-1">{errors.contactInfo}</div>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Community
          </button>
        </form>
      </div>
    </div>
  );
};

export default Community;
