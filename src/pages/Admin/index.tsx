import React from "react";
import Sidebar from "../../components/Sidebar";
import * as S from "./style";
import CategoryCreate from "../../layouts/Admin/Categories/CategoryCreate";
import ProductCreate from "../../layouts/Admin/Products/ProductCreate";
import { Route, Routes } from "react-router-dom";

interface AdminProps {
  children?: React.ReactNode;
}

const Admin = ({ children }: AdminProps) => {
  return (
    <S.Admin>
      <S.Left>
        <Sidebar list={sidebarList} />
      </S.Left>

      <S.Right>
        <Routes>
          <Route path="categories/create" element={<CategoryCreate />} />
          <Route path="products/create" element={<ProductCreate />} />
        </Routes>
      </S.Right>
    </S.Admin>
  );
};

const sidebarList = [
  { id: 1, name: "dashboard", icon: "heart", link: "admin/dashboard" },
  {
    id: 2,
    name: "products",
    icon: "arrow",
    children: [
      { id: 3, name: "all products", link: "admin/products" },
      { id: 4, name: "new product", link: "/admin/products/create" },
    ],
  },
  {
    id: 5,
    name: "categories",
    icon: "arrow",
    children: [
      { id: 6, name: "all categories", link: "admin/categories" },
      { id: 7, name: "new category", link: "/admin/categories/create" },
    ],
  },
];

export default Admin;
