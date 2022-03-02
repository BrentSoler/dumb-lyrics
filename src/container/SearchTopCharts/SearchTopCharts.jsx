import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./css/style.css";

import { api } from "../../constant/index";
import { MusicCard, Spinner } from "../../components/index";

function SearchTopCharts() {
	let trackLimit = 20;

	const [tracks, setTracks] = useState();

	const params = useParams();

	const loadSearchTrack = async () => {
		try {
			const res = await api.get("/charts/track", {
				params: {
					locale: "en-US",
					pageSize: "20",
					startFrom: "0",
					listId: "ip-country-chart-US",
				},
			});
			setTracks();
			setTracks(res.data.tracks);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		setTracks();
		loadSearchTrack();
	}, [params.id]);

	return (
		<div className="search-container">
			{tracks ? (
				tracks.map((track, i) => {
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
	);
}

export default SearchTopCharts;
