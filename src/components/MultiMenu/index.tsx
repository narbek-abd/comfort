import React, { useState, useRef, useEffect } from "react";

import * as S from "./style";
import MenuItem from "./MenuItem";
import { CategoryTypes } from "../../types/CategoryTypes";

interface MultiMenuProps {
  list: CategoryTypes[];
}

const MultiMenu = ({ list }: MultiMenuProps) => {
  const listContainer = useRef(null);
  const [activeListId, setActiveListId] = useState(0);
  const [prevListId, setPrevListId] = useState(-1);

  useEffect(() => {
    let childLists = listContainer.current.querySelectorAll("li ul");

    childLists.forEach((childList: HTMLElement) => {
      listContainer.current.append(childList);
    });
  }, [list]);

  function changeCurrentList(e: React.MouseEvent) {
    let item = (e.target as HTMLElement).closest("li");
    let childListId = +item.dataset.listId;
    let parentListId = +item.dataset.parentId;

    if (Number.isInteger(parentListId)) {
      // prevList текщуго prevList
      let prevListOfPrev =
        parentListId == 0
          ? -1
          : listContainer.current
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
      <ul>
        {list.map((item) => {
          return (
            <MenuItem
              key={item.id}
              changeCurrentList={changeCurrentList}
              activeListId={activeListId}
              prevListId={prevListId}
              parentId={0}
              item={item}
            />
          );
        })}
      </ul>
    </S.MultiMenu>
  );
};

export default MultiMenu;
