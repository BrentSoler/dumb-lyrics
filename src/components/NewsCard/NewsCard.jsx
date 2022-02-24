import React from "react";
import { motion } from "framer-motion";

import "./css/style.css";

function NewsCard(props) {
	const { title, date, img, link } = props;

	return (
		<a href={link} target="_blank" rel="noreferrer">
			<motion.div
				className="newscard-container"
				whileHover={{ y: -10, zIndex: 2 }}
				onTap={{ scale: 0.9 }}
			>
				<img src={img} alt={`Thumbnail for  ${title}`} />
				<div className="news-card__content">
					<h2 className="headline">{title}</h2>
					<p className="date">{date}</p>
				</div>
			</motion.div>
		</a>
	);
}

export default NewsCard;
