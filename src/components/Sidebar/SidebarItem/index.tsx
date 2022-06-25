import React, { useRef } from "react";
import * as S from "./style";
import Icon from "components/Icon";
import { Link } from "react-router-dom";
import { SidebarItemType } from "../../Sidebar";
import slideToggle from "utils/SlideUpDown";

interface SidebarItemProps {
  item: SidebarItemType;
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  const dropdownListRef = useRef(null);

  function toggleDropdown() {
    slideToggle(dropdownListRef.current, 100);
  }

  return (
    <S.SidebarItem>
      {item.children ? (
        <>
          <S.Name onClick={toggleDropdown}>
            <span>{item.icon && <Icon name={item.icon} />} {item.name}</span>
          </S.Name>

          <S.SidebarSub ref={dropdownListRef}>
            {item["children"].map((item: SidebarItemType) => {
              return <SidebarItem key={item.id} item={item} />;
            })}
          </S.SidebarSub>
        </>
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
