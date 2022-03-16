import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";
import Pagination from "../../../components/Pagination";
import * as S from "./style";
import { useSearchParams } from "react-router-dom";
import { CategoryTypes } from "../../../types/CategoryTypes";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? 1);

  const perPage = 6;
  const [totalItems, setTotalItems] = useState(null);

  useEffect(() => {
    getCategories();
  }, [searchParams]);

  function getCategories() {
    axios
      .get(
        `http://comfort.loc/api/categories/list?limit=${perPage}&page=` +
          currentPage
      )
      .then(function (response) {
        setCategories(response.data.data);
        setTotalItems(response.data.total);
      });
  }

  function onChange(page: string) {
    setSearchParams({ page: page });
  }

  return (
    categories.length > 0 && (
      <S.Categories>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Parent category</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category: CategoryTypes) => {
              return (
                <CategoryItem
                  key={category.id}
                  category={category}
                  onDelete={getCategories}
                />
              );
            })}
          </tbody>
        </table>

        {totalItems && (
          <Pagination
            onChange={onChange}
            totalItem={totalItems}
            perPage={perPage}
          />
        )}
      </S.Categories>
    )
  );
};

export default Categories;
