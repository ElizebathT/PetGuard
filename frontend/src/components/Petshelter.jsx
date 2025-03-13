import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Petshelter() {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    shelterName: Yup.string().required("Shelter Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    website: Yup.string().url("Invalid URL"),
    description: Yup.string().required("Description is required"),
    image: Yup.mixed().required("Shelter logo is required"),
  });

  return (
    <div className="max-w-lg mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">🏡 Shelter Registration Form 🏡</h2>
      
      <Formik
        initialValues={{
          shelterName: "",
          email: "",
          phone: "",
          address: "",
          website: "",
          description: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Shelter Registration Submitted", values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-5">
            {/* Shelter Name */}
            <Field 
              type="text" 
              name="shelterName" 
              placeholder="Shelter Name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <ErrorMessage name="shelterName" component="div" className="text-red-500 text-sm" />

            {/* Email */}
            <Field 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

            {/* Phone */}
            <Field 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

            {/* Address */}
            <Field 
              type="text" 
              name="address" 
              placeholder="Shelter Address" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />

            {/* Website */}
            <Field 
              type="url" 
              name="website" 
              placeholder="Website (Optional)" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <ErrorMessage name="website" component="div" className="text-red-500 text-sm" />

            {/* Description */}
            <Field 
              as="textarea" 
              name="description" 
              placeholder="Brief Description About Your Shelter" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />

            {/* Image Upload */}
            <div className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => setFieldValue("image", e.target.files[0])} 
                className="hidden"
              />
              <span className="text-gray-500">📷 Upload Shelter Logo</span>
            </div>
            <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Register Shelter
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Petshelter;
