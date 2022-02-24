import React from "react";

// import "../../styles/css/main.css";

function LyricGenerator(props) {
	const { lyrics } = props;

	return (
		<div className="lyric">
			{lyrics.map((line) => {
				return line === "" ? <br></br> : <p>{line}</p>;
			})}
		</div>
	);
}

export default LyricGenerator;
