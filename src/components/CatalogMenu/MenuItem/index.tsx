import React from "react";
import * as S from "./style";
import { CategoryTypes } from "../../../types/CategoryTypes";

interface CatalogMenuItemProps {
  item: CategoryTypes;
  changeFocusedItem: (e: React.MouseEvent) => void;
  focusedItemId: number | null;
}

const MenuItem = ({
  item,
  changeFocusedItem,
  focusedItemId,
}: CatalogMenuItemProps) => {
  return (
    <S.MenuItem
      focused={focusedItemId == item.id}
      onMouseEnter={changeFocusedItem}
      data-item-id={item.id}
    >
      {item.name}
    </S.MenuItem>
  );
};

export default MenuItem;
