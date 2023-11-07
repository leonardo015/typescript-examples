import React from "react";

// Tip: Generics are just type parameters

// For relationship between prop and return:
// When the fn param can be of different types (e.g. string or number) and you need the return tyoe to correspond the you use generics
// here youre setting a type parameter of T (can be any name, T or K is the common conventions) and then typing the `value` param with it so you can set the return type dinamically in order for it to return the same type as passed in
function convertToArrayA<T>(value: T): T[] {
	return [value];
}
// convertToArrayA(5)
// convertToArrayA("hello")

// When using arrow functions the type parameter needs to be followed by a comma so it doesnt conflict JSX parsing
const convertToArrayB = <T,>(value: T): T[] => {
	return [value];
};

// For relationship between props
// Since youre typing with generics you need to specify that the fn will use type parameter by adding the `<T>` before the list of parameters and also to the type (both on its definition and on its call)

type ButtonProps<T> = {
	countValue: T;
	countHistory: T[];
};

function ButtonA<T>({ countValue, countHistory }: ButtonProps<T>) {
	return <button>Click me!</button>;
}

// Passing inline type
function ButtonB<T>({
	countValue,
	countHistory,
}: {
	countValue: T;
	countHistory: T[];
}) {
	return <button>Click me!</button>;
}

// Usage example:
function Page() {
	return <ButtonA countValue={5} countHistory={[1, 2, 3, 4]} />;
}
