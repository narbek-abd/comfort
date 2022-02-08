import React from "react";

import {
Sa,
SLink,
SButton,
} from "./style";

const Button = ({ href, to, children, ...restParams }) => {
	if (href) {
		return <Sa {...restParams}></Sa>;
	} else if (to) {
		return <SLink {...restParams}></SLink>;
	} else {
		return <SButton {...restParams}>{ children }</SButton>;
	}
};

export default Button;
