// shop?
// 大型项目 index.js 入口
// 每个模块的接口一个文件

// vuex 读|写   不能随便修改，遵守流程
// A B 竞争关系  _products   中央的vuex  不统一?
// -》action(api)  -> mutations(回溯， 记账一样)
// 设计模式，难理解， 复杂  被pinia 取代
// 私有，只在本模块
const _products = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default {
    // 阅读后端接口文档，actions 要调用的方法
    getProducts(cb) {
        // 模拟了ajax请求后端 要花时间
        // callback await getProduct
        // return promise  
        setTimeout(() => cb(_products), 100)
    },
    buyProducts(_products, cb, errorCb) {
        setTimeout(() => {
            // 抛硬币
            (Math.random() > 0.5) ? cb() : errorCb();
        }, 100)
    }
}