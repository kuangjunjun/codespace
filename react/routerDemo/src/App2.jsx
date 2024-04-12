import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './views/Home'
import Layout from './views/Layout'
import Articles from './views/layout-views/Articles';
import Publish from './views/layout-views/Publish';


const App2 = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>

                    {/* 二级路由 */}
                    <Route path='/layout' element={<Layout />}>
                        <Route path='' element={<Navigate to='/layout/article'/>}></Route>
                        <Route path='/layout/article' element={<Articles />}></Route>
                        <Route path='publish' element={<Publish />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App2;