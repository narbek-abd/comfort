import React, { useState } from "react";
import * as S from "./style";

import { useSearchParams } from "react-router-dom";
import getSearchParams from "../../../utils/getSearchParams";

import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";

const ProductsSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentSortBy, setCurrentSortBy] = useState("New");
  const sortByOptions = ["New", "Price: Low to High", "Price: High to Low"];

  function sortProductsBy(e: React.MouseEvent) {
    let selectedOption = (e.currentTarget as HTMLElement).innerHTML;

    if (sortByOptions.find((option) => option === selectedOption)) {
      setCurrentSortBy(selectedOption);

      let params = getSearchParams();

      params["sortBy"] = selectedOption;

      setSearchParams(params);
    }
  }

  return (
    <S.Sort>
      <S.SortLeft>
        <p>Ecommerce Acceories & Fashion item</p>
        <span>About 9,620 results (0.62 seconds)</span>
      </S.SortLeft>

      <S.SortRight>
        <div>
          <p>Sort By:</p>

          <Dropdown title={currentSortBy}>
            {sortByOptions.map((soryOption) => {
              return (
                soryOption !== currentSortBy && (
                  <li key={soryOption} onClick={sortProductsBy}>
                    {soryOption}
                  </li>
                )
              );
            })}
          </Dropdown>
        </div>
        <div>
          <p>View</p>
          <Icon name="grid-view" />
          <Icon name="list-view" />
        </div>
      </S.SortRight>
    </S.Sort>
  );
};

export default ProductsSort;
