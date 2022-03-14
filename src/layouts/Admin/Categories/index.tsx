import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from './CategoryItem'
import Pagination from "../../../components/Pagination";
import * as S from "./style";
import * as G from "../../../globalStyle";
import { Link, useSearchParams } from "react-router-dom";

interface CategoriesProps {
  children?: React.ReactNode;
}

const Categories = ({ children }: CategoriesProps) => {
  const [data, setData] = useState<any>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? 1);
  const perPage = 6;

  useEffect(() => {
    axios
      .get(`http://comfort.loc/api/categories/list?limit=${perPage}&page=` + currentPage)
      .then(function (response) {
        setData(response.data);
      });
  }, [searchParams]);

  function onChange(page: string) {
    setSearchParams({ page: page });
  }

  return (
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
          {data?.data?.map((category: any) => {
            return (
              <CategoryItem key={category.id} category={category} />
            );
          })}
        </tbody>
      </table>

      {data.total && (
        <Pagination onChange={onChange} totalItem={data.total} perPage={perPage} />
      )}
    </S.Categories>
  );
};

export default Categories;
