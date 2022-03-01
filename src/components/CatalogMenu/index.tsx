import React, { useState, useEffect } from "react";
import * as S from "./style";
import MenuItem from "./MenuItem";
import SubMenuList from "./SubMenuList";
import { Icon } from "../Icon";

interface CatalogMenuProps {
  list: { id: number; name: string; children?: any }[];
  isVisible?: boolean;
  activeItemId?: number
}

const CatalogMenu = ({ list, isVisible = true, activeItemId = 1 }: CatalogMenuProps) => {
  const [focusedItemId, setFocusedItemId] = useState(activeItemId);

  function changeFocusedItem(e: React.MouseEvent) {
    setFocusedItemId(+(e.currentTarget as HTMLElement).dataset.itemId);
  }

  return (
    <S.CatalogMenu visible={isVisible} onClick={(e) => e.stopPropagation()}>
      <S.MenuList>
        {list.map((item) => {
          return (
            <MenuItem
              item={item}
              key={item["id"]}
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
