import React from "react";

import "./css/style.css";

import { LyricGenerator } from "../../components/index";

function Lyrics(props) {
	const { img, lyrics, type, title } = props;

	return (
		<div className="lyrics-container">
			<div className="cover-art">
				<img
					src={img}
					alt=""
					onClick={() => {
						console.log(lyrics);
					}}
				/>
			</div>

			<h1>{title}</h1>

			{type !== "LYRICS" ? (
				<LyricGenerator lyrics={["NO LYRICS FOR THIS TRACK"]} />
			) : (
				<LyricGenerator lyrics={lyrics} />
			)}
		</div>
	);
}

export default Lyrics;
