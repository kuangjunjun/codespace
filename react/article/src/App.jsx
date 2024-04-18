import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { AuthRoute } from '@/components/AuthRoute'  // 路由守卫组件

import Login from '@/pages/login';
import Layout from '@/pages/layout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='app'>
          <Routes>
            <Route path='/' element={<AuthRoute><Layout /></AuthRoute>} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;