import { createStore, createLogger } from 'vuex'

// 
export default createStore({
    modules: {
        cart,
        products
    },
    plugins: [createLogger()]
})