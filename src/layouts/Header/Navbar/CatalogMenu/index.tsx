import React, { useState } from "react";
import * as S from "./style";
import CatalogMenuItem from "./CatalogMenuItem";
import CatalogMenuChildren from "./CatalogMenuChildren";
import { Icon } from "../../../../components/Icon";

interface CatalogMenuProps {
  list: Array<{ id: number; name: string; children?: any }>;
}

const CatalogMenu: React.FC<CatalogMenuProps> = ({ list }) => {

  const [activeItem, setActiveItem] = useState(1);

   function changeActiveItem(e: any) {
    setActiveItem(e.currentTarget.dataset.categoryId)
  }

  return (
    <S.CatalogMenu>
      <S.Toggler>
        Catalog <Icon name="arrow" />
      </S.Toggler>

      <S.Inner>
        <S.CatalogMenuList>
          {list.map((item) => {
            return <CatalogMenuItem item={item} key={item["id"]} changeActiveItem={changeActiveItem} />;
          })}
        </S.CatalogMenuList>

        <S.CatalogMenuChildren>
          <CatalogMenuChildren list={list} activeCategoryId={activeItem} />
        </S.CatalogMenuChildren>
      </S.Inner>
    </S.CatalogMenu>
  );
};

export default CatalogMenu;
