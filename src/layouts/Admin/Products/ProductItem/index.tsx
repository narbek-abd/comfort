import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../../api/Product";
import { ProductTypes } from "../../../../types/ProductTypes";
import { ButtonDanger, ButtonWarning } from "../../../../components/Button";

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
          <ButtonDanger
            isLoading={isLoading}
            size="small"
            onClick={removeProduct}
          >
            Delete
          </ButtonDanger>
          <ButtonWarning size="small">
            <Link to={`edit/${product.id}`}>Edit</Link>
          </ButtonWarning>
        </S.Actions>
      </td>
    </tr>
  );
};

export default ProductItem;
