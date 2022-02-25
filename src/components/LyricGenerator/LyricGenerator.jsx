import React from "react";

// import "../../styles/css/main.css";

function LyricGenerator(props) {
	const { lyrics } = props;

	return (
		<div className="lyric">
			{lyrics.map((line, i) => {
				return line === "" ? <br></br> : <p key={i}>{line}</p>;
			})}
		</div>
	);
}

export default LyricGenerator;
