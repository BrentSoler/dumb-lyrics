import React from "react";

import { SearchBar } from "../components/index";
import { SearchTopCharts } from "../container/index";

function TopChartsSearch() {
	return (
		<div>
			<SearchBar />
			<SearchTopCharts />
		</div>
	);
}

export default TopChartsSearch;
