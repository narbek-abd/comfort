import React from "react";
import {
Sinput,
} from "./style";

const Input = ({ inputStyle, ...rest }) => {
	return <Sinput {...rest} square={inputStyle === 'square' ? 1 : 0} />;
};

export default Input;
