import React, { useState, useEffect } from "react";
import "./css/style.css";

import { MusicCard, Spinner } from "../../components/index";
import { api } from "../../constant/index";

function TopCharts() {
	const [charts, setCharts] = useState(null);

	const loadChart = async () => {
		try {
			const res = await api.get("/charts/track", {
				params: {
					locale: "en-US",
					pageSize: "10",
					startFrom: "0",
					listId: "ip-country-chart-US",
				},
			});
			setCharts(res.data.tracks);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		loadChart();
	}, []);

	return (
		<div className="music-section">
			<p className="headlines">Top Music Charts</p>
			<div className="music-section__header">
				<h1>CHARTS:</h1>
				<p>See all</p>
			</div>
			<div className="music-section__container">
				{charts ? (
					charts.map((track, i) => {
						const { key, images, title, subtitle } = track;

						return (
							<MusicCard
								id={key}
								key={key}
								rank={i + 1}
								img={images ? images.coverarthq : ""}
								title={title}
								artist={subtitle}
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

export default TopCharts;
