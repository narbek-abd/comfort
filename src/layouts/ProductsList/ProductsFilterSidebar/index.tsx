import React from "react";

import * as G from "../../../globalStyle";
import * as S from "./style";

import { useSearchParams } from "react-router-dom";
import getSearchParams from "../../../utils/getSearchParams";

import { useForm, SubmitHandler } from "react-hook-form";
import { FilterSideBarFormTypes } from "../../../types/FilterSideBarFormTypes";
import Button from '../../../components/Button';

const ProductsFilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm<FilterSideBarFormTypes>();

  const onSubmit: SubmitHandler<FilterSideBarFormTypes> = (data) => {
    let filterParams = getSearchParams();

    for (let param in data) {
      delete filterParams[param];
      if (
        data[param as keyof typeof data] !== "" &&
        data[param as keyof typeof data] !== false
      ) {
        filterParams[param] = data[param as keyof typeof data];
      }
    }

    setSearchParams(filterParams);
  };

  return (
    <S.FilterSidebar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.FilterBlock>
          <S.FilterTitle>Price</S.FilterTitle>
          <S.FilterContent>
            <S.FilterRange>
              <div>
                <span>from</span>
                <input
                  type="text"
                  defaultValue={searchParams.get("price_from") ?? ""}
                  {...register("price_from")}
                />
              </div>
              <div>
                <span>to</span>
                <input
                  type="text"
                  defaultValue={searchParams.get("price_to") ?? ""}
                  {...register("price_to")}
                />
              </div>
            </S.FilterRange>
          </S.FilterContent>
        </S.FilterBlock>

        <S.FilterBlock>
          <S.FilterTitle>In your country</S.FilterTitle>
          <S.FilterContent>
            <S.FilterGroup>
              <G.Checkbox>
                <input
                  value="on"
                  id="in_stock"
                  type="checkbox"
                  defaultChecked={searchParams.get("in_stock") ? true : false}
                  {...register("in_stock")}
                />
                <label htmlFor="in_stock">in stock</label>
              </G.Checkbox>
            </S.FilterGroup>
            <S.FilterGroup>
              <G.Checkbox>
                <input
                  value="on"
                  id="out_of_stock"
                  defaultChecked={
                    searchParams.get("out_of_stock") ? true : false
                  }
                  type="checkbox"
                  {...register("out_of_stock")}
                />
                <label htmlFor="out_of_stock">out of stock</label>
              </G.Checkbox>
            </S.FilterGroup>
          </S.FilterContent>
        </S.FilterBlock>
        <Button size="small">Apply</Button>
      </form>
    </S.FilterSidebar>
  );
};

export default ProductsFilterSidebar;
