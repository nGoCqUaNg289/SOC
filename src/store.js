import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';


Vue.use(Vuex)



export default new Vuex.Store({

    state: {

        StoreCart: [],
        CompareCart: [],
        searchText: "",
        minWidth: "",
        tokenUser: "",
        totalCart: "",
        InfoPersonal: {},
        userName: "",
        allDataUser: "",
        StoreCartUser: {},
        test: [],
    },
    getters: {},
    mutations: {},
    actions: {
        login() {

        }
    }
})