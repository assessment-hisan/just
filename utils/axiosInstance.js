import axios from "axios"
// import {BASE_URL} from "./constants"

const axiosInstance = axios.create({
    baseURL: "http://localhost:6000",  // Update to match your API endpoint
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
        "Referrer-Policy": "strict-origin-when-cross-origin" // Add this header to ensure stricter referrer policy
    },
    withCredentials: true,  // Optional: include this if you need to send cookies with cross-origin requests
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default axiosInstance