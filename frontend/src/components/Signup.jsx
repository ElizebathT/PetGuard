import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { registerUserAPI } from "../Services/userservice";
import { registerUserAction } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  // Validation schema using Yup
  const validationSchema = yup.object({
    username: yup
      .string()
      .min(5, "Username must be at least 5 characters")
      .required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const [successMessage, setSuccessMessage] = useState(null);
 const {mutateAsync }=useMutation({
  mutationFn:registerUserAPI,
  mutationKey:["Userlogin"]})

  const dispatch = useDispatch();
  // Initializing useFormik hook
  const { values, errors, touched, getFieldProps, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        role:"individual"
      },
      validationSchema,
      onSubmit: async (values, action) => {
        try {
          const data = await mutateAsync(values);
          if (data?.token) {
            localStorage.setItem('userToken', data.token);
            dispatch(registerUserAction(data.token));
            setSuccessMessage('Signup Successful!');
            action.resetForm();
          } else {
            setSuccessMessage('Invalid response from server');
          }
        } catch (error) {
          console.error('Signup Error:', error);
        }
      },
    });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        
        {/* Form with useFormik */}
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              {...getFieldProps("username")}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && touched.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              {...getFieldProps("email")}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              {...getFieldProps("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/login">
            <button className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
