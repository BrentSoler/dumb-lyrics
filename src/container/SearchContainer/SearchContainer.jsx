import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./css/style.css";

import { api } from "../../constant/index";
import { MusicCard, Spinner } from "../../components/index";

function SearchContainer() {
	const [tracks, setTracks] = useState();

	const params = useParams();

	const loadSearchTrack = async () => {
		try {
			const res = await api.get("/search", {
				params: {
					term: params.id,
					locale: "en-US",
					offset: "0",
					limit: "20",
				},
			});

			setTracks();
			setTracks(res.data.tracks.hits);
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
				tracks.map((track) => {
					const { key, images, title, subtitle } = track.track;

					return (
						<MusicCard
							id={key}
							key={key}
							rank={"norank"}
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

export default SearchContainer;
