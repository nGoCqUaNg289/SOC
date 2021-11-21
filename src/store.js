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
        totalFavorites: [],
        MainLink: "http://150.95.105.29:8800/api/"
    },
    getters: {},
    mutations: {

    },
    actions: {
        login() {

        }
    }
})