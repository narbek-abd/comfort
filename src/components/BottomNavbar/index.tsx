import React, { useState, useEffect } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import Icon from "../Icon";
import * as S from "./style";

const BottomNavBar = () => {
    const [activeTabId, setActiveTab] = useState(0);
    const location = useLocation();

    const tabs = [
        { id: 1, name: "home", checkMatchLink: "/", link: "/", icon: "home" },
        {
            id: 2,
            name: "catalog",
            checkMatchLink: "/catalog/*",
            link: "/catalog",
            icon: "shopping",
        },
        {
            id: 3,
            name: "cart",
            checkMatchLink: "/cart/*",
            link: "/cart",
            icon: "basket",
        },
        {
            id: 4,
            name: "wishlist",
            checkMatchLink: "/user/wishlist",
            link: "/user/wishlist",
            icon: "heart",
        },
    ];

    useEffect(() => {
        for (let tab of tabs) {
            const match = matchPath(tab.checkMatchLink, location.pathname);

            if (!match) continue;

            setActiveTab(tab.id);
            break;
        }
    }, [location]);

    return (
        <S.MobileNav>
            <S.MobileList>
                {tabs.map((tab) => {
                    return (
                        <Link key={tab.id} to={tab.link}>
                            <S.MobileItem active={+(activeTabId === tab.id)}>
                                <Icon name={tab.icon} width={88} />
                            </S.MobileItem>
                        </Link>
                    );
                })}
            </S.MobileList>
        </S.MobileNav>
    );
};

export default BottomNavBar;
