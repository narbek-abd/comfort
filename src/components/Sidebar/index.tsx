import React from "react";
import * as S from "./style";
import SidebarItem from "./SidebarItem";
import { SidebarItemType } from "../../types/SidebarTypes";

interface SidebarProps {
  list: SidebarItemType[];
}

const Sidebar = ({ list }: SidebarProps) => {
  return (
    <S.Sidebar>
      <ul>
        {list.map((item: SidebarItemType) => {
          return <SidebarItem key={item.id} item={item} />;
        })}
      </ul>
    </S.Sidebar>
  );
};

export default Sidebar;
