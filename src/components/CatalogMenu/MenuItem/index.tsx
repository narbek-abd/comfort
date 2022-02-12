import React from "react";

import * as S from "./style";

interface CatalogMenuItemProps {
  item: { id: number; name: string; children?: any };
  changeFocusedItem: any;
  focusedItemId: number | null;
}

const MenuItem: React.FC<CatalogMenuItemProps> = ({
  item,
  changeFocusedItem,
  focusedItemId,
}) => {
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
