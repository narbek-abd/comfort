import React, { useEffect, useState } from "react";

import * as S from "./style";

interface CatalogMenuChildrenProps {
  list: Array<{ id: number; name: string; children?: any }>;
  activeCategoryId: number;
}

const CatalogMenuChildren: React.FC<CatalogMenuChildrenProps> = ({
  list,
  activeCategoryId,
}) => {
  const [activeCategoryList, setActiveCategoryList] = useState([]);

  useEffect(() => {
    let activeCategory = list.filter((item) => item.id == activeCategoryId)[0];
    setActiveCategoryList(activeCategory["children"]);
  }, [activeCategoryId]);

  return (
    <S.CatalogMenuChildren>
      {activeCategoryList.map((category) => {
        return (
          <div key={category.id}>
            <span>{category.name}</span>

            {category["children"] && (
              <ul>
                {category["children"].map((child: any) => {
                  return <li key={child.id}>{child.name}</li>;
                })}
              </ul>
            )}
          </div>
        );
      })}
    </S.CatalogMenuChildren>
  );
};

export default CatalogMenuChildren;
