import React, { useEffect } from "react";

type Theme = "light" | "dark";

// Here youre telling TS that you know better which type is expected from the localStorage
function Button() {
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as Theme;
	}, []);

	return <button>Click me!</button>;
}
