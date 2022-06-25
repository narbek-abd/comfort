import React, { useEffect, useState } from "react";

import { CategoryTypes } from "types/CategoryTypes";
import * as S from "./style";
import { Link } from "react-router-dom";

interface CatalogMenuChildrenProps {
  list: CategoryTypes[];
  focusedItemId: number;
}

const SubMenuList = ({ list, focusedItemId }: CatalogMenuChildrenProps) => {
  const [activeCategoryList, setActiveCategoryList] = useState([]);

  useEffect(() => {
    let activeCategory = list.filter((item) => item.id === focusedItemId)[0];

    if (activeCategory !== undefined) {
      setActiveCategoryList(activeCategory["children"]);
    }
  }, [focusedItemId, list]);

  return (
    <S.SubMenuList>
      {activeCategoryList.map((category) => {
        return (
          <div key={category.id}>
            <Link to={"/catalog/" + category.slug}>{category.name}</Link>

            {category["children"] && (
              <S.SubList>
                {category["children"].map((child: CategoryTypes) => {
                  return (
                    <li key={child.id}>
                      <Link to={"/catalog/" + category.slug + "/" + child.slug}>{child.name}</Link>
                    </li>
                  );
                })}
              </S.SubList>
            )}
          </div>
        );
      })}
    </S.SubMenuList>
  );
};

export default SubMenuList;
