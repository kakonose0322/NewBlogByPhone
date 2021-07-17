import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        LOADING: false,
        websiteInfo: [],
        meinInfo: {}
    },
    mutations: {
        showLoading(state) {
            state.LOADING = true
        },
        hideLoading(state) {
            state.LOADING = false
        },
        setWebSite(state,websiteInfo) {
            state.websiteInfo = websiteInfo
        },
        setMeinInfo(state,meinInfo) {
            state.meinInfo = meinInfo
        }
    }
})