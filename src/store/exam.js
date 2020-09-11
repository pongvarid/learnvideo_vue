import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify";
import axios from '@/plugins/axios'
import {show} from '@/plugins/response'
const state = {
   
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
 
    

    async videos(context,params){ 
        let request = await axios.get(`/api/video/`)
        .then((r) => {
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         return request;
    },
    async video(context,id){
        let request = await axios.get(`/api/video/${id}/`)
        .then((r) => {
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         return request;
    },
    async storeHistory(context, form){
        let request = await axios.post(`/api/scorehistory/`,form)
        .then((r) => {
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         return request;
    },
    async getExercise(context, id){
        let request = await axios.get(`/api/exercise/?video=${id}`)
        .then((r) => {
            return show(true,r)
        }).catch((e) => { 
            return show(false,e)
         });
         return request;
    },
     async getExerciseId(context, id){
            let request = await axios.get(`/api/exercise/${id}/`)
            .then((r) => {
                return r.data;
            }).catch((e) => { 
                return e.response.data;
             });
             return request;
      
    },
    async getAsk(context, id){
        let request = await axios.get(`/api/askanswer/?exercise=${id}`)
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