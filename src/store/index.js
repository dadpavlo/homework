import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        post
    }

})