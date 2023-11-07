import React from "react";

// Typing variables
// Not needed. TS automatically infers the variable type from its assigned value
let url: string = "http://www.google.com";

// Typing functions
// the return value type is not needed. TS automatically infers it
function convertCurrencyA(amount: number, currency: string): string {
	return "asd";
}
// OR
const convertCurrencyB = (amount: number, currency: string): string => {
	return "asd";
};

// Typing props
// the return value type is not needed. TS automatically infers it
function ButtonA(props: { size: string }): React.JSX.Element {
	return <button>Button</button>;
}
// OR
function ButtonB({ size }: { size: string }) {}
// OR
type ButtonPropsA = { size: string };
function ButtonC({ size }: ButtonPropsA) {}
// OR
type ButtonPropsB = { size: string };
const ButtonD = ({ size }: ButtonPropsB) => {};

// Optional prop
type ButtonPropsC = { size?: string };

// Union type
type ButtonPropsD = {
	backgroundColor: "red" | "blue" | "green";
};
// OR
type Color = "red" | "blue" | "green";
type ButtonPropsE = {
	backgroundColor: Color;
	textColor: Color;
};

// Typing arrays
type ButtonPropsF = {
	padding: number[];
};

// Tuple type
type ButtonPropsG = {
	padding: [number, number, number, number];
};

// React.CSSProperties
type ButtonPropsH = {
	style: React.CSSProperties;
};

// Record type
type ButtonPropsI = {
	borderRadius: Record<string, number>;
};

// Typing functions
type ButtonPropsJ = {
	onClick: () => void;
};

// Typing children React.ReactNode
// ReactNode allows anything to be passed in e.g. JSX elements, strings, booleans
type ButtonPropsK = {
	children: React.ReactNode;
};
function ButtonE({ children }: ButtonPropsK) {
	return <button>{children}</button>;
}

// Typing children React.JSXElement
// JSXElement only allows JSX elements to passed in
type ButtonPropsL = {
	children: React.JSX.Element;
};
export function ButtonF({ children }: ButtonPropsL) {
	return <button>{children}</button>;
}
/* Usage example:
	const icon = <i></i>;
	function Page() {
		<ButtonF>{icon}</ButtonF>;
	}
*/

// Default prop values
// If you have inline props with default value then you dont need to specify their types
function Button({ count = 0, name = "jhon" }) {
	return <button>Click me!</button>;
}
