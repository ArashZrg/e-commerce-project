import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { setIsAdmin } from '../stores/adminStore'
import { useNavigate } from "react-router-dom";
const applyInterceptors = (axiosClient: AxiosInstance) => {
    axiosClient.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosClient.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            const status = error.response?.status;
            const navigate = useNavigate()
            if (status === 401) {
                console.log('مجاز نیستید');
                axiosClient.post('/users/logout')
                navigate('/login')
                setIsAdmin(false)
            } else if (status === 403) {
                axiosClient.post('/users/logout')
                navigate('/login')
                setIsAdmin(false)
            } else if (status === 500) {
                axiosClient.post('/users/logout')
                navigate('/login')
                setIsAdmin(false)
            }

            return Promise.reject(error);
        }
    );
}

export default applyInterceptors;
