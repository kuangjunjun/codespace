import { BrowserRouter, useRoutes } from 'react-router-dom'
import Login from '../pages/login'
import React from 'react'
const LayoutWrap = React.lazy(() => import('../pages/layout'))

const routerList = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/layout',
        element: <LayoutWrap />
    }
]

function Element() {
    return useRoutes(routerList)  // <Route path="/" element={<Home />}
}

function WrapperRoutes() {

    return (
        <BrowserRouter>
            <Element />
        </BrowserRouter>
    )
}


export default WrapperRoutes