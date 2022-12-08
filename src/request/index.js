import axios from 'axios';

let service = axios.create({
   baseURL: 'https://netease-cloud-music-api-murex-seven-11.vercel.app',
   timeout: 5000
});


export default service;