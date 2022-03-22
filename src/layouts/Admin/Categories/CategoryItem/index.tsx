import React, { useState } from "react";
import * as S from "./style";
import * as G from "../../../../globalStyle";
import { ButtonDanger, ButtonWarning } from "../../../../components/Button";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../../../api/Category";
import { CategoryTypes } from "../../../../types/CategoryTypes";

interface CategoryItemProps {
  children?: React.ReactNode;
  category: CategoryTypes;
  onDelete: () => void;
}

const CategoryItem = ({ category, children, onDelete }: CategoryItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  function removeCategory() {
    setIsLoading(true);
    deleteCategory(category.id).then((response) => onDelete());
  }
  return (
    <tr>
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td>Vend</td>
      <td>
        <S.Actions>
          <ButtonDanger
            isLoading={isLoading}
            size="small"
            onClick={removeCategory}
          >
            Delete
          </ButtonDanger>
          <ButtonWarning size="small">
            <Link to={`edit/${category.id}`}>Edit</Link>
          </ButtonWarning>
        </S.Actions>
      </td>
    </tr>
  );
};

export default CategoryItem;
