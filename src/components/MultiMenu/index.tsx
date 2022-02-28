import React, { useState, useRef, useEffect } from "react";

import * as S from "./style";
import MenuItem from "./MenuItem";
import MenuSub from "./MenuSub";

interface MultiMenuProps {
  list: Array<{
    id: number;
    name: string;
    children?: any;
    level: number;
    childListId?: number;
  }>;
}

const MultiMenu = ({ list }: MultiMenuProps) => {
  let uniqueId = 1;

  // function giveChildListUniqueId(list: any) {
  //   list.forEach((item: any) => {
  //     if (item["children"]) {
  //       item.childListId = uniqueId;
  //       uniqueId++;

  //       giveChildListUniqueId(item["children"]);
  //     }
  //   });
  // }

  // giveChildListUniqueId(list);

  const listContainer = useRef(null);
  const [activeListId, setActiveListId] = useState(0);
  const [prevListId, setPrevListId] = useState(-1);

  useEffect(() => {
    let childLists = listContainer.current.querySelectorAll("li ul");

    childLists.forEach((childList: any) => {
      listContainer.current.append(childList);
    });
  }, []);

  function changeCurrentList(e: React.MouseEvent) {
    let item = (e.target as HTMLElement).closest("li");
    let childListId = +item.dataset.listId;
    let parentListId = +item.dataset.parentId;

    if (parentListId) {
      // prevList текщуго prevList
      let prevListOfPrev = prevListId == 0 ? -1 : listContainer.current
          .querySelector(`li[data-list-id="${prevListId}"]`)
          .closest("ul").dataset.id;

      setPrevListId(prevListOfPrev);
      setActiveListId(parentListId);
      return;
    }

    if (childListId != 0) {
      setPrevListId(activeListId);
      setActiveListId(childListId);
    }
  }

  return (
    <S.MultiMenu ref={listContainer}>
      <MenuSub
        list={list}
        changeCurrentList={changeCurrentList}
        activeListId={activeListId}
        prevListId={prevListId}
      />
    </S.MultiMenu>
  );
};

export default MultiMenu;
