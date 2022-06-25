import React, { useEffect, useState } from "react";
import * as S from "./style";
import api from "api";
import Spinner from "components/Spinner";
import Icon from "components/Icon";

const Dashboard = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);

  useEffect(() => {
    getProductsCount();
    getCategoriesCount();
    getOrdersCount();
  }, []);

  async function getProductsCount() {
    let response = await api.products.getProductsCount();
    setProductsCount(response.data);
  }

  async function getCategoriesCount() {
    let response = await api.categories.getCategoriesCount();
    setCategoriesCount(response.data);
  }

  async function getOrdersCount() {
    let response = await api.orders.getOrdersCount();
    setOrdersCount(response.data);
  }

  return true ? (
    <S.Dashboard>
      <S.Totals>
        <S.Total>
          <S.TotalInner>
            <S.TotalIcon>
              <Icon name="heart" />
            </S.TotalIcon>
            <S.TotalInf>
              <S.TotalInfName>Total orders</S.TotalInfName>
              <S.TotalInfValue>{ordersCount}</S.TotalInfValue>
            </S.TotalInf>
          </S.TotalInner>
        </S.Total>

        <S.Total>
          <S.TotalInner>
            <S.TotalIcon>
              <Icon name="basket" />
            </S.TotalIcon>
            <S.TotalInf>
              <S.TotalInfName>Total products</S.TotalInfName>
              <S.TotalInfValue>{productsCount}</S.TotalInfValue>
            </S.TotalInf>
          </S.TotalInner>
        </S.Total>

        <S.Total>
          <S.TotalInner>
            <S.TotalIcon>
              <Icon name="support" />
            </S.TotalIcon>
            <S.TotalInf>
              <S.TotalInfName>Total categories</S.TotalInfName>
              <S.TotalInfValue>{categoriesCount}</S.TotalInfValue>
            </S.TotalInf>
          </S.TotalInner>
        </S.Total>
      </S.Totals>
    </S.Dashboard>
  ) : (
    <Spinner />
  );
};

export default Dashboard;
