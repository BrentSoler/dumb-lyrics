import React from "react";

import "./css/style.css";

import { LyricGenerator, Spinner } from "../../components/index";

function Lyrics(props) {
	const { img, lyrics, type, title, artist, genre, link } = props;

	return (
		<div className="wrapper">
			{title ? (
				<div className="lyrics-container">
					<div className="cover-art">
						<a href={link} target="_blank">
							<img
								src={img}
								alt=""
								onClick={() => {
									console.log(lyrics);
								}}
							/>
						</a>
					</div>
					<div className="title-artist">
						<h1>{title}</h1>
						<h3>By: {artist}</h3>
						<h4>Genre: {genre}</h4>
					</div>

					<p className="headlines">Lyrics</p>

					{type !== "LYRICS" ? (
						<LyricGenerator lyrics={["NO LYRICS FOR THIS TRACK"]} />
					) : (
						<LyricGenerator lyrics={lyrics} />
					)}
					<p className="headlines">Video</p>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default Lyrics;
