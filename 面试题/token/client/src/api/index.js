import axios from "axios";
import router from "../router"

// axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.baseURL = 'http://localhost:3000';


// 请求拦截
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

// 响应拦截
axios.interceptors.response.use(
    (res) => {
        if (res.data.code && res.data.code !== 0) {  // 逻辑性错误
            return Promise.reject(res.data.error)
        }

        if (res.data.status >= 400 && res.data.status < 500) {  // 程序性错误
            router.push('/login')
            return Promise.reject(res.data)
        }

        return res  // 响应的内容没有问题
    }
)

export function post(url, body) {
    return axios.post(url, body)
}