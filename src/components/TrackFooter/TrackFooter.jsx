import React from "react";
import { motion } from "framer-motion";

function TrackFooter(props) {
	const { link, video, vidTitle } = props;

	return (
		<div className="video-thumbnail">
			<a href={link} target="_blank">
				<motion.img
					src={video}
					alt=""
					initial={{}}
					whileHover={{
						scale: 1.2,
						opacity: 0.2,
					}}
					transition={{ stiffness: 200000 }}
				/>
				<h1 className="video-title">{vidTitle}</h1>
			</a>
		</div>
	);
}

export default TrackFooter;
