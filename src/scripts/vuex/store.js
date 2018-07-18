


import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import getters from "./getter";
import actions from "./action";
import mutations from "./mutation"
const store = new Vuex.Store({
    state:state,
    getters,
    actions,
    mutations
})


export default store;