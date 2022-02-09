import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";

const TabsItem = ({ children, filterById, filter }) => {
  let [active, setActive] = useState(false);

  const el = useRef(null);

  function handleClick(e) {
    setActive(true);
    filter(e.target.dataset.tabid)
  }

  useEffect(() => {
    function toggleClick(e) {
      if(!e.target.dataset.tabid) return;

      if (e.target !== el.current) {
        setActive(false);
      }
    }

    document.addEventListener("click", toggleClick);

    return () => {
      document.removeEventListener("click", toggleClick);
    };
  }, []);

  return (
    <S.TabsItem active={active} onClick={handleClick} ref={el} data-tabid={filterById}>
      {children}
    </S.TabsItem>
  );
};

export default TabsItem;
