import axios from "axios";

export default axios.create({
	baseURL: "https://bing-news-search1.p.rapidapi.com/news",
	headers: {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "fe2fb09d23msh87fc1c51f64f746p13d972jsn694d61148374",
	},
});
