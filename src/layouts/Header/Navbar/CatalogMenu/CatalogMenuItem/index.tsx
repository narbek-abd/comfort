import React from 'react';

import * as S from "./style";

interface CatalogMenuItemProps {
  item: { id: number, name: string, children?: any },
  changeActiveItem: any
}

const CatalogMenuItem: React.FC<CatalogMenuItemProps> = ({ item, changeActiveItem }) => {

  return (
    <S.CatalogMenuItem onMouseOver={changeActiveItem} data-category-id={ item.id }>
      { item.name }
    </S.CatalogMenuItem>
  );
};

export default CatalogMenuItem;