import { createStore, createLogger } from 'vuex'
import cart from './modules/products'
import products from './modules/products'
// 单一状态树
export default createStore({
    modules: {
        cart,
        products
    },
    plugins: [createLogger()]
})