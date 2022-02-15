import React from "react";
import * as S from "./style";
import MenuSub from "../MenuSub";
import { Link } from "react-router-dom";
import { Icon } from "../../Icon";

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
      {item["children"] ? (
        <>
          <span>{item.name}</span>
          <Icon name="arrow" />
        </>
      ) : (
        <Link to={"/"}>{item.name}</Link>
      )}

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
