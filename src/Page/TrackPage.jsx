import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Lyrics } from "../container/index";
import { api } from "../constant/index";

function TrackPage() {
	const [track, setTrack] = useState([]);
	const [image, setImage] = useState();
	const [lyrics, setLyrics] = useState([]);
	const [type, setType] = useState();
	const [title, setTitle] = useState();
	const [artist, setArtist] = useState();
	const [genre, setGenre] = useState();
	const [video, setVideo] = useState();
	const [videoLink, setVideoLink] = useState({});
	const [videoTitle, setVideoTitle] = useState();

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

				setTrack(sections);
				setImage(images === undefined ? "" : images.coverarthq);
				setLyrics(sections[1].text);
				setType(sections[1].type);
				setTitle(title);
				setArtist(subtitle);
				setGenre(genres.primary);
			} catch (err) {
				console.log(err.message);
			}
		};
		loadTrack();
	}, []);

	useEffect(() => {
		let filterVid = track.filter((section) => {
			return section.type === "VIDEO";
		});

		if (filterVid !== undefined) {
			filterVid.map((f) => {
				setVideoLink(f.youtubeurl.actions[0].uri);
				setVideo(f.youtubeurl.image.url);
				setVideoTitle(f.youtubeurl.caption);
			});
		} else {
			setVideoLink("nolink");
		}
	}, [track]);

	return (
		<div onClick={() => console.log(videoLink)}>
			<Lyrics
				img={image ? image : ""}
				genre={genre}
				lyrics={lyrics}
				type={type}
				title={title}
				artist={artist}
				link={videoLink}
				video={video}
				vidTitle={videoTitle}
			/>
		</div>
	);
}

export default TrackPage;
