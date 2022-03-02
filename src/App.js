import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/main.css";

import { Navbar } from "./components/index";
import Home from "./Page/Home";
import NewsPage from "./Page/NewsPage";
import TrackPage from "./Page/TrackPage";
import Search from "./Page/Search";
import TopChartsSearch from "./Page/TopChartsSearch";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/Track/:id" element={<TrackPage />} />
				<Route path="/search/:id" element={<Search />} />
				<Route path="/topcharts" element={<TopChartsSearch />} />
			</Routes>
		</Router>
	);
}

export default App;
