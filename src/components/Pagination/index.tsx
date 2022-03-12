import React from "react";
import * as G from "../../globalStyle";
import * as S from "./style";
import { Link, useSearchParams, useLocation } from "react-router-dom";

interface PaginationProps {
  children?: React.ReactNode;
  totalItem: number;
  perPage: number;
}

const Pagination = ({ totalItem, perPage, children }: PaginationProps) => {
  const linkQuantity = Array.from(Array(Math.ceil(totalItem / perPage)).keys());
  console.log(linkQuantity);
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +searchParams.get("page") ?? 1;

  return (
    <S.Pagination>
      {currentPage - 1 !== 0 && (
        <S.Item>
          <Link to={location.pathname + "?page=" + (currentPage - 1)}>
            prev
          </Link>
        </S.Item>
      )}

      {linkQuantity.map((linkN) => {
        return (
          <S.Item key={linkN} active={linkN + 1 === currentPage}>
            <Link to={location.pathname + "?page=" + (linkN + 1)}>
              {linkN + 1}
            </Link>
          </S.Item>
        );
      })}

      {currentPage * perPage < totalItem && (
        <S.Item>
          <Link to={location.pathname + "?page=" + (currentPage + 1)}>
            next
          </Link>
        </S.Item>
      )}
    </S.Pagination>
  );
};

export default Pagination;
