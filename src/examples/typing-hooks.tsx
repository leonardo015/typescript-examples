import React, { useRef, useState } from "react";

// Typing useState hook
type User = {
	name: string;
};

function ButtonA() {
	// For primitive values the state is automatically infered by typescript
	const [count, setCount] = useState(0);
	const [foo, setFoo] = useState("bar");
	// For object values you have to type the hook usingn a type parameter
	const [user, setUser] = useState<User | null>(null);
	// When using a object state you usually initiate its value with null, for this case you gotta add the `| null` to the typing
	// and also be careful when accessing its properties due to its posibility of being null by adding the optional chaining `?` before accessing its props
	const name = user?.name;

	return <button>Click me!</button>;
}

// Typing useState setter function
type ButtonProps = {
	// you can get this type by hovering the setCount fn definition on line 14
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

function ButtonB({ setCount }: ButtonProps) {
	return <button>Click me!</button>;
}

export function Page() {
	const [count, setCount] = useState(0);
	return <ButtonB setCount={setCount} />;
}

// useEffect hook dont need typing

// typing useRef hook
function ButtonC() {
	// You better be specific about the element that will be using the ref. For this case a button element. Also dont need to do `or null`
	const ref = useRef<HTMLButtonElement>(null);

	return <button ref={ref}>Click me!</button>;
}

// Typing useContext: TODO: check ByteGrad's video about this
