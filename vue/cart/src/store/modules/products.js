import shop from '../../api/shop'
// 单纯的想数据
const state = {
    all: []
}
const getters = {

}
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit('setProducts', products)
        })
    }
}
// 规则 同步的操作  可变的
const mutations = {
    setProducts(state, products) {
        state.all = products
    }
}
// store.cart.state
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}