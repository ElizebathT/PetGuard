import axios from "axios";
import { BASE_URL } from "../utiles/url";
import { getToken } from "../utiles/storageHandler";
const token = getToken()

export const  loginAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/users/login`,data)
    return response.data
 }

 export const registerUserAPI=async(data)=>{
    const response=await axios.post(`${BASE_URL}/users/register`,data)   
    
    return response.data
}

const userProfileAPI=async(data)=>{
    const response=await axios.post(`${BASE_URL}/users/profile`,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })       
    return response.data
}