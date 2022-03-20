import React, { useState, useEffect } from "react";
import { CategoryTypes } from "../../types/CategoryTypes";

interface SelectNestedProps {
  list: CategoryTypes[];
  name: string;
  desc?: string;
  onSelected: (selectedItem: CategoryTypes) => void;
  keyForReRender?: number;
}

const SelectNested = ({
  list,
  name,
  desc = "Select item",
  onSelected,
  keyForReRender = 0,
}: SelectNestedProps) => {
  const [selectList, setSelectList] = useState([]);

  useEffect(() => {
    setSelectList([{ level: 1, list: list }]);
  }, [list, keyForReRender]);

  function handleSelectChange(e: React.ChangeEvent) {
    let selectedItemId = +(e.target as HTMLInputElement).value;
    let selectLevel = +(e.target as HTMLInputElement).closest("select").dataset
      .level;

    let selectedItem = findItemById(selectedItemId, list);
    if (selectedItem === undefined) return;

    let listId = Math.max(...selectList.map((item) => item.level), 0);

    // Если есть select ниже выбранного select, то удаляем его (оставляя только текущий select)
    let filteredSelectList = selectList.filter(
      (list) => list.level <= selectLevel
    );

    // Если нет childen, вызываем колбэк
    let hasChildren = selectedItem.children.length > 0;
    if (!hasChildren) {
      onSelected(selectedItem);
      setSelectList([...filteredSelectList]);
      return;
    }

    setSelectList([
      ...filteredSelectList,
      { level: ++listId, list: selectedItem.children },
    ]);
  }

  // рекурсивно находим элемент по вложенному списку
  function findItemById(id: number, list: CategoryTypes[]): CategoryTypes {
    for (let item of list) {
      if (item.id === id) {
        return item;
      } else {
        let res = findItemById(id, item.children);
        if (res) {
          return res;
        }
      }
    }
  }

  return (
    selectList.length > 0 && (
      <>
        {selectList.map((list) => {
          return (
            <select
              key={list.level}
              name={name}
              onChange={handleSelectChange}
              data-level={list.level}
              defaultValue=""
            >
              <option value="" disabled>
                {desc}
              </option>
              {list.list.map((item: CategoryTypes) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          );
        })}
      </>
    )
  );
};

export default SelectNested;
