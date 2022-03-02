import axios from "axios";

export default axios.create({
	baseURL: "https://shazam.p.rapidapi.com",
	headers: {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		// MAIN API ACCOUNT
		// "x-rapidapi-key": "fe2fb09d23msh87fc1c51f64f746p13d972jsn694d61148374",
		// SECOND API ACCOUNT
		"x-rapidapi-key": "134e061279mshb204cf406493392p109312jsn794666f9ad05",
	},
});
