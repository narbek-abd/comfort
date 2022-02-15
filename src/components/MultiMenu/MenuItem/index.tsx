import React from "react";
import * as S from "./style";
import MenuSub from "../MenuSub";

interface MenuItemProps {
  item: any;
  id: number;
  changeCurrentList: any;
  activeListId: number;
  prevListId: number;
  parentId: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  id,
  changeCurrentList,
  activeListId,
  parentId,
  prevListId,
}) => {
  return (
    <S.MenuItem data-list-id={id} onClick={changeCurrentList}>
      <span>{item.name}</span>

      {item["children"] && (
        <MenuSub
          list={item["children"]}
          childListId={item.id}
          changeCurrentList={changeCurrentList}
          activeListId={activeListId}
          parentId={parentId}
          parentName={item.name}
          prevListId={prevListId}
        />
      )}
    </S.MenuItem>
  );
};

export default MenuItem;
