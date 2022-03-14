import React from "react";
import * as S from "./style";
import * as G from "../../../../globalStyle";
import LoadingButton from "../../../../components/LoadingButton";
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  children?: React.ReactNode;
  category: any
}

const CategoryItem = ({ category, children }: CategoryItemProps) => {
  return (
    <S.CategoryItem>
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td>Vend</td>
      <td>
        <S.Actions>
          <LoadingButton isLoading={false} size="small" color="red">
            Delete
          </LoadingButton>
          <G.Button size="small" color="orange">
          <Link to={`edit/${category.id}`}>Edit</Link>
          </G.Button>
        </S.Actions>
      </td>
    </S.CategoryItem>
  );
};

export default CategoryItem;
