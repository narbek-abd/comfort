import React from "react";
import * as S from "./style";
import MenuItem from "../MenuItem";

interface MenuSubProps {
  list: Array<{ id: number; name: string; children?: any; level: number; childListId?: number }>;
  childListId?: number;
  callb: any;
  activeListId: number;
}

const MenuSub: React.FC<MenuSubProps> = ({
  list,
  childListId = 0,
  callb,
  activeListId,
}) => {
  return (
    <>
      <S.MenuSub active={activeListId == childListId} data-id={childListId}>
        {list.map((item) => {
          return (
            <MenuItem
              key={item.id}
              item={item}
              id={item["children"] ? item.childListId : 0}
              callb={callb}
              activeListId={activeListId}
            />
          );
        })}
      </S.MenuSub>
    </>
  );
};

export default MenuSub;
