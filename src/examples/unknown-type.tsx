import React, { useEffect } from "react";

// making response data `unknown` so its not `any` and also check if its shape is valid with some lib like Zod before using the data to prevent errors.
function Button() {
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((res) => res.json())
			.then((data: unknown) => {
				// run it through Zod:
				// const todo = todoSchema.parse(data);
				// do something with the data
			});
	}, []);
}

// Tip: theres a lib `ts-reset` that automatically adds `unknown` type to fetch responses
