import React from "react";
import { type Color } from "../lib/types";

type ButtonProps = {
	color: Color;
	fontSize: number;
};

function Button({ color, fontSize }: ButtonProps) {
	return <button>Click me!</button>;
}
