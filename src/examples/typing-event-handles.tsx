import React from "react";

function Button() {
	// You can get this type by hovering the event param from the inline fn call. E.g. <button onClick={event => ...} />
	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => console.log("Clicked!", event);
	return <button onClick={handleClick}></button>;
}
