import React, { useState } from "react";
import * as S from "./style";
import * as G from "../../../../globalStyle";
import LoadingButton from "../../../../components/LoadingButton";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../../../api/Category";
import { CategoryTypes } from '../../../../types/CategoryTypes';

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
          <LoadingButton isLoading={isLoading} size="small" color="red">
            <span onClick={removeCategory}>Delete</span>
          </LoadingButton>
          <G.Button size="small" color="orange">
            <Link to={`edit/${category.id}`}>Edit</Link>
          </G.Button>
        </S.Actions>
      </td>
    </tr>
  );
};

export default CategoryItem;
