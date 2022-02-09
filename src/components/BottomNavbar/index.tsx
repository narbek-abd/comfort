import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon";
import * as S from "./style";


interface MobileNavBarProps {
    name: string
}

const MobileNavBar = ({ name }: MobileNavBarProps) => {
    const history = useNavigate();
    const [activeTabs, setActiveTabs] = useState(name);
    useEffect(() => {
        switch (activeTabs) {
            case "home":
                history("/");
                break;
            case "user":
                history("/user");
                break;
            case "basket":
                history("/basket");
                break;
            case "wishlist":
                history("/wishlist");
                break;
            default:
                history("/");
                break;
        }
    }, [activeTabs, history]);

    return (
        <S.MobileNav>
            <S.MobileList>
                {/* {activeTabs === 'home' &&
                <Icon name="mail" onClick={() => setActiveTabs('home')} />
                  }*/}
                <S.MobileItem
                    onClick={() => setActiveTabs("home")}
                    active={+(activeTabs === "home")}
                >
                    <Icon name="mail" />
                </S.MobileItem>

                <S.MobileItem
                    onClick={() => setActiveTabs("basket")}
                    active={+(activeTabs === "basket")}
                >
                    <Icon name="basket" />
                </S.MobileItem>

                <S.MobileItem
                    onClick={() => setActiveTabs("wishlist")}
                    active={+(activeTabs === "wishlist")}
                >
                    <Icon name="heart" />
                </S.MobileItem>

                <S.MobileItem
                    onClick={() => setActiveTabs("user")}
                    active={+(activeTabs === "user")}
                >
                    <Icon name="user" />
                </S.MobileItem>
            </S.MobileList>
        </S.MobileNav>
    );
};

export default MobileNavBar;
