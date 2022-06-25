import React from "react";
import * as S from "./style";
import { CategoryTypes } from "types/CategoryTypes";
import Icon from "components/Icon";
import { Link } from "react-router-dom";

interface MenuItemProps {
  item: CategoryTypes;
  changeCurrentList: (e: React.MouseEvent<HTMLElement>) => void;
  activeListId: number;
  prevListId: number;
  parentId: number;
}

const MenuItem = ({
  item,
  changeCurrentList,
  activeListId,
  prevListId,
  parentId = 0,
}: MenuItemProps) => {
  let hasChildren = item["children"] && item["children"].length > 0;

  return (
    <S.MenuItem data-list-id={item.id}>
      {hasChildren ? (
        <S.MenuToggler onClick={changeCurrentList}>
          <span>{item.name}</span>
          <Icon name="arrow" />
        </S.MenuToggler>
      ) : (
        <Link to={"/"}>{item.name}</Link>
      )}

      {hasChildren && (
        <S.MenuSub
          isActive={activeListId == item.id}
          isPrev={item.id == prevListId}
          data-id={item.id}
        >
          <S.MenuSubPrev onClick={changeCurrentList} data-parent-id={parentId}>
            <Icon name="arrow" />
            {item.name}
          </S.MenuSubPrev>

          {item["children"].map((child) => {
            return (
              <MenuItem
                key={child.id}
                item={child}
                changeCurrentList={changeCurrentList}
                activeListId={activeListId}
                prevListId={prevListId}
                parentId={item.id}
              />
            );
          })}
        </S.MenuSub>
      )}
    </S.MenuItem>
  );
};

export default MenuItem;
