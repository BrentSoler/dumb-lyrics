import React from "react";
import { motion } from "framer-motion";

function TrackHeader(props) {
	const { img, link, title, artist, genre } = props;

	return (
		<div className="track-header">
			<div className="cover-art">
				{link !== "nolink" ? (
					<a href={link} target="_blank">
						<motion.img
							src={img}
							alt=""
							whileHover={{
								scale: 1.2,
								opacity: 0.2,
							}}
							transition={{ stiffness: 200000 }}
						/>
					</a>
				) : (
					<img src={img} alt="" />
				)}
			</div>
			<div className="title-artist">
				<h1>{title}</h1>
				<h3>By: {artist}</h3>
				<h4>Genre: {genre}</h4>
			</div>
		</div>
	);
}

export default TrackHeader;
