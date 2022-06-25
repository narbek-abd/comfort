import React from "react";
import * as S from "./style";
import { CategoryTypes } from "types/CategoryTypes";

interface CatalogMenuItemProps {
  item: CategoryTypes;
  changeFocusedItem: (id: number) => void;
  focusedItemId: number | null;
}

const MenuItem = ({
  item,
  changeFocusedItem,
  focusedItemId,
}: CatalogMenuItemProps) => {
  return (
    <S.MenuItem
      focused={focusedItemId === item.id}
      onMouseEnter={() => changeFocusedItem(item.id)}
    >
      {item.name}
    </S.MenuItem>
  );
};

export default MenuItem;
