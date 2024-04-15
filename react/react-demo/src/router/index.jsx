import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom'
import Login from '../pages/login'
import React from 'react'
import { Children } from 'react'

const LayoutWrap = React.lazy(() => import('../pages/layout'))
const Students = React.lazy(() => import('../pages/students'))
const Persional = React.lazy(() => import('../pages/persional'))
const Employment = React.lazy(() => import('../pages/employment'))

const routerList = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/layout',
        element: <LayoutWrap />,
        children: [
            {
                path: '',
                element: <Navigate to='/layout/students' />
            },
            {
                path: 'students',
                element: <Students />
            },
            {
                path: 'persional',
                element: <Persional />
            },
            {
                path: 'employment',
                element: <Employment />
            }
        ]
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