import React from "react";
import { SContainer, SectionTitle } from "../../globalStyle";

import { STabsProducts, SInner, Stabs, StabsItem, SProducts } from "./style";
import ProductCard from "../../components/ProductCard";
import TabsItem from "./TabsItem";

const TabsProducts = () => {
  function filter(id) {
    console.log(id);
  }

  return (
    <STabsProducts>
      <SectionTitle>Leatest Products</SectionTitle>
      <SContainer>
        <SInner>
          <Stabs>
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
          </Stabs>

          <SProducts>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </SProducts>
        </SInner>
      </SContainer>
    </STabsProducts>
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
