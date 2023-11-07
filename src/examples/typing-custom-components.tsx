import React from "react";

// type ButtonProps = React.ComponentProps<"button">;
// Use ComponentPropsWithRef if you are accepting ref from outside the component
// type ButtonProps = React.ComponentPropsWithRef<"button">;
// Use ComponentPropsWithoutRef if you are not accepting ref from outside the component
type ButtonPropsA = React.ComponentPropsWithoutRef<"button">;

function ButtonA({ ...rest }: ButtonPropsA) {
	return <button {...rest}>Click me!</button>;
}

function Page() {
	return <ButtonA type="submit" autoFocus={true} className="foobar" />;
}

// Intersection (&)
type ButtonPropsB = ButtonPropsA & {
	variant?: "primary" | "secondary";
};
function ButtonB({ variant, ...rest }: ButtonPropsB) {
	return <button {...rest}>Click me!</button>;
}

// Interface extends
interface ButtonPropsC extends ButtonPropsA {
	variant?: "primary" | "secondary";
}
function ButtonC({ variant, ...rest }: ButtonPropsC) {
	return <button {...rest}>Click me!</button>;
}
