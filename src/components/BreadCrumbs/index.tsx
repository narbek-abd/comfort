import React, { useEffect, useMemo, useState } from "react";
import * as S from "./style";
import { Link, useLocation } from "react-router-dom";

interface BreadCrumbsProps {
  routes?: { name: string; url: string }[];
}

const BreadCrumbs = ({ routes = [] }: BreadCrumbsProps) => {
  const location = useLocation();

  let initialRoutes = [{ name: "Home", url: "/" }];
  const [generatedRoutes, setGeneratedRoutes] = useState([]);
  const breadCrumbs = initialRoutes.concat(routes).concat(generatedRoutes);

  /** if the routes are not passed, generate by location*/
  useEffect(() => {
    if (routes.length !== 0) return;

    let locationRoutes: BreadCrumbsProps['routes'] = [];
    const currentRoutes = location.pathname.split("/");

    currentRoutes.forEach((route) => {
      if (!route) return;

      let name = route[0].toUpperCase() + route.slice(1);
      name = name.replace(/_/g, " ");

      locationRoutes.push({ name: name, url: route });
    });

    setGeneratedRoutes(locationRoutes);
  }, [location]);



  let currentUrl = "";

  return (
    <S.BreadCrumbs>
      <ul>
        {breadCrumbs.map((breadCrumb, index) => {
          let isLastRoute = index === breadCrumbs.length - 1;

          if (breadCrumb.url !== "/") {
            currentUrl = currentUrl + "/" + breadCrumb.url;
          }

          return (
            <S.BreadCrumbItem key={breadCrumb.name}>
              {isLastRoute ? (
                <S.Active>{breadCrumb.name}</S.Active>
              ) : (
                <Link to={currentUrl || "/"}>{breadCrumb.name} /</Link>
              )}
            </S.BreadCrumbItem>
          );
        })}
      </ul>
    </S.BreadCrumbs>
  );
};

export default BreadCrumbs;
