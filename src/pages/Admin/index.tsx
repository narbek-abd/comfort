import React from "react";
import Sidebar from "../../components/Sidebar";
import * as S from "./style";
import Categories from "../../layouts/Admin/Categories";
import CategoryCreate from "../../layouts/Admin/Categories/CategoryCreate";
import CategoryEdit from "../../layouts/Admin/Categories/CategoryEdit";

import Products from "../../layouts/Admin/Products";
import ProductCreate from "../../layouts/Admin/Products/ProductCreate";
import ProductEdit from "../../layouts/Admin/Products/ProductEdit";
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
          <Route path="categories" element={<Categories />} />
          <Route path="categories/create" element={<CategoryCreate />} />
          <Route path="categories/edit/:categoryid" element={<CategoryEdit />} />

          <Route path="products" element={<Products />} />
          <Route path="products/create" element={<ProductCreate />} />
          <Route path="products/edit/:productid" element={<ProductEdit />} />
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
      { id: 3, name: "all products", link: "products" },
      { id: 4, name: "new product", link: "/admin/products/create" },
    ],
  },
  {
    id: 5,
    name: "categories",
    icon: "arrow",
    children: [
      { id: 6, name: "all categories", link: "/admin/categories" },
      { id: 7, name: "new category", link: "/admin/categories/create" },
    ],
  },
];

export default Admin;
