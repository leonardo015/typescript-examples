import React, { useEffect } from "react";

const buttonTextOptions = ["Click me!", "Tap me!"] as const;

function Button() {
	useEffect(() => {
		// TS wont let you modify buttonTextOptions since its now readonly
		// buttonTextOptions.push("asd");
	}, []);

	return <button>{buttonTextOptions[0]}</button>;
}
