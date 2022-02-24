import React from "react";
import { Link } from "react-router-dom";

import "./css/style.css";

function MusicCard(props) {
	const { rank, title, artist, img, id } = props;

	return (
		<div className="music-card--container">
			<h1 className="rank">{rank}</h1>
			<Link to={`/Track/${id}`} className="--white track-link">
				<div className="music-card">
					<div className="music-card__content">
						<h1>{title}</h1>
						<p>Artist: {artist}</p>
					</div>
					<div className="music-card__img">
						<img src={img} alt={`${title}`} />
					</div>
				</div>
			</Link>
		</div>
	);
}

export default MusicCard;
