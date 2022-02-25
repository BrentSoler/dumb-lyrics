import axios from "axios";

export default axios.create({
	baseURL: "https://shazam.p.rapidapi.com",
	headers: {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		"x-rapidapi-key": "fe2fb09d23msh87fc1c51f64f746p13d972jsn694d61148374",
	},
});
