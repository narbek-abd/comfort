import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon";
import { SMobileNav, SMobileList, SMobileItem } from "./style";

const MobileNavBar = (props) => {
    const history = useNavigate();
    const [activeTabs, setActiveTabs] = useState(props.name);
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
        <SMobileNav>
            <SMobileList>
                {/* {activeTabs === 'home' &&
                <Icon name="mail" onClick={() => setActiveTabs('home')} />
                  }*/}
                <SMobileItem
                    onClick={() => setActiveTabs("home")}
                    active={+(activeTabs === "home")}
                >
                    <Icon name="mail" />
                </SMobileItem>

                <SMobileItem
                    onClick={() => setActiveTabs("basket")}
                    active={+(activeTabs === "basket")}
                >
                    <Icon name="basket" />
                </SMobileItem>

                <SMobileItem
                    onClick={() => setActiveTabs("wishlist")}
                    active={+(activeTabs === "wishlist")}
                >
                    <Icon name="heart" />
                </SMobileItem>

                <SMobileItem
                    onClick={() => setActiveTabs("user")}
                    active={+(activeTabs === "user")}
                >
                    <Icon name="user" />
                </SMobileItem>
            </SMobileList>
        </SMobileNav>
    );
};

export default MobileNavBar;
