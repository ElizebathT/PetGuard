import { useFormik } from "formik";
import * as yup from "yup";

function Pet() {
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    address: yup.string().required("Address is required"),
    petPreference: yup.string().required("Please select a pet preference"),
    experience: yup.string().required("Experience is required"),
    reasonForAdoption: yup.string().required("Reason for adoption is required"),
    image: yup.mixed().required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      petPreference: "",
      experience: "",
      reasonForAdoption: "",
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Adoption Application Submitted", values);
    },
  });

  return (
    <div className="max-w-lg mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">🐾 Adopter Application Form 🐾</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-sm">{formik.errors.phone}</p>}

        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {formik.touched.address && formik.errors.address && <p className="text-red-500 text-sm">{formik.errors.address}</p>}

        <select
          name="petPreference"
          value={formik.values.petPreference}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Pet Preference</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Other">Other</option>
        </select>
        {formik.touched.petPreference && formik.errors.petPreference && (
          <p className="text-red-500 text-sm">{formik.errors.petPreference}</p>
        )}

        <textarea
          name="experience"
          placeholder="Describe your experience with pets"
          value={formik.values.experience}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {formik.touched.experience && formik.errors.experience && <p className="text-red-500 text-sm">{formik.errors.experience}</p>}

        <textarea
          name="reasonForAdoption"
          placeholder="Why do you want to adopt a pet?"
          value={formik.values.reasonForAdoption}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {formik.touched.reasonForAdoption && formik.errors.reasonForAdoption && (
          <p className="text-red-500 text-sm">{formik.errors.reasonForAdoption}</p>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200"
        />
        {formik.errors.image && <p className="text-red-500 text-sm">{formik.errors.image}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default Pet;
