import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Lostandfound = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    petName: Yup.string().required("Pet Name is required"),
    petDescription: Yup.string().required("Pet Description is required"),
    locationFound: Yup.string().required("Location Found/Lost is required"),
    petStatus: Yup.string().oneOf(["lost", "found"], "Invalid status").required("Pet Status is required"),
    contactInfo: Yup.string().required("Contact Information is required"),
    dateReported: Yup.date().required("Date Reported is required"),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      petName: "",
      petDescription: "",
      locationFound: "",
      petStatus: "lost",
      contactInfo: "",
      dateReported: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted successfully:", values);
      resetForm(); // Reset the form after submission
    },
  });

  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-black bg-opacity-50 shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Lost and Found Pet Report
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Pet Name */}
          <div className="flex flex-col">
            <label htmlFor="petName" className="font-medium text-lg text-gray-700">
              Pet Name
            </label>
            <input
              type="text"
              id="petName"
              name="petName"
              {...formik.getFieldProps("petName")}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.petName && formik.errors.petName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.petName}</div>
            )}
          </div>

          {/* Pet Description */}
          <div className="flex flex-col">
            <label htmlFor="petDescription" className="font-medium text-lg text-gray-700">
              Pet Description
            </label>
            <textarea
              id="petDescription"
              name="petDescription"
              {...formik.getFieldProps("petDescription")}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            {formik.touched.petDescription && formik.errors.petDescription && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.petDescription}</div>
            )}
          </div>

          {/* Location Found */}
          <div className="flex flex-col">
            <label htmlFor="locationFound" className="font-medium text-lg text-gray-700">
              Location Found/Lost
            </label>
            <input
              type="text"
              id="locationFound"
              name="locationFound"
              {...formik.getFieldProps("locationFound")}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.locationFound && formik.errors.locationFound && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.locationFound}</div>
            )}
          </div>

          {/* Pet Status (Lost or Found) */}
          <div className="flex flex-col">
            <label className="font-medium text-lg text-gray-700">Pet Status</label>
            <div className="flex space-x-4">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="petStatus"
                  value="lost"
                  onChange={formik.handleChange}
                  checked={formik.values.petStatus === "lost"}
                  className="mr-2"
                />
                <span>Lost</span>
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="petStatus"
                  value="found"
                  onChange={formik.handleChange}
                  checked={formik.values.petStatus === "found"}
                  className="mr-2"
                />
                <span>Found</span>
              </label>
            </div>
            {formik.touched.petStatus && formik.errors.petStatus && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.petStatus}</div>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <label htmlFor="contactInfo" className="font-medium text-lg text-gray-700">
              Contact Information
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              {...formik.getFieldProps("contactInfo")}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.contactInfo && formik.errors.contactInfo && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.contactInfo}</div>
            )}
          </div>

          {/* Date Reported */}
          <div className="flex flex-col">
            <label htmlFor="dateReported" className="font-medium text-lg text-gray-700">
              Date Reported
            </label>
            <input
              type="date"
              id="dateReported"
              name="dateReported"
              {...formik.getFieldProps("dataReported")}
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.dateReported && formik.errors.dateReported && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.dateReported}</div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lostandfound;
