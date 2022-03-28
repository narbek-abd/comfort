import React, { useRef } from "react";
import * as S from "./style";
import SidebarItem from "../SidebarItem";
import slideToggle from "../../../utils/SlideUpDown";
import Icon from "../../Icon";
import { SidebarItemType } from "../../../types/SidebarTypes";

interface SidebarSubProps {
  item: SidebarItemType;
}

const SidebarSub = ({ item }: SidebarSubProps) => {
  const dropdownListRef = useRef(null);

  function toggleDropdown() {
    slideToggle(dropdownListRef.current, 100);
  }

  return (
    <>
      <S.Name onClick={toggleDropdown}>
        {item.icon && <Icon name={item.icon} />}
        <span>{item.name}</span>
      </S.Name>

      <S.SidebarSub ref={dropdownListRef}>
        {item["children"].map((item: SidebarItemType) => {
          return <SidebarItem key={item.id} item={item} />;
        })}
      </S.SidebarSub>
    </>
  );
};

export default SidebarSub;
