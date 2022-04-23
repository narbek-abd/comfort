import React, { useState } from "react";
import * as S from "./style";
import Button from "../../../../components/Button";
import { Link } from "react-router-dom";
import { CategoryTypes } from "../../../../types/CategoryTypes";
import api from "../../../../api";

interface CategoryItemProps {
  children?: React.ReactNode;
  category: CategoryTypes;
  onDelete: () => void;
}

const CategoryItem = ({ category, children, onDelete }: CategoryItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  async function removeCategory() {
    setIsLoading(true);
    await api.categories.deleteCategory(category.id);
    onDelete();
  }

  return (
    <tr>
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td>{category.parent?.name || "-"}</td>
      <td>
        <S.Actions>
          <Button
            isLoading={isLoading}
            size="small"
            color="danger"
            onClick={removeCategory}
          >
            Delete
          </Button>
          <Button size="small" color="warning">
            <Link to={`edit/${category.id}`}>Edit</Link>
          </Button>
        </S.Actions>
      </td>
    </tr>
  );
};

export default CategoryItem;
