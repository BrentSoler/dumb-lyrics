import React, { useState } from "react";

import "./css/style.css";

function SearchBar({ style }) {
	const [text, setText] = useState("");

	return (
		<form className={`searchbar --${style}`}>
			<input
				className="searchbar__text"
				type="text"
				placeholder="Search for Music..."
				onChange={(e) => setText(e.target.value)}
				value={text}
			/>

			<button className="searchbar__btn"></button>
		</form>
	);
}

export default SearchBar;
