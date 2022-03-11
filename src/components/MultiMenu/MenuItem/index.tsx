import React from "react";
import * as S from "./style";
import { CategoryTypes } from "../../../types/CategoryTypes";
import MenuSub from "../MenuSub";
import { Link } from "react-router-dom";
import { Icon } from "../../Icon";

interface MenuItemProps {
  item: CategoryTypes;
  id: number;
  changeCurrentList: (e: React.MouseEvent<HTMLElement>) => void;
  activeListId: number;
  prevListId: number;
  parentId: number;
}

const MenuItem = ({
  item,
  id,
  changeCurrentList,
  activeListId,
  parentId,
  prevListId,
}: MenuItemProps) => {
  return (
    <S.MenuItem data-list-id={id} onClick={changeCurrentList}>
      {item["children"] && item["children"].length > 0 ? (
        <>
          <span>{item.name}</span>
          <Icon name="arrow" />
        </>
      ) : (
        <Link to={"/"}>{item.name}</Link>
      )}

      {item["children"] && item["children"].length > 0 && (
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
