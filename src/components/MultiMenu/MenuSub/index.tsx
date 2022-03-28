import React from "react";
import * as S from "./style";
import { CategoryTypes } from "../../../types/CategoryTypes";

import MenuItem from "../MenuItem";
import Icon from "../../Icon";

interface MenuSubProps {
  list: CategoryTypes[];
  childListId?: number;
  changeCurrentList: (event: React.MouseEvent<HTMLElement>) => void;
  activeListId: number;
  prevListId: number;
  parentId?: number;
  parentName?: string;
}

const MenuSub = ({
  list,
  childListId = 0,
  changeCurrentList,
  activeListId,
  prevListId,
  parentId = null,
  parentName,
}: MenuSubProps) => {
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
              id={item["children"] && item["children"].length > 0 ? item.id : 0}
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
