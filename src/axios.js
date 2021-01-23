/*
Setting Up Default Global Configuration for Axios!
[WE CAN CREATE AS MANY INSTANCES AS WE WANT]
 */

import axios from 'axios';

const axiosInstance = axios.create ( {
        baseURL: 'http://localhost:3000'
});

export default axiosInstance;