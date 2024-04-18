// 判断token是否存在 ? 允许跳转 : 重定向去login

import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

// 高阶组件
function AuthRoute({ children }) {
    const isToken = getToken()

    if (isToken) {
        return <>{children}</>    
    } else {
        return <Navigate to='/login' replace />
    }

}

export { AuthRoute }