import React from "react";
import * as S from "./style";
import MenuSub from '../MenuSub';

interface MenuItemProps {
  item: any;
  id: number;
  callb: any;
  activeListId: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, id, callb, activeListId }) => {
  return (
    <S.MenuItem data-list-id={ id } onClick={callb}>
      <span>{item.name}</span>

      {item['children'] && 
      <MenuSub list={item['children']} childListId={ item.childListId } callb={callb} activeListId={activeListId} />
    }
    </S.MenuItem>
  );
};

export default MenuItem;
