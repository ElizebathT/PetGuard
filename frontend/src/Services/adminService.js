import axios from'axios'
import { BASE_URL } from "../utils/urls"
axios.defaults.withCredentials = true
import { getToken } from "../utils/storageHandler";

export const viewAllAnimalsAPI=async()=>{   
    const userToken=getToken()  
    const response=await axios.get(`${BASE_URL}/admin/animals`, {
        headers:{
            Authorization: `Bearer ${userToken}`
        }
    })
    return response.data
}
