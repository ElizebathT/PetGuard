import axios from "axios";
import { BASE_URL } from "../utiles/url";

export const  loginAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/users/login`,data)
    return response.data
 }

 export const registerUserAPI=async(data)=>{
    const response=await axios.post(`${BASE_URL}/users/register`,data)   
    
    return response.data
}