import axios from 'axios';
// import secureLocalStorage from 'react-secure-storage';

export const baseUrl = process.env.REACT_APP_BASE_URL

const axiosInstance = axios.create({
	baseURL: baseUrl,
});

// add token to the request
axiosInstance.interceptors.request.use(
	(config: any) => {
		// const accessToken:any = secureLocalStorage.getItem('authx.user');				
		// if (accessToken) {
		// 	config.headers["Authorization"] = JSON.parse(accessToken)?.token;
		// }
		return config;
	},
	(error:any) => {
		Promise.reject(error);
	}
);

export default axiosInstance;