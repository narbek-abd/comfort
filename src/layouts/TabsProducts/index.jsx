import React from "react";
import * as G from "../../globalStyle";

import * as S from "./style";
import ProductCard from "../../components/ProductCard";
import TabsItem from "./TabsItem";

const TabsProducts = () => {
  function filter(id) {
    console.log(id);
  }

  return (
    <S.TabsProducts>
      <G.SectionTitle>Leatest Products</G.SectionTitle>
      
      <G.Container>
        <S.Inner>
          <S.tabs>
            {filterBy.map((filterBy) => {
              return (
                <TabsItem
                  filter={filter}
                  key={filterBy.id}
                  filterById={filterBy.id}
                >
                  {filterBy.name}
                </TabsItem>
              );
            })}
          </S.tabs>

          <S.Products>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </S.Products>
        </S.Inner>
      </G.Container>
    </S.TabsProducts>
  );
};

const filterBy = [
  {
    id: 1,
    name: "New",
  },

  {
    id: 2,
    name: "Best",
  },

  {
    id: 3,
    name: "Popularity",
  },
];

export default TabsProducts;
