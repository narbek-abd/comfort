import React, { useEffect, useState } from "react";
import * as S from "./style";
import MenuItem from "./MenuItem";
import SubMenuList from "./SubMenuList";
import { CategoryTypes } from "types/CategoryTypes";

interface CatalogMenuProps {
  list: CategoryTypes[];
  activeItemId?: number;
}

const CatalogMenu = ({ list, activeItemId = 1 }: CatalogMenuProps) => {
  const [focusedItemId, setFocusedItemId] = useState(null);

  useEffect(() => {
    changeFocusedItem(activeItemId);
  }, [activeItemId, list]);

  function changeFocusedItem(id: number) {
    setFocusedItemId(id);
  }

  return (
    <S.CatalogMenu onClick={(e) => e.stopPropagation()}>
      <S.MenuList>
        {list.map((item) => {
          return (
            <MenuItem
              item={item}
              key={item.id}
              focusedItemId={focusedItemId}
              changeFocusedItem={changeFocusedItem}
            />
          );
        })}
      </S.MenuList>

      {focusedItemId && (
        <SubMenuList list={list} focusedItemId={focusedItemId} />
      )}
    </S.CatalogMenu>
  );
};

export default CatalogMenu;
