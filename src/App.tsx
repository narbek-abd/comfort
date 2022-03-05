import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

import Admin from './pages/Admin';
import CategoryCreate from './layouts/Admin/Categories/CategoryCreate';

import'./App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="admin" element={<Admin />} />
          <Route path="/admin/categories/create" element={<CategoryCreate />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
