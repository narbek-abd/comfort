import React, { useEffect, useState } from "react";

import * as S from "./style";
import * as G from "../../../globalStyle";

import Pagination from "../../../components/Pagination";

import { useSearchParams } from "react-router-dom";
import { OrderTypes } from "../../../types/OrderTypes";
import axiosClient from "../../../api/axiosClient";

import OrderItem from "./OrderItem";
import Alert from "../../../components/Alert";
import Spinner from "../../../components/Spinner";
import useIsMounted from "../../../hooks/useIsMounted";
import api from "../../../api";

const UserOrders = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [alertMessage, setAlertMessage] = useState("");
	const isMounted = useIsMounted();

	const [orders, setOrders] = useState<OrderTypes[]>([]);

	const [searchParams] = useSearchParams();
	const currentPage = +(searchParams.get("page") ?? 1);

	const perPage = 6;
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		getOrders();
	}, [searchParams, isMounted]);

	async function getOrders() {
		let response = await api.orders.getOrders(
			`?limit=${perPage}&page=${currentPage}`
		);

		if (!isMounted()) return;

		setIsLoading(false);

		if (response.data.data.length === 0) {
			setAlertMessage("List is empty");
		}
		setOrders(response.data.data);
		setTotalItems(response.data.total);
	}

	return (
		<S.Orders>
			<G.Container>
				{orders.length > 0 && (
					<S.OrdersList>
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
								{orders.map((order) => {
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
					</S.OrdersList>
				)}

				{totalItems !==0 && (
					<Pagination totalItem={totalItems} perPage={perPage} />
				)}

				{isLoading && <Spinner />}
				{alertMessage && (
					<Alert variant="warning">{alertMessage}</Alert>
				)}
			</G.Container>
		</S.Orders>
	);
};

export default UserOrders;
