import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProviderProps from "./providers/AuthProvider";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Order from "./pages/Order";

import "./App.css";

function App() {
  return (
    <AuthProviderProps>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/*" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/*" element={<Admin />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </AuthProviderProps>
  );
}

export default App;
