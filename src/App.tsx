import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import AuthProvider from "./providers/AuthProvider";
import CSRFProvider from "./providers/CSRFProvider";
import Preloader from './components/Preloader';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Admin = lazy(() => import("./pages/Admin"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Order = lazy(() => import("./pages/Order"));
const Orders = lazy(() => import("./pages/User/Orders"));
const Wishlist = lazy(() => import("./pages/User/Wishlist"));


function App() {
  CSRFProvider();
  AuthProvider();

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
        <Header />

        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/*" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />

            <Route path="/admin/*" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />

            <Route path="/user/orders" element={<Orders />} />
            <Route path="/user/wishlist" element={<Wishlist />} />
          </Routes>
        </main>

        <Footer />

        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
