import React from "react";
import * as S from "./style";
import MenuItem from "../MenuItem";
import { Icon } from "../../Icon";

interface MenuSubProps {
  list: Array<{
    id: number;
    name: string;
    children?: any;
    level: number;
    childListId?: number;
  }>;
  childListId?: number;
  changeCurrentList: (event: React.MouseEvent<HTMLElement>) => void;
  activeListId: number;
  prevListId: number;
  parentId?: number;
  parentName?: string;
}

const MenuSub: React.FC<MenuSubProps> = ({
  list,
  childListId = 0,
  changeCurrentList,
  activeListId,
  prevListId,
  parentId = null,
  parentName,
}) => {
  return (
    <>
      <S.MenuSub
        active={activeListId == childListId}
        prev={childListId == prevListId}
        data-id={childListId}
      >
        {parentId != null && (
          <S.MenuSubPrev onClick={changeCurrentList} data-parent-id={parentId}>
            <Icon name="arrow" />
            {parentName}
          </S.MenuSubPrev>
        )}

        {list.map((item) => {
          return (
            <MenuItem
              key={item.id}
              item={item}
              id={item["children"] ? item.id : 0}
              changeCurrentList={changeCurrentList}
              activeListId={activeListId}
              parentId={childListId}
              prevListId={prevListId}
            />
          );
        })}
      </S.MenuSub>
    </>
  );
};

export default MenuSub;
