import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Lyrics } from "../container/index";
import { Spinner } from "../components/index";
import { api } from "../constant/index";

function TrackPage() {
	const [track, setTrack] = useState([{}]);
	const [image, setImage] = useState();
	const [lyrics, setLyrics] = useState([]);
	const [type, setType] = useState();
	const [title, setTitle] = useState();
	const [artist, setArtist] = useState();
	const [genre, setGenre] = useState();

	const params = useParams();

	useEffect(() => {
		const loadTrack = async () => {
			try {
				const res = await api.get("/songs/get-details", {
					params: {
						key: params.id,
						locale: "en-US",
					},
				});

				const { images, sections, title, subtitle, genres } = res.data;

				setTrack(res.data);
				setImage(images === undefined ? "" : images.coverarthq);
				setLyrics(sections[1].text);
				setType(sections[1].type);
				setTitle(title);
				setArtist(subtitle);
				setGenre(genres.primary);
				console.log(track);
			} catch (err) {
				console.log(err.message);
			}
		};
		loadTrack();
	}, []);

	return (
		<div>
			<Lyrics
				img={image ? image : ""}
				genre={genre}
				lyrics={lyrics}
				type={type}
				title={title}
				artist={artist}
			/>
		</div>
	);
}

export default TrackPage;
