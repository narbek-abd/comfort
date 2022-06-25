import React from "react";
import * as S from "./style";
import { useSearchParams } from "react-router-dom";
import getSearchParams from "utils/getSearchParams";

interface PaginationProps {
  children?: React.ReactNode;
  totalItem: number;
  perPage: number;
  rangeCount?: number;
}

const Pagination = ({
  totalItem,
  perPage,
  rangeCount = 7,
  children,
}: PaginationProps) => {
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
    let params = getSearchParams();

    params["page"] = (e.target as HTMLElement).dataset.page;
    setSearchParams(params);
  }

  return (
    <S.Pagination>
      {currentPage - 1 !== 0 && (
        <S.Item>
          <button data-page={currentPage - 1} onClick={onPageChange}>
            prev
          </button>
        </S.Item>
      )}

      {pageOffsetIndex > 0 && (
        <S.Item>
          <button data-page={1} onClick={onPageChange}>
            1
          </button>
          <span>...</span>
        </S.Item>
      )}

      {pages.map((page) => {
        page += 1;
        let isActive = page === currentPage - pageOffsetIndex;
        page = page + pageOffsetIndex;

        return (
          <S.Item
            key={page}
            active={isActive}
            data-testid={isActive ? page : 0}
          >
            <button data-page={page} onClick={onPageChange}>
              {page}
            </button>
          </S.Item>
        );
      })}

      {pageOffsetIndex + pageRangeCount < lastPage && (
        <S.Item>
          <span>...</span>
          <button data-page={lastPage} onClick={onPageChange}>
            {lastPage}
          </button>
        </S.Item>
      )}

      {currentPage * perPage < totalItem && (
        <S.Item>
          <button data-page={currentPage + 1} onClick={onPageChange}>
            next
          </button>
        </S.Item>
      )}
    </S.Pagination>
  );
};

export default Pagination;
