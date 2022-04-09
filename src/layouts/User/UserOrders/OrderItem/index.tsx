import React, { useState } from "react";
import Button from "../../../../components/Button";
import { Link } from "react-router-dom";
import { deleteOrder } from "../../../../api/Order";
import { OrderTypes } from "../../../../types/OrderTypes";

interface OrderItemProps {
	order: OrderTypes;
	onDelete: () => void;
}

const OrderItem = ({ order, onDelete }: OrderItemProps) => {
	const [isLoading, setIsLoading] = useState(false);

	function removeOrder() {
		setIsLoading(true);
		deleteOrder(order.id).then((response) => onDelete());
	}
	return (
		<tr>
			<td>{order.id}</td>
			<td>{order.name}</td>
			<td>{order.email}</td>
			<td>{order.address}</td>
			<td>
				{order.products.map((product) => {
					return (
						<Link key={product.id} to={`/product${product.id}`}>
							{product.name},{" "}
						</Link>
					);
				})}
			</td>
			<td>
				<Button
					isLoading={isLoading}
					size="small"
					color="danger"
					onClick={removeOrder}
				>
					Cancel order
				</Button>
			</td>
		</tr>
	);
};

export default OrderItem;
