import React, { useState, useRef, useEffect } from "react";

import * as S from "./style";
import MenuItem from "./MenuItem";
import MenuSub from "./MenuSub";

interface MultiMenuProps {
  list: Array<{ id: number; name: string; children?: any; level: number; childListId?: number }>;
}

const MultiMenu: React.FC<MultiMenuProps> = ({ list }) => {
  let uniqueId = 1;

  function giveChildListUniqueId(list: any) {
    list.forEach((item: any) => {
      if (item["children"]) {
        item.childListId = uniqueId;
        uniqueId++;

        giveChildListUniqueId(item["children"]);
      }
    });
  }

  giveChildListUniqueId(list);

  const listContainer = useRef(null);
  const [activeListId, setActiveListId] = useState(0);

  useEffect(() => {
    let childLists = listContainer.current.querySelectorAll("li ul");

    childLists.forEach((childList: any) => {
      listContainer.current.append(childList);
    });
  }, []);

  function callb(e: any) {
    let item = e.target.closest("li");
    let childListId = item.dataset.listId;

    if (childListId != 0) {
      setActiveListId(childListId);
    }
  }

  return (
    <S.MultiMenu ref={listContainer}>
      <MenuSub list={list} callb={callb} activeListId={activeListId} />
    </S.MultiMenu>
  );
};

export default MultiMenu;
