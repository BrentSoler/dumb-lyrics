import React, { useEffect, useState } from "react";

import { NewsCard, Spinner } from "../components/index";
import { newsApi } from "../constant/index";

function NewsPage() {
	const [news, setNews] = useState([]);

	const loadNews = async () => {
		try {
			const res = await newsApi.get("/search", {
				params: {
					q: "music",
					count: "21",
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
		<div className="news-page --main">
			<p className="headlines">All Music News Today</p>
			<div className="news-page__header">
				<h1>TOP NEWS:</h1>
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

export default NewsPage;
