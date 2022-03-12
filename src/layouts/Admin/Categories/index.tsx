import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingButton from "../../../components/LoadingButton";
import Pagination from "../../../components/Pagination";
import * as S from "./style";
import * as G from "../../../globalStyle";
import { Link, useSearchParams } from "react-router-dom";

interface CategoriesProps {
  children?: React.ReactNode;
}

const Categories = ({ children }: CategoriesProps) => {
  const [data, setData] = useState<any>({});
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(
        "http://comfort.loc/api/categories/list?limit=3&page=" +
          searchParams.get("page")
      )
      .then(function (response) {
        setData(response.data);
      });
  }, [searchParams]);

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
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>Vend</td>
                <td>
                  <S.Actions>
                    <LoadingButton isLoading={false} size="small" color="red">
                      Delete
                    </LoadingButton>
                    <G.Button size="small" color="orange">
                      Edit
                    </G.Button>
                  </S.Actions>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {data.total && <Pagination totalItem={data.total} perPage={3} />}
    </S.Categories>
  );
};

export default Categories;
