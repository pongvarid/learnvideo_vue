"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const token =   (localStorage.getItem("token"))?{'Authorization': `Token ${localStorage.getItem("token")}` }:{};

let config = {
  headers: {
    common: {
        
    },
}, 
  baseURL: process.env.baseURL || process.env.apiUrl || "https://www.learnvideo.ga",
  timeout: 91000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);
 

export default _axios;
