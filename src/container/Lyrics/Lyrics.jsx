import React from "react";
import { motion } from "framer-motion";

import "./css/style.css";

import { LyricGenerator, Spinner, TrackHeader, TrackFooter } from "../../components/index";

function Lyrics(props) {
	const { img, lyrics, type, title, artist, genre, link, video, vidTitle } = props;

	return (
		<div className="wrapper">
			{title ? (
				<div className="lyrics-container">
					<TrackHeader img={img} link={link} title={title} artist={artist} genre={genre} />

					<p className="headlines">Lyrics</p>

					{type !== "LYRICS" ? (
						<LyricGenerator lyrics={["NO LYRICS AVAILABLE FOR THIS TRACK"]} />
					) : (
						<LyricGenerator lyrics={lyrics} />
					)}

					<p className="headlines">Video</p>

					<TrackFooter video={video} link={link} vidTitle={vidTitle} />
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default Lyrics;
