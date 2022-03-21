import React, { useState } from "react";
import * as S from "./style";
import * as G from "../../../../globalStyle";
import LoadingButton from "../../../../components/LoadingButton";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../../api/Product";
import { ProductTypes } from "../../../../types/ProductTypes";

interface ProductItemProps {
  children?: React.ReactNode;
  product: ProductTypes;
  onDelete: () => void;
}
const ProductItem = ({ product, children, onDelete }: ProductItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  function removeProduct() {
    setIsLoading(true);
    deleteProduct(product.id).then((response) => onDelete());
  }

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category.name}</td>
      <td>
        <S.Actions>
          <LoadingButton
            isLoading={isLoading}
            size="small"
            color="red"
            onClick={removeProduct}
          >
            Delete
          </LoadingButton>
          <Link to={`edit/${product.id}`}>
            <G.Button size="small" color="orange">
              Edit
            </G.Button>
          </Link>
        </S.Actions>
      </td>
    </tr>
  );
};

export default ProductItem;
