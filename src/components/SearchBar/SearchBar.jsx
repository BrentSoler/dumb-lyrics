import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./css/style.css";

function SearchBar({ style }) {
	const [text, setText] = useState("");

	const params = useParams();

	return (
		<form className={`searchbar`}>
			<input
				className="searchbar__text"
				type="text"
				placeholder="Search for Music..."
				onChange={(e) => setText(e.target.value)}
				value={text}
			/>
			{text ? (
				<Link to={text === "" ? `/search/${params.id}` : `/search/${text}`} className="link">
					<button className="searchbar__btn"></button>
				</Link>
			) : (
				<Link to="#" className="link">
					<button className="searchbar__btn"></button>
				</Link>
			)}
		</form>
	);
}

export default SearchBar;
