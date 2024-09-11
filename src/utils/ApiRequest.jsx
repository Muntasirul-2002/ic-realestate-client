import axios from "axios";
export const axiosInstance = axios.create()
export const getConfig = async () =>{
    try {
        const response = await axios.get('/api.config.json')
        const baseEndPoint = response.data.baseendpoint

        axiosInstance.defaults.baseURL = baseEndPoint;
    } catch (error) {
        console.log("Error fetching app config:", error)
        throw error
    }
}