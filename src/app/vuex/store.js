import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
    collapsed: false
}
// 定义所需的 mutations
const mutations = {
    changeCollapsed(state){
        state.collapsed = !state.collapsed;
    }
}
const store = new Vuex.Store({
    state,
    mutations
})

export default store