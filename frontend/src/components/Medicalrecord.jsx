import React, { useState } from 'react';

const Medicalrecord = () => {
  // State to store form data and errors
  const [formData, setFormData] = useState({
    petName: '',
    petAge: '',
    petSpecies: '',
    petBreed: '',
    vaccinations: '',
    allergies: '',
    medicalHistory: '',
    contactInfo: '',
  });

  const [errors, setErrors] = useState({
    petName: '',
    petAge: '',
    petSpecies: '',
    petBreed: '',
    vaccinations: '',
    allergies: '',
    medicalHistory: '',
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
        petName: '',
        petAge: '',
        petSpecies: '',
        petBreed: '',
        vaccinations: '',
        allergies: '',
        medicalHistory: '',
        contactInfo: '',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Pet Medical Record Form</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Pet Name */}
        <div className="flex flex-col">
          <label htmlFor="petName" className="font-medium">Pet Name</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
          {errors.petName && <div className="text-red-500 text-sm mt-1">{errors.petName}</div>}
        </div>

        {/* Pet Age */}
        <div className="flex flex-col">
          <label htmlFor="petAge" className="font-medium">Pet Age</label>
          <input
            type="number"
            id="petAge"
            name="petAge"
            value={formData.petAge}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
          {errors.petAge && <div className="text-red-500 text-sm mt-1">{errors.petAge}</div>}
        </div>

        {/* Pet Species */}
        <div className="flex flex-col">
          <label htmlFor="petSpecies" className="font-medium">Species</label>
          <input
            type="text"
            id="petSpecies"
            name="petSpecies"
            value={formData.petSpecies}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
          {errors.petSpecies && <div className="text-red-500 text-sm mt-1">{errors.petSpecies}</div>}
        </div>

        {/* Pet Breed */}
        <div className="flex flex-col">
          <label htmlFor="petBreed" className="font-medium">Breed</label>
          <input
            type="text"
            id="petBreed"
            name="petBreed"
            value={formData.petBreed}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
          {errors.petBreed && <div className="text-red-500 text-sm mt-1">{errors.petBreed}</div>}
        </div>

        {/* Vaccination Status */}
        <div className="flex flex-col">
          <label className="font-medium">Vaccination Status</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="vaccinations"
                value="yes"
                onChange={handleChange}
                checked={formData.vaccinations === 'yes'}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="vaccinations"
                value="no"
                onChange={handleChange}
                checked={formData.vaccinations === 'no'}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.vaccinations && <div className="text-red-500 text-sm mt-1">{errors.vaccinations}</div>}
        </div>

        {/* Allergies */}
        <div className="flex flex-col">
          <label htmlFor="allergies" className="font-medium">Allergies</label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
          {errors.allergies && <div className="text-red-500 text-sm mt-1">{errors.allergies}</div>}
        </div>

        {/* Medical History */}
        <div className="flex flex-col">
          <label htmlFor="medicalHistory" className="font-medium">Medical History</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 rounded"
            rows="4"
          />
          {errors.medicalHistory && <div className="text-red-500 text-sm mt-1">{errors.medicalHistory}</div>}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <label htmlFor="contactInfo" className="font-medium">Owner's Contact Info</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
          {errors.contactInfo && <div className="text-red-500 text-sm mt-1">{errors.contactInfo}</div>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Medicalrecord;
