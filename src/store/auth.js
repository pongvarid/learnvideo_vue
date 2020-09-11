import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify";
import axios from '@/plugins/axios'
import {show} from '@/plugins/response'
const state = {
    token: null,
    user: {}, 
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
 
    async register(context,form){
        let request = await axios.post(`/auth/reg/register/`,form)
        .then((r) => {
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         return request;
    },

    getUser: async function(context, params) {
   
        let user = await axios
          .get(`auth/user/`)
          .then((r) => {
            state.user = r.data;
            return r.data;
          })
          .catch(async (e) => { 
            
            return e.response.data;
          }); 
        return user;
      },

     async updatePassword(context, form){
        let request = await axios.post(`/auth/password/change/`,form)
        .then(async(r) => { 
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         return request;
      },
      updateUser: async function(context, params) {
   
        let user = await axios
          .put(`auth/user/`,state.user)
          .then((r) => {
            state.user = r.data;
            return r.data;
          })
          .catch(async (e) => { 
            
            return e.response.data;
          }); 
        return user;
      },

    async login(context,form){
        localStorage.removeItem("token");
        state.token = null;
        let request = await axios.post(`/auth/login/`,form)
        .then(async(r) => {
            await dispatch("auth/storeToken", r.data.key);
            return show(true,r)
        }).catch((e) => {  
            return show(false,e)
            
         });
         return request;
    },

    storeToken: async function(context, token) {
        localStorage.setItem("token", token);
        state.token = token;
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
      },

    async logout(context,form){
        let request = await axios.post(`/auth/logout/`)
        .then((r) => {
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         localStorage.removeItem("token");
         state.token = null;
       
         return request;
    },

    async about(context, token){ 
        let request = await axios.get(`/api/about/`)
        .then((r) => {
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         return request;
    },

    async getHistory(context, id){
        let request = await axios.get(`/api/scorehistory/?user=${id}`)
        .then((r) => {
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         return request;
    },
    

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};