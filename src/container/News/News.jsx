import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./css/style.css";

import { NewsCard, Spinner } from "../../components/index";
import { newsApi } from "../../constant/index";

function News() {
	const [news, setNews] = useState([]);

	const loadNews = async () => {
		try {
			const res = await newsApi.get("/search", {
				params: {
					q: "music",
					count: "5",
					freshness: "Day",
					textFormat: "Raw",
					safeSearch: "Off",
					originalImg: "true",
				},
			});
			setNews(res.data.value);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		loadNews();
	}, []);

	return (
		<div className="news-page">
			<p className="headlines">Top Music News Today</p>
			<div className="news-page__header">
				<h1>NEWS:</h1>
				<Link to="/News" className="--white">
					<motion.p whileHover={{ scale: 1.1, color: "#f20574" }}>See all</motion.p>
				</Link>
			</div>
			<div className="news-container">
				{news ? (
					news.map((news, i) => {
						const { name, datePublished, image, url } = news;
						return (
							<NewsCard
								key={i}
								link={url}
								title={name}
								date={datePublished.split("T")[0]}
								img={image ? image.contentUrl : ""}
							/>
						);
					})
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
}

export default News;
