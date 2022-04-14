import React from "react";

import * as G from "../../../globalStyle";
import * as S from "./style";

import { useSearchParams } from "react-router-dom";
import getSearchParams from "../../../utils/getSearchParams";

import { useForm, SubmitHandler } from "react-hook-form";
import { FilterSideBarFormTypes } from "../../../types/FilterSideBarFormTypes";
import { CategoryTypes } from "../../../types/CategoryTypes";
import Button from "../../../components/Button";

interface ProductsFilterSidebarProps {
  categoryChildrens: CategoryTypes[];
}

const ProductsFilterSidebar = ({
  categoryChildrens,
}: ProductsFilterSidebarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm<FilterSideBarFormTypes>();

  const onSubmit: SubmitHandler<FilterSideBarFormTypes> = (data) => {
    let filterParams = getSearchParams();

    for (let param in data) {
      delete filterParams[param];
      if (data[param] !== "" && data[param] !== false) {
        if (Array.isArray(data[param])) {
          let filters;

          if (data[param].length !== 0) {
            filters = data[param].join("-");
            filterParams[param] = filters;
            continue;
          }
        }
        filterParams[param] = data[param];
      }
    }

    setSearchParams(filterParams);
  };

  return (
    <S.FilterSidebar>
      <form onSubmit={handleSubmit(onSubmit)}>
        {categoryChildrens.length > 0 && (
          <S.FilterBlock>
            <S.FilterTitle>Categories</S.FilterTitle>
            <S.FilterContent>
              {categoryChildrens.map((categoryChildren) => {
                return (
                  <G.Checkbox key={categoryChildren.id}>
                    <input
                      value={categoryChildren.id}
                      id={categoryChildren.slug}
                      type="checkbox"
                      {...register("categories")}
                    />
                    <label htmlFor={categoryChildren.slug}>
                      {categoryChildren.name}
                    </label>
                  </G.Checkbox>
                );
              })}
            </S.FilterContent>
          </S.FilterBlock>
        )}

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
