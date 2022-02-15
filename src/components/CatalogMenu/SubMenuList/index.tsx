import React, { useEffect, useState } from "react";

import * as S from "./style";
import { Link } from "react-router-dom";

interface CatalogMenuChildrenProps {
  list: Array<{ id: number; name: string; children?: any }>;
  focusedItemId: number;
}

const SubMenuList: React.FC<CatalogMenuChildrenProps> = ({
  list,
  focusedItemId,
}) => {
  const [activeCategoryList, setActiveCategoryList] = useState([]);

  useEffect(() => {
    let activeCategory = list.filter((item) => item.id == focusedItemId)[0];
    setActiveCategoryList(activeCategory["children"]);
  }, [focusedItemId]);

  return (
    <S.SubMenuList>
      {activeCategoryList.map((category) => {
        return (
          <div key={category.id}>
            <Link to="#s">{category.name}</Link>

            {category["children"] && (
              <S.SubList>
                {category["children"].map((child: any) => {
                  return (
                    <li key={child.id}>
                      <Link to="#">{child.name}</Link>
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