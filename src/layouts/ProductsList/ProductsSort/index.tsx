import React, { useState } from "react";
import * as S from "./style";

import { useSearchParams } from "react-router-dom";
import getSearchParams from "../../../utils/getSearchParams";

import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";

interface ProductsSortProps {
  changeView: (selectedView: "vertical" | "horizontal") => void;
  isDeskTop: boolean;
  openFilterModal: () => void;
}
const ProductsSort = ({
  isDeskTop,
  changeView,
  openFilterModal,
}: ProductsSortProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentSortBy, setCurrentSortBy] = useState("New");
  const sortByOptions = [
    {
      id: 1,
      slug: "new",
      name: "New",
    },

    {
      id: 2,
      slug: "price_low_to_high",
      name: "Price: Low to High",
    },

    {
      id: 3,
      slug: "price_high_to_low",
      name: "Price: High to Low",
    },
  ];

  function sortProductsBy(e: React.MouseEvent) {
    let selectedOptionId = +(e.currentTarget as HTMLElement).dataset.id;
    let selectedOption = sortByOptions.find(
      (option) => option.id === selectedOptionId
    );

    if (selectedOption) {
      setCurrentSortBy(selectedOption.name);

      let params = getSearchParams();
      params["sort_by"] = selectedOption.slug;
      setSearchParams(params);
    }
  }

  function changeListView(e: React.MouseEvent) {
    changeView(
      (e.currentTarget as HTMLElement).dataset.view as "vertical" | "horizontal"
    );
  }

  function openModal(e: React.MouseEvent) {
    e.stopPropagation();
    openFilterModal();
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
            {sortByOptions.map((sortOption) => {
              return (
                sortOption.name !== currentSortBy && (
                  <li
                    key={sortOption.id}
                    onClick={sortProductsBy}
                    data-id={sortOption.id}
                  >
                    {sortOption.name}
                  </li>
                )
              );
            })}
          </Dropdown>
        </div>
        <div>
          <p>View:</p>
          <Icon
            name="grid-view"
            onClick={changeListView}
            data-view="vertical"
          />
          <Icon
            name="list-view"
            onClick={changeListView}
            data-view="horizontal"
          />
        </div>

        {!isDeskTop && (
          <div>
            <Icon name="filter" data-view="vertical" onClick={openModal} />
          </div>
        )}
      </S.SortRight>
    </S.Sort>
  );
};

export default ProductsSort;
