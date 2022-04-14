import React, { useEffect, useState } from "react";

import * as S from "./style";
import * as G from "../../../globalStyle";

import Pagination from "../../../components/Pagination";

import { useSearchParams } from "react-router-dom";
import { OrderTypes } from "../../../types/OrderTypes";
import axiosClient from "../../../api/axiosClient";

import OrderItem from "./OrderItem";
import Alert from "../../../components/Alert";

const UserOrders = () => {
	const [orders, setOrders] = useState<OrderTypes[]>([]);

	const [searchParams] = useSearchParams();
	const currentPage = +(searchParams.get("page") ?? 1);

	const perPage = 6;
	const [totalItems, setTotalItems] = useState(null);

	useEffect(() => {
		getOrders();
	}, [searchParams]);

	function getOrders() {
		axiosClient
			.get(
				`http://comfort.loc/api/orders?limit=${perPage}&page=` +
					currentPage
			)
			.then(function (response) {
				setOrders(response.data.data);
				setTotalItems(response.data.total);
			});
	}

	return (
		<S.Orders>
			<G.Container>
				{orders.length > 0 ? (
					<>
						<table>
							<thead>
								<tr>
									<th>Id</th>
									<th>Name</th>
									<th>Email</th>
									<th>Address</th>
									<th>Products</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order: any) => {
									return (
										<OrderItem
											key={order.id}
											order={order}
											onDelete={getOrders}
										/>
									);
								})}
							</tbody>
						</table>

						{totalItems && (
							<Pagination
								totalItem={totalItems}
								perPage={perPage}
							/>
						)}
					</>
				) : (
					<Alert variant="warning">List is empty</Alert>
				)}
			</G.Container>
		</S.Orders>
	);
};

export default UserOrders;
