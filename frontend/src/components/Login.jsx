import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "../Services/userservice";
import { loginUserAction } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  // Validation schema
  const validationSchema = yup.object({
    username: yup.string().min(3, "Minimum 3 characters").required("Username is required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  });
  const [successMessage, setSuccessMessage] = useState(null);
  
  const { mutateAsync, isError, error, isSuccess } = useMutation({
    mutationFn:loginAPI,
    mutationKey:["login-user"]
})
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, action) => {
      try {              
        
          const token = await mutateAsync(values);     
        if (token) {
            localStorage.setItem("userToken", token);
            const decodedData = jwtDecode(token);
            dispatch(loginUserAction(decodedData));
            setSuccessMessage("Login Successful!");
            action.resetForm();
        } else {
            setSuccessMessage("Invalid response from server");
        }
    } catch (error) {
        console.error("Login Error:", error);
    }
}
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              {...formik.getFieldProps("username")}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
             {...formik.getFieldProps("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/Signup">
            <button className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
