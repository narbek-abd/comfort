import React from "react";
import * as G from "../../globalStyle";
import * as S from "./style";
import { Link, useSearchParams, useLocation } from "react-router-dom";

interface PaginationProps {
  children?: React.ReactNode;
  totalItem: number;
  perPage: number;
  rangeCount?: number;
  onChange: (page: string) => void;
}

const Pagination = ({
  totalItem,
  perPage,
  rangeCount = 7,
  children,
  onChange,
}: PaginationProps) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? 1);

  const lastPage = Math.ceil(totalItem / perPage);
  const pageRangeCount = lastPage > rangeCount ? rangeCount : lastPage;
  const pages = Array.from(Array(pageRangeCount).keys());

  const pageRangeOffset = 3;

  let pageOffsetIndex = 0;

  if (currentPage + pageRangeOffset > pageRangeCount) {
    pageOffsetIndex = currentPage + pageRangeOffset - pageRangeCount;
  }

  if (currentPage + pageRangeOffset >= lastPage) {
    pageOffsetIndex = lastPage - pageRangeCount;
  }

  function onPageChange(e: React.MouseEvent) {
    e.preventDefault();
    onChange((e.target as HTMLElement).dataset.page);
  }

  return (
    <S.Pagination>
      {currentPage - 1 !== 0 && (
        <S.Item>
          <a data-page={currentPage - 1} onClick={onPageChange}>
            prev
          </a>
        </S.Item>
      )}

      {pageOffsetIndex > 0 && (
        <S.Item>
          <a data-page={1} onClick={onPageChange}>
            1
          </a>
          <span>...</span>
        </S.Item>
      )}

      {pages.map((page) => {
        page += 1;
        return (
          <S.Item key={page} active={page === currentPage - pageOffsetIndex}>
            <a data-page={page + pageOffsetIndex} onClick={onPageChange}>
              {page + pageOffsetIndex}
            </a>
          </S.Item>
        );
      })}

      {pageOffsetIndex + pageRangeCount < lastPage && (
        <S.Item>
          <span>...</span>
          <a data-page={lastPage} onClick={onPageChange}>
            {lastPage}
          </a>
        </S.Item>
      )}

      {currentPage * perPage < totalItem && (
        <S.Item>
          <a data-page={currentPage + 1} onClick={onPageChange}>
            next
          </a>
        </S.Item>
      )}
    </S.Pagination>
  );
};

export default Pagination;
