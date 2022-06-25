import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";
import Pagination from "components/Pagination";
import * as S from "./style";
import { useSearchParams } from "react-router-dom";
import { CategoryTypes } from "types/CategoryTypes";
import useIsMounted from "hooks/useIsMounted";
import api from "api";
import Spinner from "components/Spinner";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const isMounted = useIsMounted();

  const [searchParams] = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? 1);

  const perPage = 6;
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    getCategories();
  }, [searchParams]);

  async function getCategories() {
    let response = await api.categories.getCategories(
      `?limit=${perPage}&page=${currentPage}`
    );
    if (!isMounted()) return;

    setCategories(response.data.data);
    setTotalItems(response.data.total);
  }

  return categories.length > 0 ? (
    <S.Categories>
      <S.CategoriesList>
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
      </S.CategoriesList>

      {totalItems !==0 && <Pagination totalItem={totalItems} perPage={perPage} />}
    </S.Categories>
  ) : (
    <Spinner />
  );
};

export default Categories;
