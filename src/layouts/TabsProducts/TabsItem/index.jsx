import React, { useState, useEffect, useRef } from "react";

import { StabsItem } from "./style";

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
    <StabsItem active={active} onClick={handleClick} ref={el} data-tabid={filterById}>
      {children}
    </StabsItem>
  );
};

export default TabsItem;
