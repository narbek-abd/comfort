import React from "react";
import * as S from "./style";
import SidebarSub from "../SidebarSub";
import { Icon } from "../../Icon";
import { Link } from "react-router-dom";
import { SidebarItemType } from "../../../types/SidebarTypes";

interface SidebarItemProps {
  item: SidebarItemType;
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  return (
    <S.SidebarItem>
      {item.children ? (
        <SidebarSub item={item} />
      ) : (
        <S.Name>
          <Link to={item.link}>
            {item.icon && <Icon name={item.icon} />} {item.name}
          </Link>
        </S.Name>
      )}
    </S.SidebarItem>
  );
};

export default SidebarItem;
